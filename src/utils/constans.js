//conectando con endpoints cambiar producción /pruebas
const SERVER_IP = "pt-academy-a160a04dbef3.herokuapp.com";

export const ENV = {
  BASE_PATH: `https://${SERVER_IP}`,
  BASE_API: `https://${SERVER_IP}/api/v1`,
  API_ROUTES: {
    REGISTER: "auth/register",
    LOGIN: "auth/login",
    REFRESH_ACCESS_TOKEN: "auth/refresh_access_token",
    USER_ME: "user/me",
    USER: "user",
    USERS: "users",
    MENU: "menu",
    COURSE: "course",
    NEWSLETTER: "newsletter",
    POST: "post",
  },

  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
