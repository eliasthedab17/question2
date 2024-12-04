//programers names:    אליאס דבאג      נור עמאר

//question 2: print all the prime numbers that are smaller than 237

//making a function that shows if the number is prime or not
function prime(num) {
  if (num == 2) return true;
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return true;
}
for (let i = 2; i < 237; i++) // looking for  nubmers bellow 237 that are prime numbers 
  if (prime(i))  // sending the i to the function i go from 2 to 236 becuase 0 and 1 arent prime 
    console.log(i);
