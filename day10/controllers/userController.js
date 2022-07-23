import userModel from "../models/userModel.js";
import { Op } from "sequelize";

class UserController {
    //add user
    async addUser(req, res) {
        const { username, location } = req.body;
        try {

            const data = await userModel.create(req.body); //insert single data

            // const data = await userModel.bulkCreate(req.body);  //insert multiple data  

            console.log(data);
            if (data) {
                res.status(200).json({ success: true, message: "User added" });
            }
            else {
                res.status(200).json({ success: false, message: "Failed to add user" });
            }
        } catch (err) {
            console.log(err);
        }
    }

    //get all users
    async getAllUsers(req, res) {

        const data = await userModel.findAll();
        console.log("Find all")
        console.log(data);

        if (data != null) {
            res.status(200).json(data);
        }
        else {
            res.json({ success: false, message: "Can't find data" });
        }
    }

    //get user by id
    async getUserById(req, res) {
        const { id } = req.params;
        if (id) {
            const data = await userModel.findByPk(id);
            if (data != null) {

                res.status(200).json({ success: true, message: "Data retrived", data });
            }
            else {
                res.status(200).json({ success: true, message: "Invalid id" });
            }
        }
        else {
            res.status(200).json({ success: false, message: "User not found" });
        }
    }

    //update user
    async updateUser(req, res) {
        const { id } = req.params;
        if (id) {
            const { username, location } = req.body;

            const data = await userModel.update({ username, location }, {
                where: {
                    id,
                }
            });
            if (data[0]) {
                res.status(200).json({ success: true, message: "User updated" });
            }
            else {
                res.status(200).json({ success: false, message: "Failed to update user" });
            }
        } else {
            res.status(200).json({ success: false, message: "User not provided" });
        }
    }

    //delete user
    async deleteUser(req, res) {
        const { id } = req.params;
        if (id) {
            const data = await userModel.destroy({
                where: {
                    id,
                }
            });
            console.log(data);

            if (data) {
                res.status(200).json({ success: true, message: "User deleted" });
            }
            else {
                res.status(200).json({ success: false, message: "Invalid user" });
            }
        } else {
            res.status(403).json({ success: false, message: "Unauthorized access" });
        }
    }

    //search user
    async searchUserByLocation(req, res) {
        const { location } = req.query;

        const data = await userModel.findAll({
            where: {
                location: {
                    [Op.like]: `%${location}%`,
                }
            }
        });

        console.log(data);
        res.json(data);
    }
}

export default UserController;