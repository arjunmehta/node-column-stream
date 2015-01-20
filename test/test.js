var columns = require('../main').create({
    mode: "debug"
});
var ColumnLine = require('../lib/ColumnLine');


exports['Exported Properly'] = function(test) {
    test.expect(2);

    test.equal(typeof columns, 'object');
    test.equal(typeof columns.addColumn, 'function');

    test.done();
};

exports['Column Line'] = function(test) {
    test.expect(2);

    var legacy_line = new ColumnLine("\033[32;33;35;31;37;32;33;38;5;24;35;31;37;31mHi there! How are you Today?")
    var line = new ColumnLine("Hi there! \033[32mHow are you Today?", {
        legacy: legacy_line
    });

    // console.log(JSON.stringify(legacy_line.trimmed(40)));
    // console.log(JSON.stringify(line.trimmed(40)));
    // console.log(legacy_line.trimmed(40));
    // console.log(line.trimmed(40));
    // console.log(line);

    test.equal(typeof line, 'object');
    test.equal(line.trimmed(40), "\u001b[31mHi there! \u001b[32mHow are you Today?            \u001b[0m");
    // test.equal(true, true);


    test.done();
};

exports['tearDown'] = function(done) {
    done();
};
