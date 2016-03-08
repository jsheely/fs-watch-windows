var chokidar = require('chokidar');
var watchFiles = __dirname + '/test/*.jsx';

var watcher = chokidar.watch(watchFiles, {
    persistent: true
});

watcher.on('ready', () => {
    console.log('Watching: ' + watchFiles);
});

watcher.on('all', (event, path) => {
  console.log(event, path);
});