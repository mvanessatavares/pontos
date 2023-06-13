<<<<<<< HEAD
import { prisma } from "../database/prismaClient";

export class DeletePointService {
  async execute(id : string): Promise<Error | String> {
    try {
      const point = await prisma.point.delete({
        where:{
            id
        }
      });
      //TODO: verifiar escrita
      return "point sucess delete";
    } catch (error) {
      console.log(error);
      return new Error("Failed to delete point");
    }
  }
}
=======
import { hash } from "bcrypt";
import { Point } from "models/Point";
import { prisma } from "../../database/prismaClient";

export class DeletePointService {
  async execute(name : string): Promise<Error | Boolean> {
    try {
      const user = await prisma.point.delete({
        where:{
            name
        }
      });

      return true;
    } catch (error) {
      console.log(error);
      return new Error("Failed to delete point");
    }
  }
}
>>>>>>> 7d3748cbb2236b1e37e189c784ec7fdcfbfbe62a
