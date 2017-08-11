var scrollMonitor = require("./scrollMonitor"); // if you're not using require, you can use the scrollMonitor global.
var myElement = document.getElementById("itemToWatch");

var elementWatcher = scrollMonitor.create( myElement );

elementWatcher.enterViewport(function() {
    console.log( 'I have entered the viewport' );
});
elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
});
