import { Point } from "models/Point";
import { prisma } from "../database/prismaClient";

export class UpdatePointService {
    async execute(data: Point): Promise<Error | string> {
     
  try {
    const point = await prisma.point.update({
        where:{
            id: data.id
        },
        data 
    });

    return "sucess update";
  } catch (error) {
    return new Error("Failed to create collection point");
  }
  }
  }
