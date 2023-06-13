import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { SessionController } from "../controller/SessionController";
import { CreatPointController} from "../controller/CreatPointController";
import { DeletePointController} from "../controller/DeletePointController";
import {ReadPointController} from "../controller/ReadPointController"
import { UpdatePointController } from "controller/UpdatePointController";

const routes = Router();

routes.post("/login", new SessionController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/points", new CreatPointController().handle );
//todo: adicionar autenticação e user admin
routes.delete("/points/:id" ,new DeletePointController().handle);
routes.get("/points/",new ReadPointController().handle);
routes.patch("/points/:id" ,new UpdatePointController().handle)


export { routes};
