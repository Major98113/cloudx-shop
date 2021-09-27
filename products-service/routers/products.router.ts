import express from 'express';

import { serviceContainer } from '../config/inversify.config';

import { DB, DBInterface } from "../types/db.types";
import { QueueInterface, QUEUE } from '../types/queue.types';

import { ProductsService } from "../services/products.service";
import { routerErrorLog } from "../utils/logger.helpers";
import { Product } from '../types/products.types';

const router = express.Router();

const ProductsServiceInstance = new ProductsService( serviceContainer.get<DBInterface>(DB) );
const QueueInstance = serviceContainer.get<QueueInterface>(QUEUE);

router.get('/', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const products = await ProductsServiceInstance.getAllProducts();

        if ( products )
            return res.status(200).json({ products });

        return next({
            statusCode: 400,
                message: 'Bad request!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /products', req.query, error ) );
    }
});

router.get('/:id', async ( req: express.Request, res: express.Response, next ) => {
    try {
        const { id } = req.params;
        const product: Product = await ProductsServiceInstance.getProductById(id);
        
        await QueueInstance.sendToQueue( `Requested product "${ product.title }" with id: ${ product.id } at ${ Date() }` );

        if( product )
            return res.status(200).json({ product });

        return next({
            statusCode: 404,
            message: 'Product not found!'
        });
    }
    catch( error ){
        next( routerErrorLog('GET /products/:id', req.params, error ) );
    }
});

router.post('/', async ( req: express.Request, res: express.Response, next ) => {
    try{
        const { title, price } = req.body;
        const product = await ProductsServiceInstance.createProduct( title, price );

        await QueueInstance.sendToQueue( `Created product "${ product.title }" with id: ${ product.id } at ${ Date() }` );
        
        if( product )
            return res.status(200).json({ product })

        return next({
            statusCode: 400,
            message: 'Product is already exists!'
        });
    }
    catch( error ){
        next( routerErrorLog('POST /products', req.body, error ) );
    }
});

export default router;