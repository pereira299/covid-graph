import { NextApiRequest, NextApiResponse } from 'next';
import {parse} from "../../utils/csv"

export default function home(req:NextApiRequest, res:NextApiResponse){
    parse()
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