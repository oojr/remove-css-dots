const removeCssDots = require('../lib');

test('remove dots from css style objects', () => {
  const cssWithDots = {
    '.container': {
      width: '100%',
      height: '100%',
      fontSize: 25
    },
    '.text': {
      margin: 12,
      background: '#141414'
    },
    '.dialog': {
      padding: 20,
      backgroundColor: 'whitesmoke'
    }
  };

  const cssWithoutDots = {
    container: {
      width: '100%',
      height: '100%',
      fontSize: 25
    },
    text: {
      margin: 12,
      background: '#141414'
    },
    dialog: {
      padding: 20,
      backgroundColor: 'whitesmoke'
    }
  };
  expect(removeCssDots(cssWithDots)).toEqual(cssWithoutDots);
});
