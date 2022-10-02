'use strict';
const AWS = require('aws-sdk');

module.exports.deleteProduct = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
  };
  console.log(event)
    
  const productID = event.pathParameters.id;
  console.log(productID)

 
  
      return {
        statusCode: 200,
        headers,
       
      };
};