<<<<<<< HEAD
import { prisma } from "../database/prismaClient";
import { Point } from "models/Point";

export class ReadPointService {

    async execute () : Promise<Error | Point[]> {
        try { 
            const result = await prisma.point.findMany()
            return result
        } 
        catch (error) {
            return new Error("Failed to find collection point");
        }
    }
}

=======
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
>>>>>>> 7d3748cbb2236b1e37e189c784ec7fdcfbfbe62a
