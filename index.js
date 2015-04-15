var pad = require('pad');

/**
 * get an array of sequential filenames
 * @param {String} basePath the beginning of the file location
 * @param {Number} lastFrame the number on the filename of the last frame in the animation
 * @param {String} [extension] the file-extension defaults to '.png'
 * @param {Number} [numLength] the number of leading-zeros for numbers, defaults to 4
 * @param {Number} [firstFrame] the first frame of the sequence, if different than 0
 * @return {Array<String>} of filenames
 */
module.exports = function sequencePaths( basePath, lastFrame, extension, numLength, firstFrame ){

    var result = [];

    extension = extension || '.png';
    firstFrame = firstFrame || 0;
    numLength = numLength || 4;

    //forget the period? i got your back
    if( extension.indexOf('.') < 0 ){
        extension = '.' + extension;
    }


    for( var frame=firstFrame; frame<=lastFrame; frame++ ){
        result.push(basePath + pad(numLength, frame, '0') + extension);
    }

    return result;
};


