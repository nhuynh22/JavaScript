// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Use a forEach function to loop through the array of objects (from your data)
grades.forEach((studentgrade) => {

  // Assign values to the `student` name variable and the `grade` variable
  var student =studentgrade.name;
  var grade =studentgrade.grade;

  // Append one table row per student/grade
  console.log(student);
  var row = tbody.append("tr");
 
  if(parseInt(grade)<60){
    row.style("background-color", "red");
  }
  if(parseInt(grade) <= 70 && parseInt(grade) >= 60){
    row.attr("class", "bg-warning");
  }
  
  // append one cell for the student and one cell for the grade
    //var cell = row.append("td");
    //cell.text(student);
  Object.entries(studentgrade).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
 
});