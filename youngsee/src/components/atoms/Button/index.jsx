import cn from 'classnames';
import * as styles from './style';

function Button({ type = 'default', htmlType, children }) {
  return (
    <button
      css={styles.block}
      type={htmlType}
      className={cn({ 'btn-primary': type === 'primary' })}
    >
      {children}
    </button>
  );
}

export default Button;
