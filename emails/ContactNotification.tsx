import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
} from "@react-email/components";
import { ContactFormData } from "../src/app/actions/contact";

interface Props {
  data: ContactFormData;
}

export function ContactNotificationEmail({ data }: Props) {
  return (
    <Html lang="es">
      <Head />
      <Body style={{ backgroundColor: "#0A0A08", fontFamily: "Georgia, serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          {/* Header */}
          <Section style={{ borderBottom: "1px solid rgba(200,169,110,0.3)", paddingBottom: "24px", marginBottom: "32px" }}>
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
              Nueva Consulta
            </Text>
          </Section>

          {/* Alert */}
          <Section
            style={{
              backgroundColor: "#141410",
              border: "1px solid rgba(200,169,110,0.2)",
              padding: "24px 28px",
              marginBottom: "28px",
            }}
          >
            <Text style={{ color: "#C8A96E", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 12px" }}>
              Detalles de la consulta
            </Text>
            <Heading style={{ color: "#F5F0E8", fontSize: "20px", fontWeight: 300, margin: "0 0 4px" }}>
              {data.nombre}
            </Heading>
            <Text style={{ color: "#6B6455", fontSize: "13px", margin: 0 }}>
              Destino de interés: <span style={{ color: "#C8A96E" }}>{data.destino}</span>
            </Text>
          </Section>

          {/* Fields */}
          <Section style={{ marginBottom: "28px" }}>
            {[
              { label: "Correo electrónico", value: data.email },
              ...(data.telefono ? [{ label: "Teléfono", value: data.telefono }] : []),
              { label: "Número de viajeros", value: data.viajeros },
            ].map((field) => (
              <Row key={field.label} style={{ marginBottom: "16px" }}>
                <Column>
                  <Text style={{ color: "#6B6455", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 4px" }}>
                    {field.label}
                  </Text>
                  <Text style={{ color: "#F5F0E8", fontSize: "14px", margin: 0 }}>
                    {field.value}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={{ borderColor: "rgba(200,169,110,0.15)", margin: "0 0 24px" }} />

          {/* Message */}
          <Section style={{ marginBottom: "32px" }}>
            <Text style={{ color: "#6B6455", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 10px" }}>
              Mensaje
            </Text>
            <Text
              style={{
                color: "#F5F0E8",
                fontSize: "14px",
                lineHeight: "1.7",
                backgroundColor: "#141410",
                border: "1px solid rgba(200,169,110,0.15)",
                padding: "16px 20px",
                margin: 0,
              }}
            >
              {data.mensaje}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ borderTop: "1px solid rgba(200,169,110,0.15)", paddingTop: "24px" }}>
            <Text style={{ color: "#6B6455", fontSize: "11px", textAlign: "center", margin: 0 }}>
              Viajes MG · Ciudad de México · contacto@viajesimg.mx
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotificationEmail;
