var test          = require('tape'),
    sequencePaths = require('./index');


test('returns an array of sequence paths from 0 to 100', function(t){


    var pre = '/images/test_';
    var paths = sequencePaths( pre, 100, '.png', 4 );

    t.plan(1 + paths.length * 2);
    t.equal(paths.length, 101);

    paths.forEach(function(p){
        t.equal(p.length, pre.length + 4 + '.png'.length);
        t.equal(p.indexOf('.png'), pre.length + 4);
    });
});


test('returns an array of sequence paths, starting from provided startFrame', function(t){

    t.plan(3);

    var pre = 'test_';
    var first = 24,
        last = 100,
        length = (last+1) - first;

    var paths = sequencePaths(pre, last, '.jpg', 4, first);

    t.equal(paths.length, length);
    t.equal(paths[0], pre+'0024.jpg');
    t.equal(paths[paths.length-1], pre+'0100.jpg');
});

