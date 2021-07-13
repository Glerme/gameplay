import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const { SCOPE } = process.env;
const { CDN_IMAGE } = process.env;
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

import { COLLECTION_APPOINTMENT, COLLECTION_USER } from "../configs/database";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";

import { api } from "../services/api";

interface IUser {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: IUser;
  singIn: () => Promise<void>;
  singOut: () => Promise<void>;
  loading: boolean;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string;
    error?: string;
  };
};

type Children = { children: ReactNode };

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(false);

  const singIn = async () => {
    try {
      setLoading(true);

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success" && !params.error) {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const firstName = userInfo.data.username.split(" ")[0];

        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token,
        };

        await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

        setUser(userData);
      }
    } catch (error) {
      throw new Error("Não foi possível autenticar");
    } finally {
      setLoading(false);
    }
  };

  const singOut = useCallback(async () => {
    setUser({} as IUser);

    await AsyncStorage.removeItem(COLLECTION_USER);
  }, []);

  const loadUserStorageData = useCallback(async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USER);

    if (storage) {
      const userLogged = JSON.parse(storage);

      api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }, []);

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, singIn, loading, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
