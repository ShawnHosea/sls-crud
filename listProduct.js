'use strict';
const AWS = require('aws-sdk');

module.exports.listProduct = async (event) => {

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": '*'
};

// Scans database for all items and lists output
const output = await dynamoDb
    .scan({
      TableName: tableName,
    })
    .promise();

  return {
    statusCode: 201,
    headers,
    body: JSON.stringify(output.Items)
  };

};