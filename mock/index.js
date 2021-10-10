import {createProdMockServer} from 'vite-plugin-mock/es/createProdMockServer';

import users from './modules/system/users.js'
import roles from './modules/system/roles.js'
import configs from './modules/system/configs.js'
import personal from './modules/personal.js'
import login from './modules/login.js'

const mockModules = [
  ...users,
  ...roles,
  ...configs,
  ...personal,
  ...login
];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}