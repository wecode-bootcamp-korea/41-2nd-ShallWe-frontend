const BASE_URL = process.env.REACT_APP_BASE_URL;

export const API = {
  LOGIN: `${BASE_URL}/users/kakaoLogin`,
  MYINFO: `${BASE_URL}/myShallWe/userInfo`,
  MYREVIEW: `${BASE_URL}/myShallWe/reviews`,
  CATEGORY: `${BASE_URL}/movies/category`,
  MOVIECART: `${BASE_URL}/myShallWe/pick`,
  KAKAOPAY: `${BASE_URL}/myShallWe/orders/pick`,
  SUBSCRIPTION: `${BASE_URL}/myShallWe/orders/subscription`,
  SUBSCRIBE: `${BASE_URL}/myShallWe/subscriptions`,
  REFUNDS: `${BASE_URL}/myShallWe/refunds/subscription`,
  REFUNDDATA: `${BASE_URL}/myShallWe/refunds`,
};
