### endpoints:

  POST - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/
  GET - https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/

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

- `curl --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/`
- `curl -X POST -d '{"name":"Gareth Mc Cumskey" "email":"gareth@mccumskey.com"}' --url https://6hbhuqczsf.execute-api.us-east-1.amazonaws.com/`
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

