import React from 'react';
import TransactionItem from '../transactionItem/TransactionItens';
import style from './style.module.scss'
import '../../styles/typography.scss'

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className={style.container}>
      {transactions.length > 0 ? (
        <ul className={style.ul}>
          <p>Resumo financeiro</p>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDeleteTransaction} />
          ))}
        </ul>
      ) : (
        <p className='titulo3'>Nenhuma transação encontrada.</p>
      )}
    </div>
  );
};

export default TransactionList;
