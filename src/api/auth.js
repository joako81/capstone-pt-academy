import { ENV } from "../utils";
import jwt_Decode from "jwt-decode";

export class Auth {
  baseApi = ENV.BASE_API;

  async register(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
  async login(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      this.setAccessToken(result.accessToken);
      this.setRefreshToken(result.refreshToken);

      return result;
    } catch (error) {
      throw error;
    }
  }

  async refreshAccesToken(refreshToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.REFRESH_ACCESS_TOKEN}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  setAccessToken(token) {
    localStorage.setItem(ENV.JWT.ACCESS, token);
  }

  getAccesToken() {
    return localStorage.getItem(ENV.JWT.ACCESS);
  }

  setRefreshToken(token) {
    localStorage.setItem(ENV.JWT.REFRESH, token);
  }

  getRefreshToken() {
    return localStorage.getItem(ENV.JWT.REFRESH);
  }

  removeTokens() {
    localStorage.removeItem(ENV.JWT.ACCESS);
    localStorage.removeItem(ENV.JWT.REFRESH);
  }

  async checkAccessToken() {
    const accessToken = this.getAccesToken();

    if (this.hasExpiredToken(accessToken)) {
      const refreshToken = this.getRefreshToken();
      const result = await this.refreshAccesToken(refreshToken);

      // Almacenar el nuevo token de acceso
      this.setAccessToken(result.accessToken);
    }
  }

  logout() {
    this.removeTokens();
  }

  hasExpiredToken(token) {
    const { exp } = jwt_Decode(token);
    const currentDate = new Date().getTime();

    if (exp <= currentDate) {
      return true;
    }

    return false;
  }
}
