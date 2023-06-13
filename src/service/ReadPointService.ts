import { Point } from "models/Point";
import { prisma } from "../database/prismaClient";

export class ReadPointService {
  async execute(name : string): Promise<Error | Point> {
    try {
      const point = await prisma.point.findUnique({
        where:{
            name
        }
      });
      return point;
    } catch (error) {
      console.log(error);
      return new Error("Point not found");
    }
  }
}
