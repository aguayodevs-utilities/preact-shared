// src/hooks/useUserSession.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../interfaces/interface.user';
import { appUrls } from '../constants/appUrls';

export const useUserSession = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get(`${appUrls.getBase({environment: process.env.NODE_ENV||undefined})}/sso/session`, { withCredentials: true }).then(res => {
      setUser(res.data.user);
    });
  }, []);

  const logout = () => {
    window.location.href = '/sso/session/logout';
  };

  return { user, logout };
};
