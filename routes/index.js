import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controllers/paginaController.js";

import { guardarTestimonial } from "../controllers/guardarTestimonial.js";

const router = express.Router();

//req, lo que enviamos : res, lo que express nos responde
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

export default router;
