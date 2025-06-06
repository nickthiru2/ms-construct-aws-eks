// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface MsConstructAwsEksProps {
  // Define construct properties here
}

export class MsConstructAwsEks extends Construct {

  constructor(scope: Construct, id: string, props: MsConstructAwsEksProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'MsConstructAwsEksQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
