import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import useSessionState from "src/store/sessionState";

function AuthGuard() {
  const { admin } = useSessionState();
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      navigate("/list");
    }
  }, [admin]);

  return <>{!admin && <Outlet />}</>;
}

export default AuthGuard;
