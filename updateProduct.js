'use strict';
const AWS = require('aws-sdk');

module.exports.updateProduct = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'base64').toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      primary_key: body.name,
      email: body.email,
    },
	// Update the "content" column with the one passed in
    UpdateExpression: "SET content = :content",
    ExpressionAttributeValues: {
      ":content": body.content || null,
    },
    ReturnValues: "ALL_NEW",
  };
  await dynamoDb.update(putParams).promise();

  return {
    statusCode: 201,
	body
  };
};