import React from "react";

function Calculate() {
  return (
    <main className="result-section">
      <div className="calculate-box">
        <div className="page_title">
          <span className="selected">3</span>월
          <span className="title_color">정산내역</span>
        </div>
        <div className="select-box">
          <select id="year" className="year-select" name="yy">
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
          <select id="month" className="month-select" name="mm">
            <option value="">월 선택</option>
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
        </div>
        <div className="res-box">
          <div>합계</div>
          <div className="sum">0 원</div>
        </div>
        <div className="res-box">
          <div>총 건수</div>
          <div className="count">0 건</div>
        </div>
        <div className="res-box">
          <div>정산금액</div>
          <div className="calculate-pirce">0 원</div>
        </div>
      </div>
    </main>
  );
}

export default Calculate;
