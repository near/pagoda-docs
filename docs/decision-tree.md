---
sidebar_position: 2
---

# Data Decision Tree

NEAR Data Decision Tree As of 2022

:::tip

[Loom Video Overview](https://www.loom.com/share/b6894b06a617453b81ae8872ab914b76)

:::

![](/img/tree/image4.png)


**Color code:**
- Orange: Open source tools
- Green: Building Tools
- Purple: Observability Tools
- Yellow: Analytics Tools


:::info Recommended approach as of now

**Pagoda RPC + Enhanced API+ NEAR Lake**.
You can find tutorials on how to get started with these tools in [NEAR](http://docs.near.org) and [Pagoda Docs](http://docs.pagoda.co). 

:::

Pagoda is actively working on the Pagoda API solution to provide the easiest data reading experience on NEAR, refer here for the roadmap and decision tree for Pagoda’s solution planned and in development.


## Data Stack

:::tip

[Loom Video Overview](https://www.loom.com/share/fe7ccc38b0fc4004bbabcecec86acf16)

:::

### Building Tools

Pagoda DataStack is a fully managed infrastructure for all data access use-cases. With Pagoda DataStack developers don’t need to run blockchain nodes, indexers and analytical databases, focusing their precious time on the business logic. DataStack is the only solution developers need to interact with NEAR blockchain to write, query and aggregate on-chain data in any shape they want.


- **[Pagoda RPC](https://docs.pagoda.co/rpc):** Premium RPC service provides you with instant access to fully managed and scalable NEAR infrastructure, so that you don’t have to run your own node.

- **Query API:** Define your analytical queries and aggregation, and we will provision your own set of APIs instantly accessible by any part of your application. Say bye to building and maintaining your own indexers, databases and APIs.

- **[Enhanced API](https://docs.pagoda.co/api):** Growing suite of enriched data APIs aims to make NEAR data access easy for your life as a developer. Avoid building a separate indexer infrastructure or complex blockchain requests, get all the data you need for specific NFT, FT, transactions, balances, accounts, contract and events in a few requests. 

- **NEAR Lake Indexer:** leverages the indexer micro-framework to watch and store all of the blockchain's events/data as JSON files on a user-specified AWS S3 or S3-compatible storage.

- **NEAR Lake Framework:** a companion library to NEAR Lake[e]. It allows you to build your own indexer that watches a stream of blocks from a NEAR Lake data source and allows you to create your own logic to process that data. Keep in mind this is probably the one you want to use for future projects, instead of the Indexer Framework. Read why it is better.

- **NEAR Indexer Framework:** a micro-framework providing you with a "live" stream of blocks from a running node. Useful for near real-time block processing, but requires managing your own node.

- **NEAR Indexer for Explorer:** leverages the indexer micro-framework to watch and store all of the blockchain's events/data into a transactional PostgreSQL database. You can clone the GitHub repository and customize your own indexer solution.


![](/img/tree/image2.png)


## Observability Stack 

:::tip

[Loom Video Overview](https://www.loom.com/share/1adcd6a699db414dad7ccb604128a41c)

:::

### Monitoring and Maintenance Tools

Pagoda Observability Stack provides all the data and insights you need for your infrastructure and smart contract performances so you have full control of your application. Monitor every aspect and level of your tech stack, get notified for incidents before your users flagged them, and dive into the logs for the easiest debugging experiences. 


### Infrastructure Observability

- **[Pagoda API Stats](https://docs.pagoda.co/rpc/stats):** Understand your API usage, latency, and breakdown by different dimensions you care about for the best visibility into your infrastructure.  

- **Pagoda API Requests Logs Explorer:** Search and dig through your API requests Logs to track down what might went wrong, debugging never made so easy. 

- **Pagoda API Requests Alerts:** Get alerted when your API requests fail consecutively, spot potential incidents way ahead of your users.  


### On-chain Activity Observability

- **[Explorer](https://explorer.near.org/):** Quick search for accounts, blocks, transactions, receipts and all activity happening on NEAR blockchain. View all your assets and inspect smart contract issues using on-chain data in the easiest way possible. 

- **[Pagoda Alerts & Triggers](https://docs.pagoda.co/alerts/intro):** Designed to notify, and automated responses to important events that occur on the NEAR blockchain. Behind the scenes, Alerts are powered by many mini-indexers, “Alertexers”, that stream blockchain data in real-time, enabling developers to know what’s happening to their dApp before their users do.

- **Storage Cost and Gas Profiler:** Storage and Gas costs are always on the mind of the developers and these tools are here to help. Know exactly how much you spent on storage and gas overtime and breakdown by dimensions you care about. 


![](/img/tree/image1.png)


## Growth Stack

:::tip

[Loom Video Overview](https://www.loom.com/share/64aff21e2d054a0898b7f0ed01ecfd5b)

:::

### Business Intelligence and Growth Tools

Pagoda Growth Stack brings the most actionable insights through the carefully crafted business intelligence dashboards to aid your business decisions. Have dashboards built with inputs from VCs on the metrics that help your product grow faster. Pagoda Insights fully utilizes on-chain data to build account 360 profiles to allow you to customize customer experiences for effective marketing targeting.


- **Pagoda Analytics:** Get the most important insights about your project with data about transactions, TVL, transacted volume, accounts/users activity and retention data. Have template dashboards ready for VCs, public display or product decision making with input from respective experts in the field.  

- **Pagoda Insights:** Unlock the power of onchain data to build account 360 user profile so that you most accurately understand your users and where to reach more of them and create curated experiences to maximize your impact and growth. 

![](/img/tree/image3.png)

## Helpful Links

- [Intro to Indexers](https://docs.near.org/concepts/advanced/indexers)
- [Indexer Framework Documentation](https://docs.near.org/concepts/advanced/near-indexer-framework)
- [NEAR Lake Documentation](https://docs.near.org/concepts/advanced/near-lake-framework)
- [Pagoda RPC Documentation](https://docs.pagoda.co/rpc/intro)
- [Enhanced API Documentation](https://docs.pagoda.co/api#/)
- [Pagoda Console](https://console.pagoda.co/) - Get your API keys, Use Alerts, Analytics and more
- [Explorer](https://explorer.near.org/)
