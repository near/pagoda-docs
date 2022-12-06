---
sidebar_position: 1
sidebar_label: "Introduction"
---

# NEAR Lake Indexer

NEAR Lake is an indexer built on top of [NEAR Indexer Framework](https://near-indexers.io/docs/projects/near-indexer-framework) to watch the network and store all the events as JSON files on AWS S3.
[Pagoda Inc.](https://pagoda.co) runs NEAR Lake nodes to store the data in JSON format on AWS S3.
With this fully managed solution by Pagoda, you don't need to run your own NEAR Lake Nodes and AWS S3 buckets. 
Our NEAR Lake is used for many Pagoda products, such as Enhanced API, Alerts, and Explorer, as
well as by large dApps like [ref.finance](https://www.ref.finance/).

## How it works

Pagoda hosts and maintains the following AWS S3 buckets:

- `near-lake-data-testnet` (`eu-central-1` region)
- `near-lake-data-mainnet` (`eu-central-1` region)

All the buckets are set up the way the requester pays for the access. Anyone can read from these buckets by connecting to them with their own AWS credentials to be charged by Amazon.
To learn more about AWS Requester Pays buckets for storage transfers and usage, see _[Using Requester Pays buckets for storage transfers and usage](https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html)_.

## Creating AWS Credentials
To get objects from NEAR Lake AWS S3 bucket you need to provide the AWS credentials.

AWS default profile configuration with `aws configure` looks similar to the following:

```
cat ~/.aws/credentials
```

```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

To learn more about AWS Configuration and credential file settings, see _[Configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)_.

## Cost Estimates
The overall cost is approximately $18.15 per month (for AWS S3 access, paid directly to AWS) for the reading of fresh blocks.

Assuming NEAR Protocol produces exactly 1 block per second (lower bound, the average block production rate is ~1.3s).
Therefore, the total number of blocks that can be produced per day is 86400 seconds.

According to the [Amazon S3 prices](https://aws.amazon.com/s3/pricing/?nc1=h_ls):
- `list` requests are charged $0.005 per 1000 requests
- `get` requests are charged $0.0004 per 1000 requests

Calculations (assuming we are following the tip of the network all the time):

```
86400 blocks per day * 5 requests for each block / 1000 requests * $0.0004 per 1k requests = $0.173 * 30 days = $5.19
```
:::info Note
5 requests for each block means we have 4 shards (1 file for common block data and 4 separate files for each shard)
:::

And a number of `list` requests we need to perform for 30 days:

```
86400 blocks per day / 1000 requests * $0.005 per 1k list requests = $0.432 * 30 days = $12.96

$5.19 + $12.96 = $18.15
```

The price depends on the number of shards.


## Developer Documentation
To read more about using NEAR Lake, please refer to the [official tutorials](https://docs.near.org/tutorials/indexer/near-lake-state-changes-indexer).
