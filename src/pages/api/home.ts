import { NextApiRequest, NextApiResponse } from "next";
import deadService from "../../services/deadService";
import sickService from "../../services/sickService";
import vacineService from "../../services/vacineService";

export default function home(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    casos: sickService(),
    mortes: deadService(),
    vacina: vacineService(),
  });
}
