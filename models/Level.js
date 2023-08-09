import { Schema, model } from "mongoose";

const CentroSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    ruta : {
        type: String,
        required: [true, 'la ruta es obligatoria'],
     
    },
    duracion: {
        type: Boolean,
        default: true,
        required: true
    },
    centro: {
        type: Schema.Types.ObjectId,
        ref: 'Centro',
        required: true,
        unique: true
    }
})

const Centro = model("Centro", CentroSchema)

export default Centro