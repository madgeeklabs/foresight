var fs = require('fs');
var Shp = require('shp');
var shpJson = Shp.readFileSync('./CODIGO_POSTAL');
console.log(shpJson);
fs.writeFile("./zipCode.json", JSON.stringify(shpJson, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to ");
    }
}); 
