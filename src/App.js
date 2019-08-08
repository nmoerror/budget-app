import React, { Fragment, useState, useEffect } from 'react';
import Wallet from './components/Wallet';
import Records from './components/Records';
import Add from './components/Add';

function App() {
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('inc');
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (description && amount) {
      if (type === 'inc') {
        setTotal(total + parseInt(amount));
        const newIncome = {
          description,
          amount,
          date: Date.now()
        };
        setIncomes([...incomes, newIncome]);
      } else {
        setTotal(total + parseInt(-amount));
        const newExpense = {
          description,
          amount,
          date: Date.now()
        };
        setExpenses([...expenses, newExpense]);
      }
      setDescription('');
      setAmount('');
    }
  };

  useEffect(() => {});

  return (
    <Fragment>
      <Wallet total={total} />
      <Add
        handleSubmit={handleSubmit}
        setDescription={setDescription}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
      />
      <Records incomes={incomes} expenses={expenses} total={total} />
    </Fragment>
  );
}

export default App;
