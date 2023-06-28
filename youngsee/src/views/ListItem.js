import { MdClose, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function ListItem({ id, price, comment, date, onRemove }) {

  const onDelete = () => {
    let deleteId = parseInt(id);
    onRemove(deleteId);
  }

  return (
    <>
      <div className="receipt-list-content">
        <div className="content-num">{"#" + id}</div>
        <div className="price-color">{parseInt(price).toLocaleString()}원</div>
        <div className="content-comment">{comment}</div>
        <div className="content-day">
          <div className="content-date">{date}</div>
        </div>
        <Link to={`/modify/${id}`} className="modify">
          <MdEdit className="mdi-pencil" />
        </Link>
        <a className="remove" onClick={onDelete}>
          <MdClose className="mdi-close" />
        </a>
      </div>
    </>
  );
}

export default ListItem;
;