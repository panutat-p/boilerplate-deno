import * as emoji from 'npm:node-emoji'

console.log('emojify:', emoji.emojify(`:sauropod: :heart:  deno`))

for (let i = 0; i < 10; i++) {
  console.log('random:', emoji.random().emoji)
}
