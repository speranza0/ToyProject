import { atom, useRecoilState } from "recoil";

const sessionState = atom<SessionProps>({
  key: "session-state",
  default: {
    admin: undefined,
  },
});

interface SessionProps {
  admin?: any;
}

export interface AdminProps {
  id: number;
  username: string;
}

function useSessionState() {
  const [{ admin }, setState] = useRecoilState(sessionState);

  const loginAdmin = (admin: AdminProps) => {
    setState((prev) => ({ ...prev, admin }));
  };

  return { admin, loginAdmin };
}

export default useSessionState;
