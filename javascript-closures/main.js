function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const doctor = medicalSchool('Alice Lee');
const lawyer = lawSchool('Alice Lee');

console.log(doctor);
console.log(lawyer);
