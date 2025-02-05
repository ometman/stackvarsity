// const pool = require('../../utils/dbPool');

// exports.getUsers = async (req, res) => {
//     try {
//         let { page = 1, limit = 10 } = req.query;
//         page = parseInt(page, 10);
//         limit = parseInt(limit, 10);

//         const offset = (page - 1) * limit;

//         const { rows } = await pool.query(
//             'SELECT id, username, email, role, created_at FROM users LIMIT $1 OFFSET $2',
//             [limit, offset]
//         );

//         res.status(200).json(rows);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).json({ error: error.message });
//     }
// };


const sequelize = require('../../utils/dbSequel');
const { QueryTypes } = require('sequelize');

exports.getUsers = async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        const offset = (page - 1) * limit;

        const users = await sequelize.query(
            'SELECT id, username, email, role, created_at FROM users LIMIT :limit OFFSET :offset',
            {
                type: QueryTypes.SELECT,
                replacements: { limit, offset }
            }
        );

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: error.message });
    }
};
