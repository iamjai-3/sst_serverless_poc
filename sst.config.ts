import { SSTConfig } from 'sst';
import { StorageStack } from './stacks/StorageStack';

export default {
  config(_input) {
    return {
      name: 'sst-serverless-poc',
      region: 'ap-south-1'
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  }
} satisfies SSTConfig;
