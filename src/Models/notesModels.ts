import {Model,DataTypes} from "sequelize";
import { mysql } from "../Database/mysql.instance";

interface notesInterface extends Model{

    id:number,
    title:string,
    content:string
}

export const notes=mysql.define<notesInterface>(
    'notes',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING
        },
        content:{
            type:DataTypes.STRING
        }
    }
,
    {tableName:'notes',timestamps:false}  
)