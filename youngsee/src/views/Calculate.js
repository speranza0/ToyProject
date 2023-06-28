import React, { useEffect, useState } from "react";

function Calculate({ calculatefliterList }) {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [filterList, setFilterList] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalCount, setTotalCounte] = useState();
  const [dividePrice, setDividePrice] = useState();

  useEffect(() => {
    const list = calculatefliterList(year, month);

    setFilterList(list);
  }, [year, month]);

  useEffect(() => {
    sumPrice();
    sumCount();
  }, [filterList]);

  useEffect(() => {
    calPrice();
  }, [totalPrice]);

  const sumPrice = () => {
    let result = 0;
    for (let i = 0; i < filterList.length; i++) {
      result += parseInt(filterList[i].price);
    }
    setTotalPrice(result);
  };

  const sumCount = () => {
    let result = filterList.length;
    setTotalCounte(result);
  };

  const calPrice = () => {
    let result = parseInt(totalPrice) / 3;
    setDividePrice(Math.round(result));
  };

  const onYear = (e) => {
    setYear(e.target.value);
  };

  const onMonth = (e) => {
    setMonth(e.target.value);
  };

  return (
    <main className="result-section">
      <div className="calculate-box">
        <div className="page_title">
          <span className="selected">{month}</span>월
          <span className="title_color">정산내역</span>
        </div>
        <div className="select-box">
          <select
            id="year"
            className="year-select"
            name="year"
            onChange={onYear}
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
            onChange={onMonth}
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
      </div>
    </main>
  );
}

export default Calculate;
