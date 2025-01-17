import { readdir } from 'fs-extra';
import { logger, rootLocation } from '../server/core';
import Routes from 'next-routes';

export const bootstrapModules = async ({ routes }: { routes: Routes }) => {
  logger.info('[Client] Loading client modules...');
  const rootDir = `${rootLocation}/client/modules`;
  const moduleNames = await readdir(rootDir);
  const excludedModules: string[] = ['.DS_Store'];
  for (const moduleName of moduleNames) {
    if (excludedModules.indexOf(moduleName) !== -1) {
      continue;
    }
    logger.info(`[Client] Loading module '${moduleName}'...`);

    // add aggregates graphql
    logger.info(`[Client] [${moduleName}] Setup routes...`);
    let setupRoutes: any;
    try {
      setupRoutes = require(`./modules/${moduleName}/routes`).setupRoutes;
    } catch (error) {
      // ignore service not found
    }
    if (setupRoutes) {
      setupRoutes({ routes });
    }
  }
  logger.info('[Client] Done loading modules...');
};
