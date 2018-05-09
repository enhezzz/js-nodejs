var express = require('express');
let https = require('https');

var app = express(); // the main app
var admin = express(); // the sub app

// admin.use('/admin', function (req, res) {//match any route with '/admin' prefix,real url:'/app/admin/asdsa/sadasd'
//   console.log(admin.mountpath);         // /app
//   console.log('baseurl:'+req.baseUrl);  // baseurl:/app/admin
//   console.log('path:'+req.path);        // path:/asdsa/sadasd
//   console.log('originUrl:'+req.originalUrl)// originUrl:/app/admin/asdsa/sadasd
//   res.send('Admin Homepage');
// })  
// app.use('/app', admin); // mount the sub app ||Mounts the middleware function(s) at the path.
//这里只是针对特定的'/'路由,admin作为挂载到app上的子路由,通过/app/admin访问子路由


// admin.get('/a', function (req, res) {
//     console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
//     res.send('Admin Homepage');
//   })
  
//   var secret = express();
//   secret.get('/', function (req, res) {
//     console.log(secret.mountpath); // /secr*t
//     res.send('Admin Secret');
//   });
  
//   admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
//   app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app

// app.all('/api/*', (req,res,next) => {console.log('1st callback');next()},//next() match next route callback,pass control to the next handler
//                  (req,res) => {console.log('sec callback')});//match all route prefixed with 'api'
// app.all('/api/*', (req,res,next) => {console.log('1st callback');next('route')},//next('route') match next route
//                  (req,res) => {console.log('sec callback');res.end('next route')});//match all route prefixed with 'api'                 

// app.get('/', function (req, res) {  //match route get request to '/' with specific callback function
//     res.send('GET request to homepage');
//   });

// app.param(['id', 'page'], function (req, res, next, value) { //match param value
//     console.log('CALLED ONLY ONCE with', value);
//     next();
//   })
//   app.get('/user/:id/:page', function (req, res, next) {
//     console.log('although this matches');
//     next();
//   });
//   app.get('/user/:id/:page', function (req, res) {
//     console.log('and this matches too');
//     res.end();
//   });

// var
// blog = express()
// , blogAdmin = express();
// app.use('/blog', blog);
// blog.use('/admin', (req,res) => {
//     console.log(req.baseUrl)
// });

// app.get('/user/:id', function(req, res){
//     res.send('user ' + req.params.id);
//   });

// app.get('/shoes',(req,res) => {         // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
//     console.log(req.query.order)        //desc
//     console.log(req.query.shoe.color)   //blue
//     console.log(req.query.shoe.type)    //converse
// })

// app.use(express.static(__dirname + '/'));
// var router = express.Router();
// // invoked for any requests passed to this router
// router.use(function(req, res, next) {   //like all method,
//                                         // use can route any http method to specificed path whether get,post,put or delete request
//     // .. some logic here .. like any other middleware
//     console.log('use..');
//     req.self = 'enhezzz';
//     next();
//   });
  
//   // will handle any request that ends in /events
//   // depends on where the router is "use()'d"
//   router.get('/', function(req, res, next) {
//     console.log('get..')
//     console.log(req.self)              //its value is derived from above route callback
//   });
//   app.use('/calendar', router);

app.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE');
    console.log('param:' + id);          //param:asd
    next();
  })
  
  app.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
  });
  
  app.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
  });

app.listen(80,'localhost',() => {
    console.log('80 port listening...')
});
// https.createServer(app).listen('8080',);