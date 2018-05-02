const Passgen = require('./passgen');

const passgen = new Passgen();

const pass = passgen.withNumbers()
                    .withUppercase()
                    .withLowercase()
                    .withSpecial(['@', '&', '#', '_', '-'])
                    .withLength(17)
                    .generate();

console.log(pass);