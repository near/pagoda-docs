import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './index.module.scss';

function Card({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg', styles.heroCard)}>
      <Link to={to} className='card padding--lg'>
        <div className={styles.svgWrapper}>
          <Svg className={styles.cardSvg} role="img" />
        </div>
        <h2 className='text--truncate'>{title}</h2>
        <p className='text--truncate'>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageContent() {
  return (
    <div className="container">
      <section className="row">
        <Card
          Svg={require('@site/static/img/ic_dashboard.svg').default}
          title="Pagoda PRC"
          description="Developers can interact with on-chain data and send different types of transactions to the network by utilizing the RPC endpoints."
          to="/rpc/intro"
        />
        <Card
          Svg={require('@site/static/img/ic_branch.svg').default}
          title="Alerts & Triggers"
          description="Alerts are powered by many mini-indexers, “Alertexers”, that stream blockchain data in real-time, enabling developers to know what’s happening to their dApp before their users do."
          to="/alerts/intro"
        />
        <Card
          Svg={require('@site/static/img/ic_cloud.svg').default}
          title="Enhanced API"
          description="NEAR Enhanced API powered by Pagoda"
          to="/api#/"
        />
      </section>
    </div>
  );
}
