import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
   namespace: 'coupons',
   plugins: [sass()],
   outputTargets: [
      {
         type: 'dist',
         esmLoaderPath: '../loader',
      },
      {
         type: 'docs-readme',
      },
      {
         type: 'www',
         serviceWorker: null, // disable service workers
         baseUrl: 'https://gb.v3.idldev.net',
      },
      {
         type: 'dist-hydrate-script',
      },
   ],
};
