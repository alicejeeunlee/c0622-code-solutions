var books = [
  {
    isbn: '0141439556',
    title: 'Wuthering Heights',
    author: 'Emily Brontë'
  },
  {
    isbn: '1853264881',
    title: 'Tenant of Wildfell Hall',
    author: 'Anne Brontë'
  },
  {
    isbn: '1915582075',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var JSONBooks = JSON.stringify(books);

console.log('JSON.stringify(books):', JSONBooks);
console.log('typeof JSON.stringify(books):', typeof JSONBooks);

var JSONStudent = '{"id":626, "name":"Stitch"}';
console.log('typeof JSONStudent:', typeof JSONStudent);

var student = JSON.parse(JSONStudent);
console.log('student:', student);
console.log('typeof student:', typeof student);
