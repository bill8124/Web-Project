var express = require('express');

var app = express();

app.set('port', process.env.PORT || 4500);
app.use(express.static('.'));
app.listen(app.get('port'), function(){
    console.log('Express server started at port ' + app.get('port'));
});
