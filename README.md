<h1>CloudX-Shop</h1>
To start app locally:

docker-compose up -d
To stop app locally:

docker-compose down --rmi all
Also it is necessary to fill DB by data from next directory ( You can connect to DB after starting the App ):

https://github.com/Major98113/cloudx-shop/blob/master/products-service/migrations/dump.sql

App will work on 8080 port

