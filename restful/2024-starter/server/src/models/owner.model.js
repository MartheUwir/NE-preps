import jsonwebtoken from 'jsonwebtoken';
import { DataTypes, Model } from 'sequelize';
const { sign } = jsonwebtoken;
import sequelize from '../utils/database.js';

export class Owners extends Model {
    generateAuthToken() {
        const token = sign(
            { _id: this._id, role: this.role },
            (process.env.JWT).trim()
        );
        return token;
    }
}

Owners.init({

    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 10
        },
        unique: true
    },

    nationalId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: 16
        },
        unique: true
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

},
 {
   
    sequelize,
    modelName: 'owners'
})
try{
    Owners.sync()
}catch (ex){
    console.log(error)
}

export default Owners;












