function calculateDogAge(age) {
  let dogYears = 7 * age;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
  return dogYears;
}

calculateDogAge(3) 
calculateDogAge(5)  
calculateDogAge(10) 

let age1=calculateDogAge(1)
age1

let age2=calculateDogAge(0.5)
age2

let age3=calculateDogAge(12)
age3

let age4=calculateDogAge(7)
age4

function perimeter(radius) {
  let perimeter = 2 * Math.PI * radius;
  console.log("The perimeter is " + perimeter);
  return perimeter;
}

perimeter(5)

function area(radius) {
  let area = Math.PI * radius ** 2;
  console.log("The area is " + area);
  return area;
}

area(1)
area(2.5)

function C2F(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  console.log("celsius"+" °C = "+ fahrenheit +" °F");
  return fahrenheit;
}

function F2C(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  console.log(fahrenheit+ "°F ="+ celsius +"°C");
  return celsius;
}


C2F(0)    
C2F(100)  
F2C(32) 
F2C(212)