import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const myElements = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];

  console.log(myElements[1], 'myElements[1]');

  for(let i = 0; i < myElements.length; i++) {
    console.log(myElements[i]);
  }

  myElements.forEach(function(value, index, array) {
    console.log(value, 'value');
    console.log(index, 'index');
    console.log(array, 'array')
  });

  const newArray = myElements.map(function(value, index, array) {
    return  'Nuevo ' + value;
  });

  const orderedArray = myElements.sort();
  console.log(orderedArray);

  const arrayNumbers = [1,2,3,4,5,6,0,10,11,12,20,22];    
  const orderedArray2 = arrayNumbers.sort();
  console.log(orderedArray2, 'orderedArray2');

  const orderedArray3 = arrayNumbers.sort(function(a, b) {
    return a - b
  });
  console.log(orderedArray3, 'orderedArray3');

  const orderedArray4 = arrayNumbers.sort(function(a, b) {
    return b - a
  });
  console.log(orderedArray4, 'orderedArray4');

  const myObject = {
    name: 'David', 
    age: 33
  }

  const students = [
    {
      name: 'Pedro',
      age: 44
    },
    {
      name: 'David',
      age: 33
    },
    {
      name: 'Isra',
      age: 22
    }
  ];

  console.log(students);

  students.forEach(function(value) {
    console.log(value);
  })

  // Orden alfabetico por nombre

  
  const studentsByLargeName = students.sort(function (a,b) {
  });

  console.log(studentsByLargeName);


};
