import { glue } from './util/glue'


export function greeter(person: string) {
  return glue(glue('Hello, ', person), '!')
}
