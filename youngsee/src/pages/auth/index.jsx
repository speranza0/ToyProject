import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import ImageLogo from 'src/assets/images/image-logo.png';

import * as styles from './style';
import Button from 'src/components/atoms/Button';
import { Controller, useForm } from 'react-hook-form';

import * as loginService from 'src/service/login';
import useSessionState from 'src/store/sessionState';
import { useNavigate } from 'react-router';

const schema = yup.object({
  id: yup.string().required("아이디를 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});

function AuthPage() {
  const { loginAdmin } = useSessionState();

  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const formId = "auth-form";

  const onSubmit = async (data) => {
    try {
      const user = await loginService.login({
        username: data.id,
        password: data.password,
      });
      loginAdmin(user);
      navigate("/list");
    } catch (error) {
      const message = error.response.data.message;
      alert(message);
    }
  };

  const onError = (error) => {
    const errorKey = Object.keys(error);
    for (const key of errorKey) {
      alert(error[key].message);
      break;
    }
  };

  return (
    <div css={styles.block}>
      <div css={styles.logo}>
        <div className="logo-icon">
          <img src={ImageLogo} alt="" />
        </div>
        <div className="logo-text">
          영수증 써봐
          <br />
          대신 관리해드림
        </div>
      </div>
      <div css={styles.form}>
        <form id={formId} onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-item">
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <input type="text" placeholder="아이디 입력" {...field} />
              )}
            />
          </div>
          <div className="form-item">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-item form-action">
            <Button htmlType="submit">로그인</Button>
          </div>
        </form>
      </div>
      <div css={styles.copyright}>
        <p>Copyright All rights reserved</p>
      </div>
    </div>
  );
}

export default AuthPage;
