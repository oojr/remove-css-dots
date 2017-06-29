# remove-css-dots

utiliy for replacing and removing dots from compiled css style objects

### Installation

```sh
$ npm install remove-css-dots
```

### Usage

```javascript
const removeCssDots = require('remove-css-dots');

// you have some compiled css with dots
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

const styles = removeCssDots(cssWithDots);
console.log(styles)
```
will output
```javascript
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
};
```
