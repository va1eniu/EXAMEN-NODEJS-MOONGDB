import { Schema, model } from "mongoose";

const RoleSchema = Schema({
    rol: {
        type: String,
        required : [true, 'El rol es Obligatorio']
    }
    
})

const Role = model("Role", RoleSchema)

export{ 
    Role
}