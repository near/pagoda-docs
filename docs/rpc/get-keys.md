---
sidebar_position: 3
sidebar_label: Get API Keys 
title: Get Pagoda API Keys
---

1. Register an account on [Pagoda Console](https://console.pagoda.co/):

   ![](/img/getkey1.png)

2. Create a blank project

   ![](/img/getkey2.png)

3. Give your project a cool name

   ![](/img/getkey3.png)

4. Grab your API Key

   Click the API Tab and you will see your API key already generated for you and ready to use, remember to switch networks for `MainNet` using the button on top, you can also navigate through your different projects there.

   ![](/img/getkey4.png)

5. Connect to Pagoda RPC Node

   Follow the instructions on the screen to set up your Pagoda RPC Access, we have created a quick setup guide for all NEAR tools.
   - `https://near-testnet.api.pagoda.co/rpc/v1/`
   - `https://near-mainnet.api.pagoda.co/rpc/v1/`

   ![](/img/getkey5.png)

6. You can use this line of code for a quick test

   ```sh
   curl -X POST -H 'x-api-key:<YOUR-API-KEY>' -H 'Content-Type: application/json' -d '{"jsonrpc": "2.0", "id":"dontcare","method":"status","params":[] }' https://near-testnet.api.pagoda.co/rpc/v1/
   ```

   ![](/img/getkey6.png)

Congrats! You are connected!
