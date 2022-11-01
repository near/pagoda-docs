---
sidebar_position: 1
---

# Pagoda RPC

## Overview

The Pagoda RPC provides you with instant access to maintenance free, scalable NEAR infrastructure, powering you on the fastest path from ideas to launch.

Developers can interact with on-chain data and send different types of transactions to the network by utilizing the endpoints.

In addition to the powerful node infrastructure, we also created the Pagoda RPC Stats page so that you can have visibility into your RPC usage and performances and take control of your project from the infrastructure level. What’s more? You can subscribe to the alerts from our Status page so that you can follow the health of Pagoda RPC real time. All accesbile via [Pagoda Console](https://console.pagoda.co/).

## Set Up

-    POST for all RPC methods
-    JSON RPC 2.0
-    id: "dontcare"
-    Endpoint URL varies by network
  -      https://near-testnet.api.pagoda.co/rpc/v1/
  -      https://near-mainnet.api.pagoda.co/rpc/v1/
-    We are working on supporting historical data access in the next phase

## API Keys

When accessing the NEAR network via a node provider, API services like Pagoda require an API key, which allows developers to monitor personal apps and access usage metrics.

For the best development experience, we recommend that you sign up for a free API key with the detailed guide here<This is a pdf link on my google cloud, how can we make this a webpage with pdf?>!

With a dedicated API key, developers are able to:

-    access higher request throughput and increased concurrent requests
-    query data from Enhanced APIs **link out to enhanced api documentation once we have it**, gaining access to free processed data for NFT, FT and NEAR balances, ownership and metadata
-    utlize your dedicated, individualized usage metrics

## Quickly Test your API keys and Connection

```sh
curl -X POST -H 'x-api-key:<YOUR-API-KEY>' -H 'Content-Type: application/json' -d '{"jsonrpc": "2.0", "id":"dontcare","method":"status","params":[] }' https://near-testnet.api.pagoda.co/rpc/v1/
```

## Postman Setup
**I used what’s in NEAR Docs, need to update the pics embed**

An easy way to test the queries in this documentation page is to use an API request tool such as [Postman](https://www.postman.com/).
You only need to configure two things:

1.    Make sure you add a header with a key of Content-Type and value of application/json.
    postman-setup-header

2.    Then select the Body tab and choose the raw radio button and ensure JSON is the selected format.
    postman-setup-header

After that is set up, just copy/paste the JSON object example snippets below into the body of your request, on Postman, and click send.

## Command Line (NEAR CLI) Setup

1.    If you don’t yet have near-cli installed on your machine, follow the instructions in the near-cli installation docs
2.    Set your RPC URL:

```
export NEAR_CLI_TESTNET_RPC_SERVER_URL=https://near-testnet.api.pagoda.co/rpc/v1/
```
3.    configure your API key:

```
near set-api-key $NEAR_CLI_TESTNET_RPC_SERVER_URL <your API Key>
```

## JavaScript Setup

All of the queries listed in this documentation page can be called using near-api-js.

    For near-api-js installation and setup please refer to near-api-js quick reference documentation.
    Add the following code to get started:

```js
const { connect, keyStores } = require("near-api-js");

// Can be an empty object if not signing transactions

const keyStore = new keyStores.BrowserLocalStorageKeyStore();

const RPC_API_ENDPOINT = 'https://near-testnet.api.pagoda.co/rpc/v1/';
const API_KEY = '<YOUR-API-KEY>';

const ACCOUNT_ID = 'account.near';

const config = {
    networkId: 'testnet',
    keyStore,
    nodeUrl: RPC_API_ENDPOINT,
    headers: { 'x-api-key': API_KEY },
};

// Example: Fetching account status

async function getState(accountId) {
    const near = await connect(config);
    const account = await near.account(accountId);
    const state = await account.state();
    console.log(state);
}

getState(ACCOUNT_ID);
```

-    All JavaScript code snippets require a near object. For examples of how to instantiate, click here.

## Rust(near-jsonrpc-client) Setup

Example of asynchronously fetching the latest block using tokio:

```rust
use near_jsonrpc_client::{auth, methods, JsonRpcClient};
use near_primitives::types::{BlockReference, Finality};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = JsonRpcClient::connect("https://near-testnet.api.pagoda.co/rpc/v1/")
        .header(auth::ApiKey::new("<YOUR-API-KEY>")?);

    let request = methods::block::RpcBlockRequest {
        block_reference: BlockReference::Finality(Finality::Final),
    };

    let response = client.call(request).await?;

    println!("{:?}", response);

    Ok(())
}
```

## HTTPie Setup

If you prefer to use a command line interface, we have provided RPC examples you can use with HTTPie. Please note that params take
either an object or array passed as a string.

```
http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=network_info params:='[]'
```

## Using `block_id` param

The block_id param can take either the block number (e.g. 27912554) or the block hash (e.g. '3Xz2wM9rigMXzA2c5vgCP8wTgFBaePucgUmVYPkMqhRL' ) as an argument.

:::caution

The block IDs of transactions shown in NEAR Explorer are not necessarily the block ID of the executed transaction. Transactions may execute a block or two after its recorded, and in some cases, can take place over several blocks. Due to this, it is important to to check subsequent blocks to be sure all results related to the queried transaction are discovered.

:::

## Using `finality` param

The finality param has two options: optimistic and final.

1.    optimistic uses the latest block recorded on the node that responded to your query (<1 second delay after the transaction is submitted)
2.    final is for a block that has been validated on at least 66% of the nodes in the network (usually takes 2 blocks / approx. 2 second delay)
