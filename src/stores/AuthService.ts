import { Cookie } from '@mui/icons-material';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Cookies } from 'react-cookie';
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
  private BASE_URL = `http://172.30.1.43:8080`;
  private TOKEN_KEY = 'jwtToken';
  public cookie = new Cookies();
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
    const response = await axios.post(`${this.BASE_URL}/auth/signup`, {
      email: email,
      password: pw,
      nickname: name,
      birth: new Date(year, month, day),
      gender: gender,
    });
    return response.data;
  }

  public async login({ email, pw }: LoginProps) {
    axios
      .post(
        'http://172.30.1.43:8080/auth/login',
        { email, password: pw },
        { withCredentials: true },
      )
      .then((res: any) => {
        //리프레시 토큰을 쿠키에 담아두긴 했는데 어떻게 쓰는 지 모르겠음
        console.log('cookie : ', this.cookie.get('RefreshToken'));
        console.log(res.headers.get('Authorization'));
        console.log(res.headers.get('Refresh'));
        //let [cookie] = res.headers["set-cookie"];
        //console.log(cookie);
        localStorage.clear();
        const accessJwt = res.headers.get('Authorization');
        const refreshJwt = res.headers.get('Refresh');
        console.log('By Login Access:' + accessJwt);
        console.log('By Login Refresh:' + refreshJwt);
        localStorage.setItem('token', accessJwt);
        //도메인 달라지면 쿠키 사용 불가능하니 일단 그냥 로컬스토리지에도 저장
        localStorage.setItem('refresh', refreshJwt);
      });
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
