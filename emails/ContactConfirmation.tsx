import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface Props {
  nombre: string;
}

export function ContactConfirmationEmail({ nombre }: Props) {
  return (
    <Html lang="es">
      <Head />
      <Body style={{ backgroundColor: "#0A0A08", fontFamily: "Georgia, serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          {/* Header */}
          <Section style={{ borderBottom: "1px solid rgba(200,169,110,0.3)", paddingBottom: "24px", marginBottom: "40px" }}>
            <Heading
              style={{
                color: "#F5F0E8",
                fontSize: "22px",
                fontWeight: 300,
                letterSpacing: "4px",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              VIAJES<span style={{ color: "#C8A96E" }}> MG</span>
            </Heading>
            <Text style={{ color: "#6B6455", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "8px 0 0" }}>
              Agencia Boutique · Ciudad de México
            </Text>
          </Section>

          {/* Main message */}
          <Section style={{ marginBottom: "36px" }}>
            <Text style={{ color: "#C8A96E", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 16px" }}>
              Hola, {nombre}
            </Text>
            <Heading style={{ color: "#F5F0E8", fontSize: "28px", fontWeight: 300, lineHeight: "1.3", margin: "0 0 20px" }}>
              Recibimos tu mensaje.
            </Heading>
            <Text style={{ color: "#F5F0E8", opacity: 0.7, fontSize: "15px", lineHeight: "1.8", margin: "0 0 16px" }}>
              Gracias por contactar a Viajes MG. Hemos recibido tu consulta y uno de nuestros asesores te responderá en las próximas <strong style={{ color: "#C8A96E" }}>24 horas</strong>.
            </Text>
            <Text style={{ color: "#F5F0E8", opacity: 0.7, fontSize: "15px", lineHeight: "1.8", margin: 0 }}>
              Mientras tanto, si tienes alguna pregunta urgente puedes escribirnos directamente por WhatsApp o llamarnos. Estamos para servirte.
            </Text>
          </Section>

          <Hr style={{ borderColor: "rgba(200,169,110,0.15)", margin: "0 0 36px" }} />

          {/* What's next */}
          <Section
            style={{
              backgroundColor: "#141410",
              border: "1px solid rgba(200,169,110,0.15)",
              padding: "28px",
              marginBottom: "36px",
            }}
          >
            <Text style={{ color: "#C8A96E", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 18px" }}>
              Qué sigue
            </Text>
            {[
              "Un asesor revisará tu solicitud hoy mismo",
              "Te enviaremos una propuesta personalizada en 24h",
              "Refinamos el itinerario juntos, sin costos adicionales",
              "Viaja tranquilo con soporte 24/7 durante tu viaje",
            ].map((item, i) => (
              <Text key={i} style={{ color: "#F5F0E8", opacity: 0.7, fontSize: "13px", lineHeight: "1.7", margin: "0 0 10px", paddingLeft: "0" }}>
                <span style={{ color: "#C8A96E", marginRight: "10px" }}>{String(i + 1).padStart(2, "0")}.</span>
                {item}
              </Text>
            ))}
          </Section>

          {/* Signature */}
          <Section style={{ marginBottom: "32px" }}>
            <Text style={{ color: "#F5F0E8", opacity: 0.6, fontSize: "14px", fontStyle: "italic", margin: "0 0 6px" }}>
              Con gusto,
            </Text>
            <Text style={{ color: "#F5F0E8", fontSize: "16px", fontWeight: 300, margin: 0 }}>
              El equipo de Viajes MG
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: "24px" }}>
            <Text style={{ color: "#6B6455", fontSize: "11px", textAlign: "center", margin: "0 0 8px" }}>
              Viajes MG · Ciudad de México
            </Text>
            <Text style={{ color: "#6B6455", fontSize: "11px", textAlign: "center", margin: 0 }}>
              contacto@viajesimg.mx · +52 (55) 0000-0000
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactConfirmationEmail;
