import { response } from 'express';
import Centro from '../models/Centro.js';

const postCentro = async(req, res ) => {

    const nombre = req.body.nombre.toUpperCase();

    const centrobd = await Centro.findOne({ nombre });

    if ( centrobd ) {
        return res.status(400).json({
            msg: `el centro ${ centrobd.nombre }, ya existe`
        });
    }
 
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    
    const centro = new Centro( data );

  
    await centro.save();

    res.status(201).json(centro);

}


const getCentros = async(req, res = response ) => {

    const { hasta = 8, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, centro ] = await Promise.all([
        Centro.countDocuments(query),
        Centro.find(query)
            .populate('usuario', ['nombre', 'email'])
            .skip( Number( desde ) )
            .limit(Number( hasta ))
    ]);

    res.json({
        total,
        centro
    });
}

const getCentro = async(req, res = response ) => {

    const { id } = req.params;
    const centro = await Centro.findById( id )
                            .populate('usuario', 'nombre');

    res.json( centro );

}

const putCentro = async( req, res = response ) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    data.nombre  = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const centro = await Centro.findByIdAndUpdate(id, data, { new: true });

    res.json( centro );

}

const delCentro = async(req, res =response ) => {

    const { id } = req.params;
    const centroEliminado = await Centro.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( centroEliminado );
}

export{
    postCentro,
    getCentro,
    getCentros,
    delCentro,
    putCentro
}























































