import { IAuthContext } from "@ui/types/data"
import { createContext, Context } from "react";

export const AuthContext: Context<IAuthContext> = createContext({} as IAuthContext);
