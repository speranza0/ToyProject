import React from "react";

function Regist() {
  return (
    <main className="regist-section">
      <form className="regist-box">
        <div className="page_title">
          영수증 <span className="title_color">등록</span>
        </div>
        <div className="input-box">
          <input
            type="text"
            id="datepicker"
            name="day"
            className="date-input"
            autocomplete="off"
            placeholder="날짜 선택"
            readonly
          />
          <input
            type="text"
            name="price"
            className="price-input"
            autocomplete="off"
            placeholder="금액"
          />
          <textarea
            name="comment"
            className="contents-input"
            placeholder="사용 내역"
          ></textarea>
        </div>
        <div className="btn-box">
          <button type="submit" className="register-btn font-aggro">
            등록하기
          </button>
          <button id="cancel" type="button" className="cancel-btn font-aggro">
            취소
          </button>
        </div>
      </form>
    </main>
  );
}

export default Regist;
