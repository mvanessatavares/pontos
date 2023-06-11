import { Request, Response } from "express";
import { CreatePointService } from "../service/CreatePointService";

export class CreatPointController {
  async handle(request: Request, response: Response) {
    const { name, id, latitude, longitude, tipoLixo, city, state } = request.body;

const creatPointService = new CreatePointService();

const result = await creatPointService.execute({name, tipoLixo, id, latitude, longitude, city, state});

if (result instanceof Error) {
  return response.status(400).json(result.message);
}

return response.json(result);
}
}