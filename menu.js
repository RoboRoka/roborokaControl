var Menu = require('terminal-menu');
var menu = Menu({ width: 29, x: 4, y: 2 });

menu.reset();
menu.write('SERIOUS ROBOROKA TERMINAL\n');
menu.write('-------------------------\n');

process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
	process.stdin.setRawMode(false);
	process.stdin.end();
});

module.exports = menu;
