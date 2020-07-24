// from data.js
console.log(data);

var tableInfo = data;
console.log(tableInfo)

// YOUR CODE HERE!
// select the button

var button = d3.select("#filter-btn");
var list = d3.select("#ufo-table");
var tbody = d3.select("tbody");
var form = d3.select("#form")

//Events Functions
function runEnter() {

    d3.event.preventDefault();

    var inValue = d3.select("#datetime").property("value");
    console.log(inValue);

    var filteredData = tableInfo.filter(date => date.datetime === inValue);
    console.log(filteredData);



    //create table with result
    filteredData.forEach((dRow) => {
        var row = tbody.append("tr");
        // Object.values(dataRow).forEach((key, value))
        Object.entries(dRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value)
        });

    });

};
// runEnter(filteredData)

button.on('click', runEnter);