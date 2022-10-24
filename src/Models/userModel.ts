import {Model,DataTypes} from "sequelize";
import { mysql } from "../Database/mysql.instance";

export interface userInterface extends Model{

    id:number,
    name:string,
    email:string,
    password:string
}

export const users=mysql.define<userInterface>(
    'users',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
       name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
    }
,
    {tableName:'user',timestamps:false}  
)