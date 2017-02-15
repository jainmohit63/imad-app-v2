var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var arcticle={
 'article-one':{
    title:'article one|Mohit jain',
    heading:'Article One',
    date: '16,th',
    content: `
    <p>
                this is atice one.this is atice one.this is atice one.
this is aticle one.this is atice one.this is atice one.this is atice one.           
    </p> `
 },
 'article-two':{
      title:'article two|Mohit jain',
    heading:'Article Two',
    date: '10th feb',
    content: `
    <p>
                this is atice Two.this is atice one.this is atice one.
this is aticle one.this is atice one.this is atice one.this is atice one.           
    </p> `
 },
 'article-three':{
     title:'article three|Mohit jain',
    heading:'Article Two',
    date: '10th feb',
    content: `
    <p>
                this is atice Two.this is atice one.this is atice one.
this is aticle one.this is atice one.this is atice one.this is atice one.           
    </p> `
}
};

function createTemplete(data){
 var title=data.title;
 var heading=data.heading;
 var date=data.date;
 var content=data.content;

htmlTemplete=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewpoint" content="width=device-width,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
    <div class="contain">
        <div>
             <a href="/">HOME</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            <p>
               ${content}          
            </p>
        </div>
    </div>
</body>
</html>
`;
return htmlTemplete;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName',function(req,res){
    var articlename=req.paramsarticeleName;
  res.send(createTemplete(ArticleOne));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
