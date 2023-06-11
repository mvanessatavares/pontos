import { hash } from "bcrypt";
import { PointRequest } from "../models/PointRequest";
import { Point } from "models/Point";
import { prisma } from "../database/prismaClient";

export class CreatePointService {
    async execute({id, latitude, longitude, tipoLixo, name, city,  state}: PointRequest): Promise<Error | Point> {
      const existPoint = await prisma.point.findUnique({
        where: {
          id,
        },
      });
  
  if (existPoint) {
    return new Error("Collection point already exists");
  }
  try {
    const point = await prisma.point.create({
      data: {
        id,
        latitude,
        longitude,
        name,
        tipoLixo,
        city,
        state
      },
    });
  
    return point;
  } catch (error) {
    return new Error("Failed to create collection point");
  }
  }
  }