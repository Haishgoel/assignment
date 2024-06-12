class StringCalculator {
    static add(numbers) {
      if (!numbers) return 0; 
  
      let delimiter = /,|\n/; 
  
     
      if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1); 
      }
  
      const numberArray = numbers.split(delimiter); 
      let sum = 0;
      let negativeNumbers = [];
  
  
      numberArray.forEach(numStr => {
        const num = parseInt(numStr, 10);
        if (isNaN(num)) return; 
        if (num < 0) negativeNumbers.push(num);
        sum += num;
      });
  
      
      if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
      }
  
      return sum;
    }
  }
  
  
  const testCases = [
    { input: "" },
    { input: "1" },
    { input: "1,5"},
    { input: "1,5,6" },
    { input: "1\n2,3" },
    { input: "//;\n1;2" },
    { input: "-1,2,-3"},
  ];
  
  
  const runTests = (testCases) => {
    testCases.forEach(({ input }) => {
      try {
        const result = StringCalculator.add(input);
        console.log(`Input: "${input}" => Output: ${result}`);
      } catch (error) {
        console.log(`Input: "${input}" => Error: "${error.message}"`);
      }
    });
  }
  
  
  runTests(testCases);
  