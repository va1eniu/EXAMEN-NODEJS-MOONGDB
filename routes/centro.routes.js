import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments} from '../middlewares/validate.documents.js';
import { validateJWT } from '../middlewares/validate.jwt.js';
import { isAdminRole } from '../middlewares/validate.role.js';

import { findCategoryById } from '../helpers/db.validators.js';

import { postCentro, getCentros, getCentro, putCentro, delCentro
      } from '../controllers/centro.controller.js';

const router = Router();


router.post('/', [ 
   validateJWT, 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    validateDocuments
], postCentro );


router.get('/', getCentros );

router.get('/:id',[
      check('id', 'No es un id de Mongo válido').isMongoId(),
      check('id').custom( findCategoryById ),
      validateDocuments,
  ], getCentro );


router.put('/:id',[
      validateJWT,
      check('nombre','El nombre es obligatorio').not().isEmpty(),
      check('id').custom( findCategoryById ),
      validateDocuments
  ], putCentro );



router.delete('/:id',[
      validateJWT,
      isAdminRole,
      check('id', 'No es un id de Mongo válido').isMongoId(),
      check('id').custom( findCategoryById ),
      validateDocuments,
  ], delCentro);


export default router;




































