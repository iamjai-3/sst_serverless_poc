import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();

export default {
  get: (params: any) => dynamoDb.get(params).promise(),
  put: (params: any) => dynamoDb.put(params).promise(),
  query: (params: any) => dynamoDb.query(params).promise(),
  update: (params: any) => dynamoDb.update(params).promise(),
  delete: (params: any) => dynamoDb.delete(params).promise()
};
