var keypress = require('keypress');
var columns = require('../main').create();


var a = columns.addColumn("Column A");

columns.addColumn("Column B");
columns.addColumn("Column C");

setInterval(function(){
    columns.column("Column A").write((new Date().getSeconds() % 2 === 0) ? "TICK\n" : "TOCK\n");
    columns.column("Column B").write("The Time: " + new Date() + "\n");
}, 1000);

process.stdin.setRawMode(true);
process.stdin.pipe(columns.column("Column C"));


// exit the program safely to clean up terminal output properly

if (process.stdin.isTTY) {

    keypress(process.stdin);
    process.stdin.on('keypress', function(ch, key) {
        if (key && ((key.ctrl && key.name == 'c') || key.name == 'q')) {
            process.exit(0);
        }
        if (key && key.name === "backspace"){
          columns.column("Column C").write('\b');
        }
    });
}
