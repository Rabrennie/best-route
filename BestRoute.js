(function(window){

    function BR() {

        this.version = "0.0.1";
        this.checks = {};
    }

    //Functions go here
    var on = function(location, cb, checkNow) {
      function checkHash(){
        var currentHash = '';
        var onHash = location.split('/').filter(function(n){ return n !== ''; });
        var params = {};
        if(window.location.hash) {
          currentHash = window.location.hash.substring(1).split('/').filter(function(n){ return n !== ''; });
        }

        if(currentHash.length !== onHash.length) {
          return;
        }

        for(var i = 0; i < currentHash.length; i++) {
          if(onHash[i].substring(0,1) === ':'){
            params[onHash[i].substring(1)] = currentHash[i];
          } else {
            if(currentHash[i] !== onHash[i]){
              return;
            }
          }
        }

        cb(params);
      }

      if(checkNow) {
        checkHash();
      }

      this.checks[location] = checkHash;
    };


    window.addEventListener("hashchange", function() {
      for(var key in BestRoute.checks) {
        BestRoute.checks[key]();
      }
    });

    //prototypes go here
    BR.prototype.on = on;


    if(typeof(window.BestRoute) === 'undefined'){
        window.BestRoute = new BR();
    }
})(window);
