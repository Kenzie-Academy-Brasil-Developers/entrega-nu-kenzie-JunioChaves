import React, { useState } from 'react';
import TransactionForm from './components/transactionForm/TransactioFrom';
import TransactionList from './components/transactionList/TransactionList';
import {Header} from './components/header/Header';
import TransactionValue from './components/transactionValue/TransactionValue';
import './styles/App.css'
import './styles/grid.scss'
import './styles/global.scss'

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    const transactionWithId = {
      ...newTransaction,
      id: crypto.randomUUID(),
    };
    setTransactions([...transactions, transactionWithId]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const total = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
  }, 0);
  return (
    <>
      <Header />
      <main>
        <div>
          <TransactionForm onAddTransaction={addTransaction} />
          <TransactionValue total={total} />
        </div>
        <div>
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </main>
    </>
  );
};

export default App
