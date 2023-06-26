import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import "moment/locale/ko";

function Regist({ index, createReceiptList }) {
  const [value, setDate] = useState(new Date());
  const selectDate = moment(value).format("YYYY.MM.DD");

  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (selectDate) => {
    setDate(selectDate);
    setShowCalendar(false);
  };

  const [price, setPrice] = useState();
  const [comment, setComment] = useState();

  const navigate = useNavigate();

  const onPrice = (e) => {
    setPrice(e.target.value);
  };

  const onComment = (e) => {
    setComment(e.target.value);
  };

  const onCreate = () => {
    const addItem = {
      id: index.current,
      price: price,
      comment: comment,
      date: selectDate,
    };

    createReceiptList(addItem);

    navigate("/list");
  };

  const onCancel = () => {
    setDate();
    setPrice();
    setComment();

    navigate("/list");
  };

  return (
    <main className="regist-section">
      <form className="regist-box">
        <div className="page_title">
          영수증 <span className="title_color">등록</span>
        </div>
        <div className="input-box">
          <div>
            <input
              type="text"
              id="datepicker"
              name="date"
              className="date-input"
              autoComplete="off"
              placeholder="날짜 선택"
              value={selectDate}
              onFocus={() => setShowCalendar(true)}
              readOnly
            />
            <Calendar
              className={showCalendar ? "" : "hide"}
              value={value}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="price"
            className="price-input"
            autoComplete="off"
            placeholder="금액"
            onChange={onPrice}
          />
          <textarea
            name="comment"
            className="contents-input"
            placeholder="사용 내역"
            onChange={onComment}
          ></textarea>
        </div>
        <div className="btn-box">
          <button
            type="submit"
            className="register-btn font-aggro"
            onClick={onCreate}
          >
            등록하기
          </button>
          <button
            id="cancel"
            type="button"
            className="cancel-btn font-aggro"
            onClick={onCancel}
          >
            취소
          </button>
        </div>
      </form>
    </main>
  );
}

export default Regist;
