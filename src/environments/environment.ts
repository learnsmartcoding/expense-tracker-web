// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";


const serverUrl='https://localhost:44351/api';


// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adConfig: {
    clientId: '598e0157-9cdc-4845-9315-6ff6e3949a23',
    readScopeUrl: 'api://d7abe0f3-73ce-4296-a39a-215d24badeaf/Expense.Read',
    writeScopeUrl: 'api://d7abe0f3-73ce-4296-a39a-215d24badeaf/Expense.Write',
    scopeUrls: [
      'api://d7abe0f3-73ce-4296-a39a-215d24badeaf/Expense.Read',
      'api://d7abe0f3-73ce-4296-a39a-215d24badeaf/Expense.Write'
    ],
    apiEndpointUrl: 'https://localhost:44351/api',
    tenantId: "ebd39e7e-31bc-4973-bc73-fef8e127d164"
  },
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
