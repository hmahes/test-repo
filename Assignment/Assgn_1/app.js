var fs = require('fs'),
    parseString = require('xml2js').parseString,
    xml2js = require('xml2js');

fs.readFile('old.xml', 'utf-8', function (err, data) {
    if (err) console.log(err);
    // we log out the readFile results    
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function (err, result) {
        if (err) console.log(err);
        // here we log the results of our xml string conversion

        var json = result;
        json.company.branch[0].name = "Wipro Ltd";

        // create a new builder object and then convert our json back to xml.
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);

        fs.writeFile('new.xml', xml, function (err, data) {
            if (err) console.log(err);

            console.log("\r\nSuccessfully written our updated xml to file\r\n");
            // we log out the writeFile results  
            console.log(xml);
        })

    });
});   