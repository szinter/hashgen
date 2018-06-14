const segments = {
    NUMBERS: Array(10).fill().map((e, i) => Number(i)), //[0..9]
    LOWERCASES: String.fromCharCode.apply({}, Array(123).fill().map((e, i) => Number(i)).splice(97)).split(''),
    UPPERCASES: segments.LOWERCASES.map(_ => _.toUpperCase()),
    SPECIALS: '@&#_-'.split()
}

module.exports = segments;