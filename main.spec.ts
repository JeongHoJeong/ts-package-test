import { greeter } from './main'


describe('greeter', () => {
  it('should greet', () => {
    expect(greeter('Jane')).toBe('Hello, Jane!')
  })
})
