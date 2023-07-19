import dynamoDB from '@sst-serverless-poc/core/dynamodb';
import handler from '@sst-serverless-poc/core/handler';
import { Table } from 'sst/node/table';
import * as uuid from 'uuid';

export const main = handler(async (event: any) => {
  // Request body is passed in as a JSON encoded string in 'event.body'

  const data = JSON.parse(event.body);

  const params = {
    // Get the table name from the environment variable
    TableName: Table.Notes.tableName,
    Item: {
      // The attributes of the item to be created
      userId: '123', // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: data.content, // Parsed from request body
      attachment: data.attachment, // Parsed from request body
      createdAt: Date.now() // Current Unix timestamp
    }
  };

  await dynamoDB.put(params);
  return params.Item;
});
