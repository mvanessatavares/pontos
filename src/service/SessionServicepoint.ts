import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";
import { Point } from "../models/Point";

export class SessionServicepoint {
    async execute({ name }: Point) {
      const point = await prisma.point.findMany({
        where: {
         name,
        },
      });
  
  if (point.length === 0) {
    return new Error("No collection points found in this location.");
  }
  
  return point;
  }
  }
