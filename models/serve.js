import  express  from 'express';
import cors from "cors";
import fileUpload from 'express-fileupload';
import dbConnection from '../database/connection.js';
import routerCamper from '../routes/camper.routes.js';
import routerAuth from '../routes/auth.routes.js';

class Server{
    constructor(){
        this.app = express();
       
        this.port = process.env.PORT

        this.paths = {
            camper:       '/api/campers',
            centro:     '/api/centros',
            level: '/api/levels',
            role:   '/role',
            ruta:    '/api/rutas',
            auth: '/auth'
        }
        
        this.connectDB();
     
        this.middlewares();
     
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }

    middlewares(){
       
        this.app.use(cors());

     
        this.app.use(express.json());


        this.app.use(express.static('public'));

        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
    }

    routes(){
       this.app.use(this.paths.camper, routerCamper);
       this.app.use(this.paths.auth, routerAuth);
       this.app.use(this.paths.auth, routerAuth);

  
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

export default Server;



































