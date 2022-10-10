'use strict';
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');


module.exports.createProduct = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
  const headers = {
    "content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };

  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date+' '+time;
  let createdDate = dateTime
  console.log(createdDate);

  // Creates item in database
  const body = JSON.parse(event.body);
  const product = {
    ...body,
    productID: uuidv4(),
    createdDate
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