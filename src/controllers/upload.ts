import { Request, Response } from 'express';
import conn from '../database/connection';

const connection  = {
    async upload(req:Request,res:Response){
        const { originalname:name, size, filename:key } = req.file;

        const sql = 'INSERT INTO images (nome, tamanho, nome_arquivo) VALUES (?,?,?) '

       conn.query(sql, [name, size, key], (err, results) => {
            if (err) {
                return res.json({ message: err.message });
            }
            if (results) {
                res.json({
                    message: 'image successfully registered'
                });
            }
        });
    }
}

export default connection;