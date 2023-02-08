const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API = {
  LOGIN: `${BASE_URL}/users/kakaoLogin`,
  MYINFO: `${BASE_URL}/myShallWe/userInfo`,
  MYREVIEW: `${BASE_URL}/myShallWe/reviews`,
  CATEGORY: `${BASE_URL}/movies/category`,
  SUBSCRIPTION: `${BASE_URL}/myShallWe/orders/subscription`,
};
