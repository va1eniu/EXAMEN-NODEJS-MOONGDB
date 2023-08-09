import { Schema, model } from "mongoose";

const CamperSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    identificacion: {
        type: String,
        required: ['cedula','identidad'],
        unique: false
    },
    nroIdentificacion: {
        type: String,
        required: [true, 'la descripcion es obligatoria'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'la descripcion es obligatoria'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'la descripcion es obligatoria'],
      
    },
    
    level: {
        type:String,
        required: true,
        default: ['1', '2', '3'],
        
    },
    estado: {
        type:Boolean,
        default: true
    },
    levelState: {
        type: String,
        required: ['finalizado', 'pendiente'],
       
    },
    imagen: {
        type: String
    
    },
    rol: {
        type:String,
        required: true,
        default: 'camper',
    },
})

const Camper = model("Camper", CamperSchema)

export default Camper


