import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import "moment/locale/ko";

function Modify({ type, findReceiptItem, modifyReceiptItem }) {
  const [date, setDate] = useState(new Date());
  const momentDate = moment(date).format("YYYY.MM.DD");

  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (date) => {
    setDate(date);
    setShowCalendar(false);
  };

  const { receiptItemId } = useParams();
  const [itemOne, setItemOne] = useState({});

  useEffect(() => {
    let id = parseInt(receiptItemId);
    let item = findReceiptItem(id);

    setItemOne(item);
  }, []);

  useEffect(() => {
    if (!itemOne) {
      return;
    }
    setDate(itemOne.date);
    setComment(itemOne.comment);
    setPrice(itemOne.price);
  }, [itemOne]);

  const [price, setPrice] = useState();
  const [comment, setComment] = useState();

  const navigate = useNavigate();

  const onPrice = (e) => {
    setPrice(e.target.value);
  };

  const onComment = (e) => {
    setComment(e.target.value);
  };

  const onUpdate = (e) => {
    e.preventDefault();

    const item = {
      id: parseInt(receiptItemId),
      price,
      comment,
      date: momentDate,
    };

    modifyReceiptItem(item);
    navigate("/list");
  };

  const onCancel = () => {
    setDate();
    setPrice();
    setComment();

    navigate("/list");
  };

  if (!itemOne) {
    return;
  }

  return (
    <main className="regist-section">
      <form className="regist-box">
        <div className="page_title">
          영수증
          <span className="title_color">
            {type} #{itemOne.id}
          </span>
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
              value={momentDate}
              onFocus={() => setShowCalendar(true)}
              readOnly
            />
            <Calendar
              className={showCalendar ? "" : "hide"}
              value={date}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="price"
            className="price-input"
            autoComplete="off"
            placeholder="금액"
            value={price}
            onChange={onPrice}
          />
          <textarea
            name="comment"
            className="contents-input"
            placeholder="사용 내역"
            onChange={onComment}
            value={comment}
          />
        </div>
        <div className="btn-box">
          <button
            type="submit"
            className="register-btn font-aggro"
            onClick={onUpdate}
          >
            {type}하기
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

export default Modify;
