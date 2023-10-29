import jwt_Decode from "jwt-decode";

export const hasExpiredToken = (token) => {
  const { exp } = jwt_Decode(token);
  const currenData = new Date().getTime();

  if (exp <= currenData) {
    return true;
  }

  return false;
};
