const express = require ('express');
const app = express ();
const path = require ('path');



 app.use('/', express.static(path.join(__dirname, "public")))
// use this app.use when portfolio is updated and ready to push to aws server//

  // app.use("/static", express.static('./public/'));
  //use this app.use when updating portfolio to view css//


app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "index.html"));

});

app.listen(process.env.PORT || 4000, function(){
    console.log ('your node js server is running on port 4000');

}); 