import React, { useEffect, useMemo, useState } from "react";
import { useSelect } from "../hooks/control";
import { useAppState } from "../hooks/state";
import moment from "moment/moment";

function Calculate() {
  const { calculatefliterList } = useAppState();

  const [today, setToday] = useState(new Date());
  
  // const todayYear = momentToday.substring(0, 4);
  const todayYear = moment(today).format('YYYY');
  const todayMonth = moment(today).format('MM');
  // const todayMonth = momentToday.substring(5, 7);

  const [year, onChangeYear] = useSelect(todayYear);
  const [month, onChangeMonth] = useSelect(todayMonth);

  const [totalPrice, setTotalPrice] = useState();
  const [totalCount, setTotalCount] = useState();
  const [dividePrice, setDividePrice] = useState();

  useEffect(() => {
    const list = calculatefliterList(year, month);
    setTotalPrice(list.sumPrice);
    setTotalCount(list.sumCount);
    setDividePrice(list.calPrice);
  }, [year, month]);

  return (
    <main className="result-section">
      <div className="calculate-box">
        <div className="page_title">
          <span className="selected">{year}년 </span>
          <span className="selected">{month}월 </span>
          <span className="title_color">정산내역</span>
        </div>
        <div className="select-box">
          <select
            id="year"
            className="year-select"
            name="year"
            value={year}
            onChange={onChangeYear}
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
          <select
            id="month"
            className="month-select"
            name="month"
            value={month}
            onChange={onChangeMonth}
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
        </div>
        {
          totalPrice !== undefined && totalCount !== undefined && dividePrice !== undefined &&
          <>
          <div className="res-box">
            <div>합계</div>
            <div className="sum">{parseInt(totalPrice).toLocaleString()} 원</div>
          </div>  
          <div className="res-box">
            <div>총 건수</div>
            <div className="count">{totalCount} 건</div>
          </div>
          <div className="res-box">
            <div>정산금액</div>
            <div className="calculate-pirce">
              {parseInt(dividePrice).toLocaleString()} 원
            </div>
          </div>
          </>
        }
      </div>
    </main>
  );
}

export default Calculate;
