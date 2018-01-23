import { glue } from './glue'


describe('glue', () => {
  it('should concatenate two strings correctly', () => {
    expect(glue('Hello, ', 'world!')).toBe('Hello, world!')
  })
})
