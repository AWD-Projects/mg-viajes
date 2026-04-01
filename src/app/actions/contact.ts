"use server";

import { Resend } from "resend";
import { ContactNotificationEmail } from "../../../emails/ContactNotification";
import { ContactConfirmationEmail } from "../../../emails/ContactConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  destino: string;
  viajeros: string;
  mensaje: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const agencyEmail = process.env.CONTACT_EMAIL || "contacto@viajesimg.mx";

    // Send notification to agency
    await resend.emails.send({
      from: "Viajes MG Website <noreply@viajesimg.mx>",
      to: agencyEmail,
      subject: `Nueva consulta de ${data.nombre} — ${data.destino}`,
      react: ContactNotificationEmail({ data }),
    });

    // Send confirmation to client
    await resend.emails.send({
      from: "Viajes MG <noreply@viajesimg.mx>",
      to: data.email,
      subject: "Recibimos tu mensaje — Viajes MG",
      react: ContactConfirmationEmail({ nombre: data.nombre }),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "No se pudo enviar el mensaje. Intenta de nuevo." };
  }
}
