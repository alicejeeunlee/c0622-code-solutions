var student = {
  firstName: 'Alice',
  lastName: 'Lee',
  age: 27
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'EMT';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Mercedes',
  model: 'GLA250',
  year: '2021'
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Simba',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
