# sequence-paths

Create an array of sequential filenames between a provided range and with a consistent length of numerals.

[![NPM](https://nodei.co/npm/sequence-paths.png)](https://npmjs.org/package/change-keys)

##Usage

### sequencePaths( basePath, lastFrame, [extension, numLength, firstFrame] )


* _String_ **basePath** the beginning of the file location
* _Number_ **lastFrame** the number on the filename of the last frame, inclusive.
* _String_ **[extension]** the file-extension, defaults to '.png'
* _Number_ **[numLength]** the number of leading-zeros for numbers, defaults to 4
* _Number_ **[firstFrame]** the first frame of the sequence, inclusive, defaults to 0


Basic usage:
```js
var sequencePaths = require('sequence-paths');

sequencePaths('/images/intro-', 16, 'jpg');
//=> ['/images/intro-00000.jpg', …, '/images/intro-00016.jpg']
```

Customize the length of each number in the files string, here all numbers will be 2 characters long:
```js
sequencePaths('images/intro-', 16, 'jpg', 2)
//=> ['/images/intro-00.jpg', …, '/images/intro-16.jpg']
```

Start the sequence on a frame number other than 0:
```js
sequencePaths('images/intro-', 32, 'jpg', 3, 17)
//=> ['/images/intro-017.jpg', …, '/images/intro-032.jpg']
```


##License

MIT, see [LICENSE.md](http://github.com/hapticdata/sequence-paths/blob/master/LICENSE.md) for details.
