import dynamoDB from '@sst-serverless-poc/core/dynamodb';
import handler from '@sst-serverless-poc/core/handler';
import { Table } from 'sst/node/table';
import * as uuid from 'uuid';

export const main = handler(async (event: any) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: Table.Notes.tableName,
    Item: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  await dynamoDB.put(params);
  return params.Item;
});
