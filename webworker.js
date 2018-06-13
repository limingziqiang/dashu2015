var myWorker = function(){
    var functionBodyRegx, URL, contentType, code, url;

    functionBodyRegx = /^[^{]+\{([\s\S]*)\}$/;
    URL = window.URL || window.webkitURL;
    contentType = { type: "text/javascript; charset=utf-8" };

    return function( fn ){
        code = fn.toString().match( functionBodyRegx )[ 1 ];
        url = window.opera ? 
            "data:application/javascript," + encodeURIComponent( code ) :
            URL.createObjectURL( new Blob( [ code ], contentType ) );
        return new Worker( url );
    }
}();

var worker = new myWorker( function(){
    onmessage = function( event ){
        postMessage( event.data );    
    }
} );

worker.onmessage = function( event ){
    alert( event.data.message );
};

worker.postMessage( { message: "hello myWorker!" } );
worker.postMessage( { message: "hello myWorker!2" } );
