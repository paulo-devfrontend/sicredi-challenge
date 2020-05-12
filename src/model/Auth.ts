const HASH = 'ZXJhZ29uK3NhcHBoaXJl';
const ERAGON = {
  name: 'Eragon Bromsson',
  dragon: 'Saphira Bjartskular',
  auth: HASH,
};
const TOKEN = btoa(JSON.stringify(ERAGON));
const STORAGE = '_auth';

class AuthModel {
  private auth() {
    localStorage.setItem(STORAGE, TOKEN);
  }

  private valid(token: string) {
    return token === TOKEN;
  }

  private check() {
    const token = localStorage.getItem(STORAGE);
    if (!token) return false;
    if (!this.valid(token)) return false;
    return true;
  }

  public login(username: string, password: string) {
    const encoded = btoa(`${username}+${password}`);
    if (encoded === HASH) {
      this.auth();
      return true;
    }
    throw new Error('Wrong username or password');
  }

  public isSigned() {
    return this.check();
  }

  public userData() {
    if (this.check()) {
      return ERAGON;
    }
    return null;
  }

  public logout(callback?: Function) {
    localStorage.removeItem(STORAGE);
    callback && callback();
  }
}

export default new AuthModel();
