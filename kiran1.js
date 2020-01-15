sum = 0;
counter = 1083;
countdown = 88;

for(;counter > 88 ;){
sum += counter;
counter = counter - countdown ;
}
console.log(sum);

var express= require ('express');
var app=express();

app.get('/',function(req,res){
res.send('hello world!');
});

app.listen(3000, function(){
console.log('Example app listening on port 3000!');
});