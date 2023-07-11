import Button from 'src/components/atoms/Button';
import * as styles from './style';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import dayjs from 'dayjs';

import * as receiptService from 'src/service/receipt';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import useSessionState from "src/store/sessionState";

const schema = yup.object({
  day: yup.date().required("날짜를 입력해주세요."),
  price: yup
    .number()
    .required("가격을 입력해주세요.")
    .typeError("가격은 숫자만 입력해주세요."),
  comment: yup.string().required("사용 내역을 입력해주세요."),
});

function EditPage() {
  const queryClient = useQueryClient();

  const params = useParams();

  const { data: receipt } = useQuery({
    queryKey: receiptService.findOneQueryKey(params.idx),
    queryFn: () => receiptService.findOne(params.idx),
    enabled: !!params.idx,
  });

  const { admin } = useSessionState();

  const navigate = useNavigate();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const formId = "regist-form";

  const onSubmit = async (data) => {
    let idx = params.idx;
    if (params.idx) {
      await receiptService.update(params.idx, data);

      alert("수정 되었습니다.");
    } else {
      const result = await receiptService.create({
        ...data,
        day: dayjs(data.day).add(9, "hour"),
      });
      idx = result.id;
      alert("등록 되었습니다.");
    }

    await queryClient.invalidateQueries(receiptService.findOneQueryKey(idx));
    await queryClient.invalidateQueries(receiptService.findAllQueryKey);

    navigate("/list");
  };

  const onCancel = () => {
    navigate("/list");
  };

  const onError = (error) => {
    const errorKey = Object.keys(error);
    for (const key of errorKey) {
      alert(error[key].message);
      break;
    }
  };

  useEffect(() => {
    if (!receipt) return;
    reset(receipt);
  }, [receipt]);

  if (params.idx && !receipt) return;

  return (
    <div css={styles.block}>
      <form id={formId} onSubmit={handleSubmit(onSubmit, onError)}>
        <div css={styles.title}>
          영수증 <span>{params.idx ? "수정" : "등록"}</span>
        </div>
        <div css={styles.form}>
          <div className="form-item">
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <input
                  className="input input-date"
                  type="date"
                  autoComplete="off"
                  placeholder="날짜 선택"
                  {...field}
                  value={field.value && dayjs(field.value).format("YYYY-MM-DD")}
                />
              )}
            />
          </div>
          <div className="form-item">
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  className="input input-text"
                  type="text"
                  autoComplete="off"
                  placeholder="금액"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-item">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <textarea
                  className="input input-textarea"
                  placeholder="사용 내역"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div css={styles.action}>
          <Button type="primary" htmlType="submit">
            {params.idx ? "수정" : "등록"}하기
          </Button>
          <Button htmlType="button">취소</Button>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
