var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root'
});

connection.connect();

connection.query('SELECT id, username, email FROM db_go.tbl_user', function(err, rows, fields){
	if(err) throw err;
	rows.forEach(function(row){
		console.log(row.id +" | "+ row.username  +" | "+  row.email);
	});
	
});

connection.end;