import { NextApiRequest, NextApiResponse } from "next";
import deadService from "../../services/deadService";
import sickService from "../../services/sickService";
import vacineService from "../../services/vacineService";

export default async function home(req: NextApiRequest, res: NextApiResponse) {
    try{

        const casos = await sickService();
        const mortes = await deadService();
        const vacinas = await vacineService();
        
        res.status(200).json({
            casos,
            mortes,
            vacinas,
        });
    }catch(err){
        console.log(err);
    }
}
