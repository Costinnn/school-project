import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (!response) {
        throw new Error("Could not complete auth");
      }

      dispatch({ type: "LOGIN", payload: response.user });
      console.log(response.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return { login };
};
