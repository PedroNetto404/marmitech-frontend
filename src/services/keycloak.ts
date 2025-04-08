import axios from "axios";

const {
  KEYCLOAK_AUTH_URL,
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_CLIENT_SECRET,
} = process.env;

// Instância que chama o endpoint de token do Keycloak
const keycloakAuth = axios.create({
  baseURL: KEYCLOAK_AUTH_URL, // ex: "https://meu-keycloak.com/realms/MARMITECH/protocol/openid-connect/token"
});

/**
 * Obtém o token de acesso via Client Credentials (exemplo)
 */
export async function getKeycloakToken() {
  const data = new URLSearchParams();
  data.append("client_id", KEYCLOAK_CLIENT_ID || "");
  data.append("client_secret", KEYCLOAK_CLIENT_SECRET || "");
  data.append("grant_type", "client_credentials");

  const response = await keycloakAuth.post("", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  // Retorna o token (Bearer)
  return response.data.access_token as string;
}
