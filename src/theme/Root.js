// https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root

import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser'; // https://docusaurus.io/docs/advanced/ssg#useisbrowser
import Gleap from "gleap"; // See https://gleap.io/docs/javascript/ and https://app.gleap.io/projects/62697858a4f6850036ae2e6a/widget

const GLEAP_API_KEY = '2cENujyLCLAV1I20Co6chNbgvZXN7ND7';

// Default implementation, that you can customize
export default function Root({ children }) {
    const isBrowser = useIsBrowser();
    if (isBrowser) {
        Gleap.initialize(GLEAP_API_KEY);
    }
    return <>{children}</>;
}
