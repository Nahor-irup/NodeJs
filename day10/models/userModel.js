import connection from "./connection.js";
import { DataTypes } from "sequelize";

const userModel = connection.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,

        // set(value) {     //set define value in database
        //     this.setDataValue("location", value + ",Nepal"); 
        // },

        // get() {      //show define value while retriving
        //     return this.getDataValue("location") + " Ok";
        // },
    }
},
    // {
    //     timestamps:false;     //created date and updated date would not be created
    // }
);

export default userModel;