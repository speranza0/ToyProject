import { useEffect, useState } from "react";
import * as styles from "./style";
import {
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";
import dayjs from "dayjs";

import * as receiptService from "src/service/receipt";
import { CalculateRequest } from "src/service/model/CalculateRequest";

function CalculatePage() {
  const [result, setResult] = useState({
    sumPrice: 0,
    sumCount: 0,
    calPrice: 0,
  });

  const { control, handleSubmit, reset } = useForm<CalculateRequest>();

  const [displayText, setDisplayText] = useState<string>();

  const onSubmit: SubmitHandler<CalculateRequest> = (data) => {
    if (!data.year || !data.month) {
      return;
    }

    setDisplayText(`${data.year}년 ${data.month}월`);
    calculateReceipts(data);
  };

  const onError: SubmitErrorHandler<CalculateRequest> = (error) => {
    const errorKey = Object.keys(error) as ["year", "month"];
    for (const key of errorKey) {
      alert(error[key]?.message);
      break;
    }
  };

  const calculateReceipts = async ({ year, month }: CalculateRequest) => {
    const { sum, count } = await receiptService.calculate({ year, month });
    setResult({
      sumPrice: sum,
      sumCount: count,
      calPrice: Math.round(sum / 3),
    });
  };

  useEffect(() => {
    const today = dayjs();
    const year = today.format("YYYY");
    const month = today.format("MM");
    reset({ year, month });
    setDisplayText(`${year}년 ${month}월`);
    calculateReceipts({ year, month });
  }, []);

  if (!displayText) return;

  return (
    <div css={styles.block}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="calculate-box" css={styles.calculate}>
          <div className="title">
            <span className="selected">{displayText}</span>
            <span className="title-color"> 정산내역</span>
          </div>
          <div className="select-box">
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <select
                  className="year-select"
                  {...field}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    handleSubmit(onSubmit, onError)();
                  }}
                >
                  <option value="">연도 선택</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              )}
            />
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <select
                  className="month-select"
                  {...field}
                  onChange={(event) => {
                    field.onChange(event.target.value);
                    handleSubmit(onSubmit, onError)();
                  }}
                >
                  <option value="">월 선택</option>
                  <option value="01">1월</option>
                  <option value="02">2월</option>
                  <option value="03">3월</option>
                  <option value="04">4월</option>
                  <option value="05">5월</option>
                  <option value="06">6월</option>
                  <option value="07">7월</option>
                  <option value="08">8월</option>
                  <option value="09">9월</option>
                  <option value="10">10월</option>
                  <option value="11">11월</option>
                  <option value="12">12월</option>
                </select>
              )}
            />
          </div>
          <div className="result">
            <div>합계</div>
            <div>{result.sumPrice} 원</div>
          </div>
          <div className="result">
            <div>총 건수</div>
            <div>{result.sumCount} 건</div>
          </div>
          <div className="result">
            <div>정산금액</div>
            <div>{result.calPrice} 원</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CalculatePage;
