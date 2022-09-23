import { Construct } from 'constructs'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import { Stack, StackProps } from 'aws-cdk-lib'

const region = 'ap-southeast-1'

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const defaultVpc = ec2.Vpc.fromLookup(this, 'VPC', { isDefault: true })
    const params: ec2.InstanceProps = {
      vpc: defaultVpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      machineImage: ec2.MachineImage.genericLinux({
        [region]: 'ami-07651f0c4c315a529',
      }),
      keyName: 'key',
    }
    new ec2.Instance(this, 'ec2-instance', params)
  }
}
