// const bcrypt = require("bcrypt");

// (async () => {
//   try {
//     const hashedPassword = await bcrypt.hash("password123", 10);
//     console.log("Hashed Password:", hashedPassword);
//   } catch (error) {
//     console.error("Error hashing password:", error);
//   }
// })();


const crypto = require("crypto");
const secretKey = crypto.randomBytes(64).toString("hex");
console.log(secretKey);







