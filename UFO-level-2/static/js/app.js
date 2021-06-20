// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// grab references to the input element and the output div
var text = d3.select("#datetime").value;
console.log(text)

// var output = d3.select(".output");

// // Function to reverse a string
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
  var inputText = d3.select("#datetime").on("clicl", function(){
    d3.select(this).value;

// //     // Get current event info
    console.log(inputText);
  })

  


//     var filteredData = tableData.filter(entry => entry.datetime === inputText);

//   console.log(filteredData);
  
//   var tbody = d3.select("tbody")
//   tbody.html("");

//   filteredData.forEach(function(event) {
//     console.log(event);
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//     var text = inputText
    
// });
// var text = inputText
// text.on("click", handleChange);
// console.log(text);
// };

