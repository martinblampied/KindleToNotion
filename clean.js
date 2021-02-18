const cheerio = require('cheerio')
const fs = require('fs');

fs.readFile( __dirname + '/notebook.html', function (err, data) {
  if (err) {
    throw err; 
  }

	const $ = cheerio.load(data.toString())
	result = ""
	$('.noteText').each(function(i, elm) {
   	 	result = result + "\n\n" + ($(this).text().trim()) 
	});

	fs.writeFile('out.txt', result, function (err) {
	  if (err) return console.log(err);
	});
	

});

