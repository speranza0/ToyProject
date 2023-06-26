import { MdClose, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function ListItem({ receiptItem }) {
  return (
    <>
      <div className="receipt-list-content">
        <div className="content-num">{"#" + receiptItem.id}</div>
        <div className="price-color">
          {receiptItem.price.toLocaleString() + "원"}
        </div>
        <div className="content-comment">{receiptItem.comment}</div>
        <div className="content-day">
          <div className="content-date">{receiptItem.date}</div>
        </div>
        <Link to='/change?idx=" + index + "' className="modify">
          <MdEdit className="mdi-pencil" />
        </Link>
        <Link to="/delete" data-idx='" + index + "' className="delete">
          <MdClose className="mdi-close" />
        </Link>
      </div>
    </>
  );
}

export default ListItem;
