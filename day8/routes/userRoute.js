import express from "express";
import connection from "../config/connection.js";
const router = express.Router();

//insert in database
router.post("/add", async (req, res) => {
    const { username, location } = req.body;
    try {
        const [rows, fields] = await connection.query(
            `INSERT INTO users(username,location) VALUES(?,?)`,
            [username, location],
        );
        if (rows.affectedRows != 0) {
            res.status(200).json({ success: true, message: "User added" });
        }
        else {
            res.status(200).json({ success: false, message: "User not added" });
        }
    }
    catch (err) {
        console.log(err);
    }
});

//select all
router.get("/", (req, res) => {
    connection.query(
        `SELECT * from users`,
        (error, results, fields) => {
            if (error) throw error;
            res.status(200).json({ ...results });
            console.log(results);
        }
    );
});

//select operation where clause
router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (id) {
        connection.query(
            `SELECT * from users WHERE id=?`,
            [id],
            (error, results, fields) => {
                if (error) throw error;
                res.status(200).json(...results);
                console.log(results);
            }
        );
    }
    else {
        res.status(200).json({ success: false, message: "User not found" });
    }
});

//update user
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    if (id) {
        const { username, location } = req.body;
        const [rows, fields] = await connection.query(
            `UPDATE users SET username=?,location=? WHERE id=?`,
            [username, location, id],
        );
        if (rows.affectedRows != 0) {
            res.status(200).json({ success: true, message: "User updated" });
        }
        else {
            res.status(200).json({ success: false, message: "Failed to update user" });
        }
    } else {
        res.status(200).json({ success: false, message: "User not provided" });
    }
});

//delete user
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    if (id) {
        const [rows, fields] = await connection.query(
            `DELETE FROM users where id=?`,
            [id],
        );

        if (rows.affectedRows != 0) {
            res.status(200).json({ success: true, message: "User deleted" });
        }
        else {
            res.status(200).json({ success: false, message: "Invalid user" });
        }

    } else {
        res.status(403).json({ success: false, message: "Unauthorized access" });
    }
});

export default router;