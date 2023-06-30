import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import "moment/locale/ko";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useInput } from "../hooks/control";
import { useAppState } from "../hooks/state";

function Modify() {
  const {findReceiptItem, modifyReceiptItem} = useAppState();

  const [price, onChangePrice, resetPrice, setPrice] = useInput('');
  const [comment, onChangeComment, resetComment, setComment] = useInput('');

  const [date, setDate] = useState(new Date());
  const momentDate = moment(date).format("YYYY.MM.DD");

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
    setPrice(itemOne.price);
    setComment(itemOne.comment);
  }, [itemOne]);

  const navigate = useNavigate();

  const onUpdate = () => {
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
    resetPrice();
    resetComment();

    navigate("/list");
  };

  if (!itemOne) {
    return;
  }

  return (
    <main className="regist-section">
      <form className="regist-box">
        <div className="page_title">
          영수증 <span className="title_color">수정 #{itemOne.id}</span>
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
            value={price}
            onChange={onChangePrice}
          />
          <textarea
            name="comment"
            className="contents-input"
            placeholder="사용 내역"
            onChange={onChangeComment}
            value={comment}
          />
        </div>
        <div className="btn-box">
          <button
            type="button"
            className="register-btn font-aggro"
            onClick={onUpdate}
          >
            수정하기
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
