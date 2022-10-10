'use strict';
const AWS = require('aws-sdk');

module.exports.updateProduct = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };

  // Retrives individual item from database using item id
  const id = event.pathParameters?.id 
  const output = await dynamoDb.get({
    TableName: tableName,
    Key: {
      productID: id
    }
  }).promise();

  if (!output.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({error: "not found"})
    }
  }

  const product = {
    ...body,
    productID: id
  };

  // Updates item parameters
    await dynamoDb.put({
      TableName: tableName,
      Item: product
    }).promise();

    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(product)
    };
};