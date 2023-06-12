import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { SessionController } from "../controller/SessionController";
import { CreatPointController} from "../controller/CreatPointController";
//import {listarPontos} from "../controller/teste"

const router = Router()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const routes = Router();

routes.post("/login", new SessionController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/points", new CreatPointController().handle );
router.get("/points", async (req, res) => {
    try {
      const pontos = await prisma.point.findMany()
      res.json({ pontos })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Erro ao listar pontos' })
    } finally {
      await prisma.$disconnect()
    }
  })



export { routes, router };


