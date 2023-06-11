import { Request, Response } from "express";
import { SessionServicepoint } from "../service/SessionServicepoint";

export class SessionPointController {
  async handle(request: Request, response: Response) {
    const { name} = request.body;

    const sessionServicepoint = new SessionServicepoint();

    const result = await sessionServicepoint.execute({ name });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
