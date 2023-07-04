import { atom, useRecoilState } from 'recoil';

const sessionState = atom({
  key: 'session-state',
  default: {
    admin: undefined,
  },
});

function useSessionState() {
  const [{ admin }, setState] = useRecoilState(sessionState);

  const loginAdmin = (admin) => {
    setState((prev) => ({ ...prev, admin }));
  };

  return { admin, loginAdmin };
}

export default useSessionState;
