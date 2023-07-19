import { SSTConfig } from 'sst';
import { ApiStack } from './stacks/ApiStack';
import { StorageStack } from './stacks/StorageStack';

export default {
  config(_input) {
    return {
      name: 'sst-serverless-poc',
      region: 'us-east-1'
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack);
  }
} satisfies SSTConfig;
