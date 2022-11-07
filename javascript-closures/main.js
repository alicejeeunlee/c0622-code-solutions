function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const doctor = medicalSchool('Alice Lee');
const lawyer = lawSchool('Alice Lee');

// alt fx call
// const me = graduate('Software Engineer')('Alice Lee');
// console.log(me);

console.log(doctor);
console.log(lawyer);

// ES6
// const grad = credential => fullName => `${fullName}, ${credential}`;
// const med = grad('M.D.');
// const law = grad('Esq.');

// const medGrad = med('Sheldon Cooper');
// const lawGrad = law('Lisa Simpson');

// console.log(medGrad);
// console.log(lawGrad);
