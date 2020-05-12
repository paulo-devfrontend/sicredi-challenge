import { AppTheme } from 'react-app-env';

interface SettingsApp {
  theme: AppTheme;
}

const INITIAL_VALUE: SettingsApp = {
  theme: 'light',
};

class SettingsModel {
  constructor() {
    if (!localStorage.getItem('_settings')) {
      this.data = INITIAL_VALUE;
    }
  }

  private set data(value: SettingsApp) {
    localStorage.setItem('_settings', JSON.stringify(value));
  }

  private get data() {
    const _settings = localStorage.getItem('_settings');
    return _settings && JSON.parse(_settings);
  }

  public set theme(value: AppTheme) {
    const _settings = this.data;
    _settings.theme = value;
    this.data = _settings;
  }

  public get theme() {
    return this.data.theme;
  }
}

export default new SettingsModel();
