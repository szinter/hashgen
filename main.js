const { Passgen } = require('./passgen');
const Sentry = require('@sentry/node');

Sentry.init({
    dsn: 'https://d373da4f59714d0db5b1f832d32dc323@sentry.io/1403188'
});

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

throw 'Oh no we have an NEW error'