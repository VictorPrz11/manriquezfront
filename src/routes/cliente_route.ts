import {Router} from "express";
import { crearCliente } from "../controller/clientes_controller";

const router=Router();

router.post('/clientes', crearCliente);

export default router;