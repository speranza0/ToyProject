import { Global, css } from '@emotion/react';
import { Route, Routes } from 'react-router';
import AppLayout from './components/layout/AppLayout';
import ListPage from './pages/list';
import { reset } from './library/emotion';
import EditPage from './pages/edit';
import CalculatePage from './pages/calculate';
import AuthPage from './pages/auth';
import AuthLayout from './components/layout/AuthLayout';
import AuthGuard from './core/Session/AuthGuard';
import UserGuard from './core/Session/UserGuard';

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ko";
import { useEffect } from "react";
import * as loginService from "./service/login";
import useSessionState from "./store/sessionState";

dayjs.extend(timezone);
dayjs.locale("ko");
dayjs.tz.setDefault("Asia/Seoul");

function App() {
  const { loginAdmin } = useSessionState();

  const getSession = async () => {
    const session = await loginService.session();
    loginAdmin(session);
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route element={<AuthGuard />}>
            <Route index element={<AuthPage />} />
          </Route>
        </Route>
        <Route path="/" element={<UserGuard />}>
          <Route element={<AppLayout />}>
            <Route path="/list" element={<ListPage />} />
            <Route path="/edit">
              <Route path=":idx" element={<EditPage />}></Route>
              <Route index element={<EditPage />}></Route>
            </Route>
            <Route path="/calculate" element={<CalculatePage />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404!</div>} />
      </Routes>
    </>
  );
}

export default App;
