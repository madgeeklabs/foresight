//var fs = require("fs");
var fs = require('fs'); 
var request = require('request');


var apiURL = {
    merchant:'https://api.bbva.com/apidatos/info/merchants_categories.json',
    top_client_origin:'https://api.bbva.com/apidatos/zones/customer_zipcodes.json'
    
};

var key;

var getCategories = function(){
    var options ={ url:apiURL.merchant,
      headers:{
            Authorization:key.auth
        } 
    };
    request.get(options, function(error, response, body){
           console.log(body);
    });

};

fs.readFile('./keys.secret', function(error,data){
        key = JSON.parse(data);
        console.log('key');
        console.log(key);
        console.log(key.auth);
        
});


