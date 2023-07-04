import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import useSessionState from 'src/store/sessionState';

function UserGuard() {
  const { admin } = useSessionState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate('/auth');
    }
  }, [admin]);

  return <>{admin && <Outlet />}</>;
}

export default UserGuard;
