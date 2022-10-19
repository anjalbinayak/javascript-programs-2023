const date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let currentDate = `${year}-${month}-${day}`;
console.log(currentDate); 
