function extractNumbers(arr) {
       const numbersArr = arr.map(item => {
         if(typeof(item) !== 'number'){
           const match = item.toString().match(/[-+]?\d+/);
           return match ? parseInt(match[0], 10) : null;
         }
         return item;
       });
       return numbersArr.filter(number => number !== null);
     }
     
     const arr = ["-9°", "+13°", "+13°", "+0°", "+13°", "+13°", "+13°", "+13°", "+12°", "+12°", "+12°", "+12°", "+12°", "+11°", "+11°", "+11°", "+11°", "+11°", "+10°", "+10°", "+10°", "+10°", "+10°", "+10°", "+10°", "+9°", "+9°", "+9°", "+9°", "+9°", "+9°", "+9°", "+8°", "+8°", "+8°", "+8°", "+8°", "+8°", "+8°"]
     const numbersOnly = extractNumbers(arr);
     console.log(numbersOnly);
     