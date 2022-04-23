interface User {
  id: number,
  first_name: string,
  last_name: string
}

export class Http {
  public async all(): Promise<Array<User>> {
    return [
      {
        "id": 3,
        "first_name": "Holt",
        "last_name": "Holt",
      },
      {
        "id": 3,
        "first_name": "Holt",
        "last_name": "Holt",
      },
      {
        "id": 3,
        "first_name": "Holt",
        "last_name": "Holt",
      },
      {
        "id": 3,
        "first_name": "Holt",
        "last_name": "Holt",
      }

    ]
  }
}