import React from "react";
import style from "./style.module.scss";
import "../../styles/typography.scss";
import "../../styles/button.scss";

const TransactionItem = ({ transaction, onDelete }) => {
  const { description, amount, type } = transaction;

  return (
    <div className={style.container}>
      <div className={style.div}>
        <li className={style.li}>
          <div className={style.description}>
            <p>{description}</p>
            <p>{type}</p>
          </div>
          <div className={style.result}>
            <p>R$ {Math.abs(amount)}</p>
            <button className="button" onClick={() => onDelete(transaction.id)}>
              Excluir
            </button>
          </div>
        </li>
      </div>
    </div>
  );
};

export default TransactionItem;
