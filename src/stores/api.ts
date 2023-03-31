import axios from 'axios';

export const BASE_URL = `http://1.239.183.179:9876`;

export interface LoginProps {
  email: string;
  password: string;
}

export const loginUser = async ({ email, password }: LoginProps) => {
  try {
    // Make a request to the server to authenticate the user's credentials
    const response: any = await axios({
      method: 'post',
      url: `${BASE_URL}/users/login`,
      data: {
        email,
        password,
      },
    });

    // Extract the JWT token from the response
    const token = response.data.token;

    // Save the token in local storage
    localStorage.setItem('token', token);

    // Return the user's information and token
    return { user: response.data.user, token };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export interface SignUpProps {
  email: string;
  pw: string;
  name: string;
  year: number;
  month: number;
  day: number;
  gender: string;
}
export const SignUp = async (data: SignUpProps) => {
  const response: any = await axios({
    method: 'post',
    url: `${BASE_URL}/users/signup`,
    data: {
      email: data.email,
      password: data.pw,
      nickname: data.name,
      birth: new Date(data.year, data.month, data.day),
      gender: data.gender,
    },
  });
  localStorage.setItem('token', response.data.token);
  return response.data.user;
};
