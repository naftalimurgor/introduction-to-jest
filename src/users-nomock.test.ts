import { Users } from "./Users"

describe('User Class test', () => {
    let instance: Users
  
    beforeEach(() => {
      instance = new Users()
    })
  
    it('should get all users as an array', async () => {
      expect(instance).toBeInstanceOf(Users)
      const allUsers = await instance.all()
   
      expect(allUsers).toBeDefined()
      expect(allUsers).toBeArray()
    })

})