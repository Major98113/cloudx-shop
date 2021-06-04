import { v4 as uuidv4 } from 'uuid';
import { injectable } from 'inversify';
import 'reflect-metadata';

import { DBInterface } from '../types/db.types';
import { Product } from '../types/products.types';
import { serviceLogger as log } from '../utils/logger.helpers';

@injectable()
class ProductsService{
    private readonly DB: DBInterface;
    private readonly table = `products`;

    constructor( DB: DBInterface ) {
        this.DB = DB;
    }

    @log
    public async getAllProducts( ): Promise<Product[]> {
        const { rows } = await this.DB.query(
            `SELECT * FROM ${ this.table }`
        );

        return rows;
    }

    @log
    public async getProductById( id: string ): Promise<Product> {
        const { rows: [ product ] } = await this.DB.query(
            `SELECT * FROM ${ this.table }
                WHERE id = '${ id }'`
        );

        return product;
    }

    @log
    public async createProduct( title: string, price: number ) {
        const productId: string = uuidv4();

        return await this.DB.query(
            `INSERT INTO ${ this.table }
                ( id, title, price )
                    VALUES ( '${ productId }', '${ title }', ${ price }) RETURNING *`
        )
    }
}

export { ProductsService };