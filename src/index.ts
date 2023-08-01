import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_onedarkpro extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_onedarkpro:plugin',
  description: 'One Dark Pro for JupyterLab',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_onedarkpro is activated!');
    const style = 'jupyterlab_onedarkpro/index.css';

    manager.register({
      name: 'jupyterlab_onedarkpro',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
