import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { SessionController } from "../controller/SessionController";
import { CreatPointController} from "../controller/CreatPointController";

const routes = Router();

routes.post("/login", new SessionController().handle);
routes.post("/users", new CreateUserController().handle);
routes.post("/points", new CreatPointController ().handle )


export { routes };

