import { Outlet } from "react-router-dom";
import * as styles from "./style";

import IconWrite from "src/assets/images/icon-write.png";
import RouteLink from "src/core/RouteLink";

function AppLayout() {
  return (
    <div css={styles.block}>
      <div css={styles.container}>
        <header css={styles.header}>
          <RouteLink className="header-btn" to="/list">
            영수증 목록
          </RouteLink>
          <RouteLink className="header-btn" to="/calculate">
            정산하기
          </RouteLink>
          <RouteLink className="header-btn header-btn-small" to="/edit">
            <img src={IconWrite} alt="" />
          </RouteLink>
        </header>
        <main css={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
