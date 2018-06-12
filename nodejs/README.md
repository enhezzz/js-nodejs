# INTRO TO NODE.JS

1. ##### The GOAL of NODE.JS IS TO provide an easy way to build scaleable network programs
2. ##### NODE.JS IS NOT ANOTHER WEB FRAMEWORK	
	###### NODE.JS IS:
    A Web Server	
    TCP Server	
    Awesome Robot Server	
    Drone Controller	
    Command Line Application	
    Proxy Server	
    Steaming Server	
    VoiceMail Server	
    Music Machine	
    (any thing that has to deal with I/0)
 3. ##### WHY NODE.JS?
 	 * Non-Blocking I/O
    * Based On Chrome's V8 Engine
    * 49,000+ Modules
    * Very Active Community
    * Supported on Mac, Linux, and Windows
    * One Language to Rule them All
    * JavaScript is the Language of the Web
  > Basic HTTP SERVER
  ```
  var http = require('http');
 
var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello World');
});
 
server.listen(4000);

  ```
  Running this script on my development box I can achieve 10,000+ requests per second with 100 concurrent connections without 
breaking a sweat.

4. ##### What is Non-Blocking IO?AND WHY SHOULD I CARE?
> BLOCKING I/0
```
// Get Users - 20ms
$query = 'SELECT * FROM users WHERE id = ?';
$users = query($query, array($_GET['id']));
print_r($users);

// Get Activities - 130ms
$query = 'SELECT * FROM activities WHERE user_id = ? ORDER BY TIMESTAMP LIMIT 50';
$activities = query($query, array($_GET['id']));
print_r($activities);

// Get Leader Board - 120ms
$query = 'SELECT count(points),user_id FROM activities GROUP BY user_id LIMIT 50';
$leader_board = query($query);
print_r($leader_board);
```
270ms = SUM($user, $activities, $leader_board)

> NON-BLOCKING I/0
```
// Get Users - 20ms
var query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [req.query.id], function (err, users) {
    console.log(users);
});

// Get Activities - 130ms
query = 'SELECT * FROM activities WHERE user_id = ? ORDER BY TIMESTAMP LIMIT 50';
db.query(query, [req.query.id], function (err, activities) {
    console.log(activities);
});

// Get Leader Board - 120ms
query = 'SELECT count(points),user_id FROM activities GROUP BY user_id LIMIT 50';
db.query(query, function (err, leader_board) {
    console.log(leader_board);
});
```
130ms = MAX(user, activities, leader_board)

5. ##### THE MOST JARRING THING ABOUT SERVER SIDE JAVASCRIPT IS THINKING IN CALLBACKS

> The NODE.JS CALLBACK PATTERN

```
awesomeFunction(args, function (err, data) {
    if (err) {
        // Handle Error
    }
    
    // Do something awesome with the data
});
```

* Error First then success... ALWAYS!
* Because this is the defacto standard, 99.99999% of the time you will be able to guess how a Node.js module works

6. ##### The Node Package manager
	###### Keep this in mind... modules are loaded once and cached. So when you load the module a second time in your app, require just returns the cached module object. This lets you do interesting things...