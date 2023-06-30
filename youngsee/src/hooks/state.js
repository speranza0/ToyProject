import { useRecoilState } from "recoil";
import { indexState, receiptListState } from "../store/appState";
import { useNavigate } from "react-router-dom";

export function useAppState() {
  const [index, setIndex] = useRecoilState(indexState);

  const [receiptList, setReceiptList] = useRecoilState(receiptListState);
  const navigate = useNavigate();

  const createReceipt = (receiptItem) => {
    const newReceiptList = [...receiptList, {...receiptItem, id: index}];

    setReceiptList(newReceiptList);
    setIndex(index + 1);
  };

  const findReceiptItem = (receiptItemId) => {
    return receiptList.find((receiptItem) => receiptItem.id === receiptItemId);
  };

  const modifyReceiptItem = (item) => {
    const newReceiptList = receiptList.map((receiptItem) => {
      if (receiptItem.id !== item.id) {
        return receiptItem;
      }
      return item;
    });
    setReceiptList(newReceiptList);
  };

  const onRemove = (receiptItemId) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      return;
    }
    setReceiptList(
      receiptList.filter((receiptItem) => receiptItem.id !== receiptItemId)
    );
    navigate("/list");
  };

  const calculatefliterList = (year, month) => {
    if(!year || !month) {
      return [];
    }

    let filterDate = `${year}.${month}`;

    const newReceiptList = receiptList.filter((receiptItem) =>
      receiptItem.date.substring(0, 7).includes(filterDate)
    );

    let sumPrice = 0;
    for (let i = 0; i < newReceiptList.length; i++) {
      sumPrice += parseInt(newReceiptList[i].price);
    }
  
    let sumCount = newReceiptList.length;

    let calPrice = Math.round(parseInt(sumPrice) / 3);

    return { sumPrice, sumCount, calPrice };
  };

  return {
    index,
    receiptList,
    createReceipt,
    findReceiptItem,
    modifyReceiptItem,
    onRemove,
    calculatefliterList,
  };
}