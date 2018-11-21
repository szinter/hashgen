const { Passgen } = require('./passgen');

const passgen = new Passgen();
const ITERATIONS = 30;

const pass = passgen.withNumbers(14)
                    .withUppercase(7)
                    .withLowercase(5)
                    .withSpecial(8)
                    .withLength();

for (let i = 0; i < ITERATIONS; i++) {
    console.log(pass.generate());
}