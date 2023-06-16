import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El Nombre esta vacío" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El Correo esta vacío" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El Mensaje esta vacío" });
  }

  if (errores.length > 0) {
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    // Almacenarlo en la base de datos
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
    } catch (error) {
      console.log(error);
    }
    res.redirect("/testimoniales");
  }
};

export { guardarTestimonial };
