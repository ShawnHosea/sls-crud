'use strict';
const AWS = require('aws-sdk');


module.exports.getProduct = async (event) => {

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
const headers = {
  "content-type": "application/json",
};

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
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(output.Item)
  };
};