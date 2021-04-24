import { Options, diskStorage } from 'multer';
import path from 'path';
import crypto from 'crypto';

const MulterConfig = {
    dest:path.resolve(__dirname,'..','tmp','uploads'),
    storage:diskStorage({
        destination: (req,file,cb) => {
            cb(null, path.resolve(__dirname,'..','tmp','uploads'));
        },
        filename: (req,file,cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) console.log(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            })
        },
    }),
    limits:{
        fileSize: 2 * 1024 * 1024, // Máximo de 2 megabytes 
    },
    fileFilter: (req, file, cb) =>{
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    },
} as Options;

export default MulterConfig;