# AWS

## Private SubnetのEC2にSSHでアクセスする

```sh
PRIVATE_KEY=
USER=ec2-user
INSTANCE_ID=

ssh -i $PRIVATE_KEY $USER@$INSTANCE_ID -o ProxyCommand="aws ec2-instance-connect open-tunnel --instance-id $INSTANCE_ID"
```

```sh
PRIVATE_KEY=
USER=ec2-user
INSTANCE_ID=
SEND=
REMOTE_DIR=/home/$USER

scp -i $PRIVATE_KEY -o ProxyCommand="aws ec2-instance-connect open-tunnel --instance-id $INSTANCE_ID" $SEND $USEER@$INSTANCE_ID:$REMOTE_DIR
```
