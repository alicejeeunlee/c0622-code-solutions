/* exported getStudentNames */

/*
make new list of names
look at each item(object) in students(array)
-push value of 'name' property of each item(object) to new array
return list
*/

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
