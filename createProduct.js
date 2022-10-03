'use strict';
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');


module.exports.createProduct = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
  };

  // Creates item in database
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const product = {
    ...body,
    productID: uuidv4()
  };

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