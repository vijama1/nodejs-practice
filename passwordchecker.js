let sampleWord = "astronaut";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // password should contain 5 characters and two consecutive digits
let result = pwRegex.test(sampleWord);
