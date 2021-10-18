import {createProdMockServer} from 'vite-plugin-mock/es/createProdMockServer';

import users from './modules/system/users'
import roles from './modules/system/roles'
import configs from './modules/system/configs'
import permissions from './modules/system/permissions'
import personal from './modules/personal'
import login from './modules/login'

const mockModules = [
  ...users,
  ...roles,
  ...configs,
  ...permissions,
  ...personal,
  ...login
];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}