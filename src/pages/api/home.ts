import { NextApiRequest, NextApiResponse } from 'next';

export default function home(req:NextApiRequest, res:NextApiResponse){
    
    res.status(200).json({
        casos:{
            estado: [],
            idade: [],
            data: []
        },
        mortes:{
            estado: [],
            idade: [],
            data: []
        },
        vacina:{
            estado: [],
            idade: [],
            data: []
        }
    })
}