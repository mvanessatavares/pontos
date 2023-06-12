import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { SessionController } from "../controller/SessionController";
import { CreatPointController} from "../controller/CreatPointController";
import { DeletePointController} from "../controller/DeletePointController";
import {ReadPointController} from "../controller/ReadPointController"

const routes = Router();

routes.post("/login", new SessionController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/points", new CreatPointController().handle );
routes.delete("/points/:name" ,new DeletePointController().handle);
routes.get("/points/:name",new ReadPointController().handle);



export { routes};
