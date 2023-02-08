const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API = {
  LOGIN: `${BASE_URL}/users/kakaoLogin`,
  MYINFO: `${BASE_URL}/myShallWe/userInfo`,
  MYREVIEW: `${BASE_URL}/myShallWe/reviews`,
};
