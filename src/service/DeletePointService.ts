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
