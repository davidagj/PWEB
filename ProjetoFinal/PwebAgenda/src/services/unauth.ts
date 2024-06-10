import { app } from "../axios";
import { CreateUser } from "../interfaces/User";
import { SignIn } from "../interfaces/SignIn";

export const register = async (data: CreateUser) => {
  try {
    const res = await app.post('/users', data);
    return res.data;
  } catch (err) {
    return err;
  }
};



export const signIn = async (data: SignIn) => {
  try {
    const res = await app.post('/sign-in', data);
    return res.data;
    }catch (err) {
      return err;
    }
};