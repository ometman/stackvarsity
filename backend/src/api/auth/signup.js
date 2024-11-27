const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Update with your database connection string
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
      }

      // Check if the user already exists
      const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (existingUser.rows.length > 0) {
        return res.status(409).json({ message: "User already exists." });
      }

      // Hash the password and save to the database
      const hashedPassword = await bcrypt.hash(password, 10);
      await pool.query(
        "INSERT INTO users (email, password, created_at) VALUES ($1, $2, NOW())",
        [email, hashedPassword]
      );

      res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed.` });
  }
}
