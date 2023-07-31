import React from "react";
import style from "./style.module.scss";
import "../../styles/typography.scss";
import '../../styles/button.scss'

const TransactionItem = ({ transaction, onDelete }) => {
  const { description, amount} = transaction;

  return (
    <div className={style.container}>
      <div className={style.div}>
        <li className={style.li}>
          {description} - R$ {Math.abs(amount)}
          <div>
          <button
            className="button" 
            onClick={() => onDelete(transaction.id)}>
            Excluir
          </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default TransactionItem;
