import { Request, Response } from "express";
import { ReadPointService } from "../service/ReadPointService";

export class ReadPointController {
  async handle(req: Request, res: Response) {
    const  name  = req.params.name as string;
    console.log(name);

    const readPointService = new ReadPointService();
    const result = await readPointService.execute( name );

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}