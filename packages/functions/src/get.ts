import dynamoDB from '@sst-serverless-poc/core/dynamodb';
import handler from '@sst-serverless-poc/core/handler';
import { Table } from 'sst/node/table';

export const main = handler(async (event: any) => {
  const params = {
    TableName: Table.Notes.tableName,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId, // The id of the author
      noteId: event.pathParameters.id // The id of the note from the path
    }
  };

  const result = await dynamoDB.get(params);
  if (!result.Item) {
    throw new Error('Item not found.');
  }
  return result.Item;
});
