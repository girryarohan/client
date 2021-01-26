import axios from "axios";

// save cart in db
export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

// get cart from db
export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

// remove cart from db
export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

// save address to db
export const saveUserAddress = async (authtoken, address) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/address`,
    { address },
    {
      headers: {
        authtoken,
      },
    }
  );
