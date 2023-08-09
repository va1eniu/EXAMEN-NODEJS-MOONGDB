import Camper from "../models/Camper.js";
import {Role} from "../models/Role.js";

const isValidRole = async(rol= '')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}
 const emailExiste = async( email = '' ) => {
    const existeEmail = await Camper.findOne({email});
    if(existeEmail){

        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }
 const userExistsById = async( id ) => {

    const userExists = await Camper.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (camper) no existe ${ id }`);
    }
}


export {
    isValidRole,
    emailExiste,
    userExistsById,

}