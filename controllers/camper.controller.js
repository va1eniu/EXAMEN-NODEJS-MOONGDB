import Camper from '../models/Camper.js';
import bcryptjs from "bcryptjs"


const getCampers = async(req, res)=>{
    const { hasta, desde} = req.query;
    const query = { estado: true };

    const [ total, campers ] = await Promise.all([
        Camper.countDocuments(query),
        Camper.find(query)
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        campers
    });
}


const postCampers = async (req, res)=>{

    const {nombre,identificacion, nroIdentificacion, level, estado, levelState, imagen, email, password, rol} = req.body;
    const campers = new Camper({nombre,identificacion, nroIdentificacion, level, estado, levelState, imagen, email, password, rol});

    const salt = bcryptjs.genSaltSync();
    campers.password = bcryptjs.hashSync(password, salt);
    
    await campers.save();
    res.json({
        "message":"post ",
        campers
    })
}

const deleteCampers = async (res, req) =>{

        const {id} = req.params
        const camper = await Camper.findByIdAndUpdate( id, { estado: false } );
        res.json(camper)
    
}

const putCampers = async (req, res)=>{
  
      const { id } = req.params;
     
   
      const { _id, password, googleSignIn, ...resto } = req.body;
  
      if ( password ) {
   
          const salt = bcryptjs.genSaltSync();
          resto.password = bcryptjs.hashSync( password, salt );
      }

      const camper = await Camper.findByIdAndUpdate( id, resto, {new:true} );
  
      res.json({
          msg:"camper Actualizado",
          camper : camper
      });
    
  }
  


export {
    getCampers,
    postCampers,
    deleteCampers,
    putCampers
}




























































