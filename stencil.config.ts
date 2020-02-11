import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
   namespace: 'local-map',
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
   ],
};
