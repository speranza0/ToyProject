import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/ko";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {ko} from 'date-fns/esm/locale';
import { useInput } from "../hooks/control";
import { useAppState } from "../hooks/state";

function Regist() {
  const { createReceipt } = useAppState();

  const [price, onChangePrice, resetPrice] = useInput('');
  const [comment, onChangeComment, resetComment] = useInput('');

  const [date, setDate] = useState(new Date());
  const momentDate = moment(date).format("YYYY.MM.DD");

  const navigate = useNavigate();

  const onCreate = () => {

    const addItem = {
      price: price,
      comment: comment,
      date: momentDate,
    };

    createReceipt(addItem);

    navigate("/list");
  };

  const onCancel = () => {
    setDate();
    resetPrice();
    resetComment();

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
            <DatePicker
              locale={ko}
              dateFormat='yyyy-MM-dd'
              className='date-input'
              value={momentDate}
              onChange={(date) => setDate(date)}/>
          </div>
          <input
            type="text"
            name="price"
            className="price-input"
            autoComplete="off"
            placeholder="금액"
            onChange={onChangePrice}
          />
          <textarea
            name="comment"
            className="contents-input"
            placeholder="사용 내역"
            onChange={onChangeComment}
          ></textarea>
        </div>
        <div className="btn-box">
          <button
            type="button"
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
