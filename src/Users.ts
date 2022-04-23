import { Http } from './common/Http'

export class Users {
  private _httpClient: Http
  constructor() {
    this._httpClient = new Http()
  }

  public async all(): Promise<Array<string>> {
    try {
      const users = await this._httpClient.all('users')
      return users

    } catch (error) {
      console.error('bleeep...', error);
      // @ts-ignore
      return error?.message

    }
  }
}