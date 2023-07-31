import React from 'react';
import style from './style.module.scss'
import '../../styles/typography.scss'

const TransactionValue = ({total}) => {
  return (
    <div className={style.container}>
      <div className={style.valor}>
        <p>Valor total:</p>
        <div>
          <p className="titulo3">
            {total >= 0 ? `R$ ${total}` : `- R$ ${Math.abs(total)}`}
          </p>
        </div>
      </div>
      <div>
        <p className="titulo4">O valor se refere ao saldo</p>
      </div>
    </div>
  );
};

export default TransactionValue


