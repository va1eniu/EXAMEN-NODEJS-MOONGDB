import { Schema, model } from "mongoose";

const CentroSchema = Schema({
    nombre :{
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    centro : {
        type: String,
        required: [true, 'la descripcion es obligatoria'],
        unique: true
    },
    level: {
        type: Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    }
})

const Centro = model("Centro", CentroSchema)

export default Centro