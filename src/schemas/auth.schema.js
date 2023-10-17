import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "nombre de usuario es requerido",
  }),
  email: z
    .string({
      required_error: "email es requerido",
    })
    .email({
      message: "email no permitido",
    }),
});
