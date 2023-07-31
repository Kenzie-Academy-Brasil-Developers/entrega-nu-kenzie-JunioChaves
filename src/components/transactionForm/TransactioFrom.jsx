import React, { useState } from 'react';
import style from './style.module.scss'
import '../../styles/global.scss'

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');

  const handleAddTransaction = () => {
    if (description.trim() === '' || isNaN(amount)) {
      alert('Por favor, preencha a descrição e o valor corretamente.');
      return;
    }

    onAddTransaction({
      description,
      amount: transactionType === 'income' ? parseFloat(amount) : -parseFloat(amount),
      type: transactionType,
    });

    setDescription('');
    setAmount('');
  };

  return (
    <form className={style.container} onSubmit={(e) => e.preventDefault()}>
      <label>
        Descrição:
        <input className={style.input} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <span className={style.span}>Ex: Compra de roupas</span>
      </label>
      <label>
        Valor:
        <input className={style.input} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Tipo:
        <select className={style.select} value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="income">Entrada</option>
          <option value="expense">Saída</option>
        </select>
      </label>
      <button className={style.button} onClick={handleAddTransaction}>Inserir valor</button>
    </form>
  );
};

export default TransactionForm;
