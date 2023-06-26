import { MdClose, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function ListItem({ todoItem }) {
  return (
    <>
      <div className="receipt-list-content">
        <div className="content-num">{"#" + todoItem.id}</div>
        <div className="price-color">
          {todoItem.price.toLocaleString() + "원"}
        </div>
        <div className="content-comment">{todoItem.comment}</div>
        <div className="content-day">
          <div className="content-date">{todoItem.date}</div>
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
