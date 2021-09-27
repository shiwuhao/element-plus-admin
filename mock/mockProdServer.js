import {createProdMockServer} from 'vite-plugin-mock/es/createProdMockServer';

// const modules = import.meta.globEager('./**/*.js');

import users from './system/users.js'
import roles from './system/roles.js'
import configs from './system/configs.js'
import personal from './personal.js'

const mockModules = [...users,...roles,...configs,...personal];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}