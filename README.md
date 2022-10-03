### endpoints:

  POST - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product
  GET - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
  PUT - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
  DELETE - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/{id}
  GET - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products

### Deployment

```
$ serverless deploy
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76

curl -X POST -d '{"name":"iphoneX", "description":"mobile device", "price":800}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product

curl -X PUT -d '{"name":"iphone 14", "description":"mobile device", "price":1500}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/5cacf9c6-e690-4b55-8e87-f53a0bd4ee80

curl -X GET -d --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/5503cba0-50cc-4072-a410-c15a21162dd2

curl -X POST -d '{"name":"Gareth Mc Cumskey"}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/delete

curl -X DELETE --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/product/3321064c-b8d2-4c89-aeee-ec0a93602c76

curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/products

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

