import Listr from 'listr';
import { getConfig } from './utils';
import { basicTask, browserTask } from './tasks';

const { lib, es, browser, pkgName, entry } = getConfig();

const buildLib = lib ? basicTask('lib') : [];
const buildEs = es ? basicTask('es') : [];
const buildBrowser = browser ? browserTask({ pkgName, entry }) : [];

const buildAllTasks = [...buildLib, ...buildEs, ...buildBrowser];

const tasks = new Listr(buildAllTasks);

tasks
  .run()
  .then(() => console.log('%c✅ Success!', 'color:green'))
  .catch((err) => {
    console.error(err);
  });
