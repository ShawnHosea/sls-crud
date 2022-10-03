# Serverless Backend

Serverless Framework REST API with AWS API Gateway which supports CRUD functionality (Create, Read, Update, Delete). DynamoDB for persistence.

### Endpoints:

- **POST** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product
- **GET** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **PUT** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **DELETE** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
- **GET** - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products

### Test endpoints w/cURL

```bash
curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76
```
```bash
curl -X POST -d '{"name":"iphoneX", "description":"mobile device", "price":800}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product
```
```bash
curl -X PUT -d '{"name":"iphone 14", "description":"mobile device", "price":1500}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/5cacf9c6-e690-4b55-8e87-f53a0bd4ee80
```
```bash
curl -X GET -d --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/5503cba0-50cc-4072-a410-c15a21162dd2
```
```bash
curl -X POST -d '{"name":"Gareth Mc Cumskey"}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/delete
```
```bash
curl -X DELETE --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76
```
```bash
curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products
```


