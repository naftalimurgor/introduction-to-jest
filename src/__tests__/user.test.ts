import axios from 'axios'
import { Users } from '../Users'
import { Http } from '../common/Http'
jest.mock('axios')
jest.mock('./common/Http')

describe('User Class test', () => {
  let instance: Users

  beforeEach(() => {
    instance = new Users()
  })

  it('should get all users as an array', () => {
    expect(instance).toBeInstanceOf(Users)
    const allUsers = instance.all()
    expect(allUsers).toBeDefined()
  })

  it('should get receive an error', async () => {

    instance.all = jest.fn().mockImplementationOnce(() => {
      return new Error('something weird happened')
    })

    const error = await instance.all()
    expect(error).toBeInstanceOf(Error)
  })

})