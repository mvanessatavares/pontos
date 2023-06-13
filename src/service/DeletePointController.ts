import { Request, Response } from "express";
import { DeletePointService } from "../service/DeletePointService";

export class DeletePointController {
  async handle(req: Request, res: Response) {
    const  name  = req.params.name as string;
    console.log(name);

    const deletePointService = new DeletePointService();
    const result = await deletePointService.execute( name );

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
