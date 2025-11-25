import { z } from "zod";

export const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .min(8, { message: "Email terlalu pendek, minimal 8 karakter" })
    .max(40, { message: "Email terlalu panjang, maksimal 40 karakter" })
    .email({ message: "Format email tidak valid" }),

  name: z
    .string()
    .min(1, { message: "Nama wajib diisi" })
    .min(6, { message: "Nama terlalu pendek" })
    .max(40, { message: "Nama terlalu panjang" }),

  subject: z
    .string()
    .min(1, { message: "Subject wajib diisi" })
    .min(6, { message: "Subject terlalu pendek" })
    .max(40, { message: "Subject terlalu panjang" }),

  message: z
    .string()
    .min(1, { message: "Pesan wajib diisi" })
    .min(6, { message: "Pesan terlalu pendek" })
    .max(1000, { message: "Pesan terlalu panjang" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
