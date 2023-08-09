import { Schema, model } from "mongoose";

const CentroSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    descripcion : {
        type: String,
        required: [true, 'la descripcion es obligatoria'],
     
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    ciudad:{
        type: String,
        required: [true, 'la ciudad es obligatoria'],
     
    },
    camper: {
        type: Schema.Types.ObjectId,
        ref: 'Camper',
        required: true,
        unique: true
    }
})

const Centro = model("Centro", CentroSchema)

export default Centro;