'use strict';
const AWS = require('aws-sdk');

module.exports.deleteProduct = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": '*'
  };

  // Gets individual item from database using productID attribute
  const id = event.pathParameters?.id 

  const output = await dynamoDb.get({
    TableName: tableName,
    Key: {
      productID: id
    }
  }).promise();

  // If item does not exist in databse, outputs error
  if (!output.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({error: "not found"})
    }
  }

  // If item exists in database, deletes item
  await dynamoDb.delete({
    TableName: tableName,
    Key: {
      productID: id,
    }
  }).promise();
 
  
  return {
    statusCode: 204,
    headers,
    body: ""
  };
};