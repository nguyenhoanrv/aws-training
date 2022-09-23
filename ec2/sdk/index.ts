import {
  EC2Client,
  RunInstancesCommand,
  RunInstancesCommandInput,
} from '@aws-sdk/client-ec2'

const region = 'ap-southeast-1'

const client = new EC2Client({ region })

const instanceParams: RunInstancesCommandInput = {
  ImageId: 'ami-07651f0c4c315a529',
  InstanceType: 't2.micro',
  KeyName: 'key',
  MaxCount: 1,
  MinCount: 1,
  TagSpecifications: [
    {
      Tags: [
        {
          Key: 'Name',
          Value: 'make by sdk',
        },
      ],
      ResourceType: 'volume',
    },
  ],
}

;(async () => {
  try {
    await client.send(new RunInstancesCommand(instanceParams))
  } catch (error) {
    console.error(error)
  }
})()
