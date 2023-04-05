import { createContext } from "react";
import { useCookies } from "react-cookie";

const [Cookies,SetCookie] = useCookies();
const token = Cookies['fox_token'];

export const AuthContext = createContext();
