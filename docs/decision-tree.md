---
sidebar_position: 1
---

# Data Decision Tree

## NEAR Data Decision Tree as of 2022

:::tip

[Loom Video Overview](https://www.loom.com/share/b6894b06a617453b81ae8872ab914b76)

:::

[![](/img/tree/image4.png)](/img/tree/image4.png)


**Color code:**
- **<span style={{color: 'orange'}}>Orange</span>:** Open source tools
- **<span style={{color: 'green'}}>Green</span>:** Building Tools
- **<span style={{color: 'purple'}}>Purple</span>:** Observability Tools
- **<span style={{color: '#cccc00'}}>Yellow</span>:** Analytics Tools


:::info Recommended approach as of now

**Pagoda RPC + Enhanced API + NEAR Lake**.
You can find tutorials on how to get started with these tools in [NEAR](http://docs.near.org) and [Pagoda Docs](http://docs.pagoda.co). 

:::

Pagoda is actively working on the Pagoda API solution to provide the easiest data reading experience on NEAR, refer here for the roadmap and decision tree for Pagoda’s solution planned and in development.

## Data tools

* [NEAR Indexer Framework](https://docs.near.org/concepts/advanced/near-indexer-framework): a micro-framework providing you with a "live" stream of blocks. Useful to handle on-chain real-time "events".
* [NEAR Indexer for Explorer](https://docs.near.org/tools/indexer-for-explorer): leverages the indexer micro-framework to watch and store all of the blockchain's events/data into a transactional PostgreSQL database. You can clone the [GitHub repository](https://github.com/near/near-indexer-for-explorer) and customize your own indexer solution.
* [NEAR Lake Framework](https://docs.near.org/concepts/advanced/near-lake-framework): a companion library to NEAR Lake. It allows you to build your own indexer that watches a stream of blocks from a NEAR Lake data source and allows you to create your own logic to process that data. Keep in mind this is probably the one you want to use for future projects, instead of the Indexer Framework. [Learn why is better](https://docs.near.org/concepts/advanced/near-indexer-framework#why-is-it-better-than-near-indexer-framework).
* [NEAR Lake Indexer](https://docs.near.org/concepts/advanced/near-lake-framework): leverages the indexer micro-framework to watch and store all of the blockchain's events/data as JSON files on a user-specified AWS S3 or S3-compatible storage.
* [The Graph](https://thegraph.com/docs/en/cookbook/near/): The Graph gives developers tools to process blockchain events and make the resulting data easily available via a GraphQL API, known individually as a subgraph. [Graph Node](https://github.com/graphprotocol/graph-node) is now able to process NEAR events, which means that NEAR developers can now build subgraphs to index their smart contracts.
* [Pagoda API](https://pagoda.co) is a hosted service managed by Pagoda that solves the complex data problem by indexing the blockchain into datamarts and is accessible via standard RESTful APIs for you to directly use in any part of your application. The API enables performant and efficient querying of blockchain data without having to build and manage your own indexer infrastructure. Pagoda also offers the Indexer framework as a decentralized solution to indexing on-chain data, and a centralized Data Lake source that can be used to build your own indexers and servers for such data query needs.

