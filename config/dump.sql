CREATE TABLE products (
	id text not null,
	title text not null,
  price int not null
);

INSERT INTO products ( id, title, price ) VALUES ( '0bd6e264-815c-4b71-890c-f9f40a5abb50', 'Indian Book', 15);
INSERT INTO products ( id, title, price ) VALUES ( '15c40e6a-ff28-455d-b178-548686049d79', 'Japan Book', 48);
INSERT INTO products ( id, title, price ) VALUES ( 'e7150ff8-bc06-4938-a1ec-9f69e76c66dc', 'Russian Book', 83);
INSERT INTO products ( id, title, price ) VALUES ( '78b30465-17cc-49a1-8942-b03d7f2d5fad', 'English Book', 70 );