import KSUID from 'npm:ksuid'

for (let i = 0; i < 10; i++) {
  console.log(KSUID.randomSync().string)
}
