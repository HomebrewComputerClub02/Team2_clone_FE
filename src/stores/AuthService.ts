import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface User {
  username: string;
  email: string;
}

interface Token {
  exp: number;
  iat: number;
  sub: string;
}

export interface SignUpProps {
  email: string;
  pw: string;
  name: string;
  year: number;
  month: number;
  day: number;
  gender: string;
}
export interface LoginProps {
  email: string;
  pw: string;
}

class AuthService {
  private BASE_URL = `http://172.30.1.17:8080`;
  private TOKEN_KEY = 'jwtToken';

  public async signup({
    email,
    pw,
    name,
    year,
    month,
    day,
    gender,
  }: SignUpProps): Promise<string> {
    console.log('trying to sign up');
    const response = await axios.post(`${this.BASE_URL}/users/signup`, {
      email: email,
      password: pw,
      nickname: name,
      birth: new Date(year, month, day),
      gender: gender,
    });
    return response.data;
  }

  public async login({ email, pw }: LoginProps): Promise<string> {
    console.log(email, pw);
    const response = await axios.post(`${this.BASE_URL}/users/login`, {
      email: email,
      password: pw,
    });
    const token = response.data.result.jwt;
    console.log('token', token);
    localStorage.setItem(this.TOKEN_KEY, token);
    return token;
  }

  public logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const decoded: Token = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    }
    return false;
  }
}

export default new AuthService();
