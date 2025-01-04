// pages/api/students/[username].js
import { NextApiRequest, NextApiResponse } from "next";
import { getStudentByUsername } from '../../controllers/studentController'; // Adjust the path if needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { username } = req.query;
      const student = await getStudentByUsername(String(username));
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(student);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching student data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}