import { Outlet } from 'react-router';
import * as styles from './style';

function AuthLayout() {
  return (
    <div css={styles.block}>
      <div css={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
