import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents.js';
import { validatejwt } from '../middlewares/validate.jwt.js';
import { isAdminRole } from '../middlewares/validate.role.js';
import { isValidRole,userExistsById } from '../helpers/db.validators.js';

import { getCampers, postCampers, deleteCampers, putCampers }from'../controllers/camper.controller.js';
 
const router = Router();

router.get("/", getCampers);


router.post("/",[
        check('nombre', 'Nombre no es valido').not().isEmpty(),
        check('password', 'Password debe ser de minimo 6 letras').isLength({min :10, max:10}),
        check('email', 'El email no es valido').isEmail(),
       check("rol", "elm rolm es valido").custom(isValidRole),
        validateDocuments
] , postCampers);


router.delete("/:id", [
  
        validatejwt,

           isAdminRole,   

    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( userExistsById ),
    validateDocuments
], deleteCampers );



router.put("/:id",
[
        check('id', 'No es un id MongoDB válido').isMongoId(),
        check('id').custom( userExistsById ),
        check('rol').custom(isValidRole),
        validateDocuments
    ], putCampers );


export default router;








































