import dynamoDB from '@sst-serverless-poc/core/dynamodb';
import handler from '@sst-serverless-poc/core/handler';
import { Table } from 'sst/node/table';

export const main = handler(async (event: any) => {
  const params = {
    TableName: Table.Notes.tableName,
    Key: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      noteId: event.pathParameters.id
    }
  };

  await dynamoDB.delete(params);
  return { status: true };
});
