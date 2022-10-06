'use strict';
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');


module.exports.createProduct = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
    // "Access-Control-Allow-Origin": "http://localhost:3000"

  };
  let createdAt = new Date()
  console.log(createdAt)
  // Creates item in database
  const body = JSON.parse(event.body);
  const product = {
    ...body,
    productID: uuidv4(),
    createdAt
  };
console.log(body)
console.log(product)
  
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