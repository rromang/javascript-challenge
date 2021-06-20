// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// grab references to the input element and the output div
// var text = d3.select("#datetime").value;
// console.log(text)
var inputText = d3.select("#datetime");
console.log(inputText);

function handleClick() {
    console.log("form clicked!")

    console.log(d3.event.target);

}

inputText.on('click', handleClick);

var inputField = d3.select('#datetime');

inputField.on("change", function(){
  var newInput = d3.event.target.value;
  console.log(newInput);

  var filteredData = tableData.filter(entry => entry.datetime === newInput);
  console.log(filteredData);
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

var inputField = d3.select('#city');

inputField.on("change", function(){
  var newInput = d3.event.target.value;
  console.log(newInput);

  var filteredData = tableData.filter(entry => entry.city === newInput);
  console.log(filteredData);
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
var inputField = d3.select('#state');

inputField.on("change", function(){
  var newInput = d3.event.target.value;
  console.log(newInput);

  var filteredData = tableData.filter(entry => entry.state === newInput);
  console.log(filteredData);
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

var inputField = d3.select('#country');

inputField.on("change", function(){
  var newInput = d3.event.target.value;
  console.log(newInput);

  var filteredData = tableData.filter(entry => entry.country === newInput);
  console.log(filteredData);
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

var inputField = d3.select('#shape');

inputField.on("change", function(){
  var newInput = d3.event.target.value;
  console.log(newInput);

  var filteredData = tableData.filter(entry => entry.shape === newInput);
  console.log(filteredData);
  filteredData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});