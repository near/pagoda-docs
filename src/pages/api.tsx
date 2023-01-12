import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "../components/Fallback";

const LazyStoplight = React.lazy(() => import("../components/Stoplight"));

export default function Api() {
  return (
    <Layout
      title="Enhanced API example"
      description="Try out our newly released Enhanced APIs - Balances (in Beta) and get what you need for all kinds of balances and token information at ease."
    >
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl="/openapi/pagoda.yaml" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
