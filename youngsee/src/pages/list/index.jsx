import * as styles from './style';
import RouteLink from 'src/core/RouteLink';
import dayjs from 'dayjs';

import { MdEdit, MdClose } from 'react-icons/md';
import { useMemo } from 'react';

import ImageLogo from 'src/assets/images/image-logo.png';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as receiptService from 'src/service/receipt';

function ListPage() {
  const queryClient = useQueryClient();

  const { data: receipts } = useQuery({
    queryKey: receiptService.findAllQueryKey,
    queryFn: receiptService.findAll,
  });

  // const sortReceipts = useMemo(() => {
  //   if (!receipts) return [];
  //   const list = [...receipts];
  //   return list.sort((a, b) => {
  //     if (a.id > b.id) return -1;
  //     return 0;
  //   });
  // }, [receipts]);
  // console.log(sortReceipts);

  const onRemove = async (idx) => {
    const result = window.confirm("삭제 하시겠습니까?");
    if (result) {
      await receiptService.remove(idx);
      await queryClient.invalidateQueries(receiptService.findOneQueryKey(idx));
      await queryClient.invalidateQueries(receiptService.findAllQueryKey);

      //removeReceipt(idx);
      alert("삭제완료됐습니다.");
    }
  };

  if (!receipts) return;

  return (
    <div css={styles.block}>
      {receipts.length !== 0 && (
        <div css={styles.receiptList}>
          {receipts.map((receipt, index) => (
            <div css={styles.receiptItem} key={index}>
              <div className="receipt-idx">#{receipt.id}</div>
              <div className="receipt-price">{receipt.price}</div>
              <div className="receipt-comment">{receipt.comment}</div>
              <div className="receipt-day">
                {dayjs(receipt.day).format("YYYY.MM.DD")}
              </div>
              <div className="receipt-action">
                <RouteLink className="receipt-edit" to={`/edit/${receipt.id}`}>
                  <MdEdit />
                </RouteLink>
                <div
                  className="receipt-remove"
                  onClick={() => onRemove(receipt.id)}
                >
                  <MdClose />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {receipts.length === 0 && (
        <div css={styles.blank}>
          <img src={ImageLogo} alt="" />
          <p>영수증 써봐</p>
        </div>
      )}
    </div>
  );
}

export default ListPage;
