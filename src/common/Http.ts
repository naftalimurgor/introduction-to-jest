import axios, { AxiosInstance } from 'axios'


export class Http {
  private _http: AxiosInstance
  constructor() {
    this._http = axios.create({
      baseURL: 'https://reqres.in/api',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  public async all(url: string) {
    const user = await this._http.get(url)
    const { data } = user
    return data.data
  }
}