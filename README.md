# Serverless Backend

Serverless Framework `REST API` with `AWS API Gateway` which supports `CRUD` functionality (`Create`, `Read`, `Update`, `Delete`). `DynamoDB` for persistence.

## Endpoints:

- **POST** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product
- **GET** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **PUT** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **DELETE** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **GET** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products

### Test endpoints w/cURL

**Create product**
```bash
curl -X POST -d '{"name":"iphoneX", "description":"mobile device", "price":800}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product
```

**Get product**
```bash
curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76
```

**Update Product**
```bash
curl -X PUT -d '{"name":"iphone 14", "description":"mobile device", "price":1500}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/5cacf9c6-e690-4b55-8e87-f53a0bd4ee80
```

**Delete product**
```bash
curl -X DELETE --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76
```

**List all products**
```bash
curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products
```


