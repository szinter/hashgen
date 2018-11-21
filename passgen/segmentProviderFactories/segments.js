const segments = {};

segments.NUMBERS = Array(10).fill().map((e, i) => Number(i)); //[0..9]
segments.LOWERCASES = String.fromCharCode.apply({}, Array(123).fill().map((e, i) => Number(i)).splice(97)).split('');
segments.UPPERCASES = segments.LOWERCASES.map(_ => _.toUpperCase());
segments.SPECIALS = '@&#_-'.split('');

module.exports = segments;