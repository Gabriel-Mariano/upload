import express from 'express';
import multer from 'multer';
import multerConfig from '@config/multer';

const routes = express.Router();

routes.get('/',(require,response)=>{
    return response.json({ message:"Oi" })
});

routes.post('/register', multer(multerConfig).single('file'),  (require,response)=>{
    
    return response.json({ message:"Imagem cadastrada." })
})

export default routes;