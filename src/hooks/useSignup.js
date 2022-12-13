import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!response) {
        throw new Error("Could not complete auth");
      }

      dispatch({ type: "LOGIN", payload: response.user });
      console.log(response.user)
    } catch (err) {
      console.log(err.message);
    }
  };

  return { signup };
};
