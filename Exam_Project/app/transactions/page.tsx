"use client";

import PageHeader from '@/components/common/PageHeader';
import CreditCard from '@/components/dashboard/CreditCard';
import CustomBarChart from '@/components/transactions/CustomBarChart';
import TransactionTable from '@/components/transactions/TransactionTable';


const cards = [
  {
    id: 1,
    type: 'Visa',
    number: '5103 **** **** 7893',
    holder: 'Jamal Imanov',
    valid: '11/27',
    balance: '$24,568',
  },
  {
    id: 2,
    type: 'Mastercard',
    number: '5522 **** **** 1170',
    holder: 'Jamal Imanov',
    valid: '02/29',
    balance: '$5,756',
  },
];

const transactions = [
  {
    id: '#789012',
    date: 'Dec 23, 2024',
    description: 'Online Store Payment',
    type: 'Shopping',
    amount: '-$128.00',
    card: '5522 ****',
  },
  {
    id: '#789013',
    date: 'Dec 21, 2024',
    description: 'Salary Deposit',
    type: 'Income',
    amount: '+$4,500.00',
    card: '5522 ****',
  },
  {
    id: '#789014',
    date: 'Dec 20, 2024',
    description: 'Utility Bill Payment',
    type: 'Bills',
    amount: '-$258.00',
    card: '4098 ****',
  },
  {
    id: '#789015',
    date: 'Dec 18, 2024',
    description: 'Restaurant Payment',
    type: 'Food',
    amount: '-$85.00',
    card: '5522 ****',
  },
  {
    id: '#789016',
    date: 'Dec 17, 2024',
    description: 'Freelance Payment',
    type: 'Income',
    amount: '+$750.00',
    card: '4098 ****',
  },
];

const labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']; // X-axis labels
const dataPoints = [4500, 5000, 3500, 2000, 12500, 6000]; // Data points
const highlightedIndex = 4; // Highlight the "Dec" bar

export default function Transactions() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <PageHeader
        pageTitle="Transactions"
      />
    <h1 className="text-xl font-bold">My Cards</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <CreditCard
          key={card.id}
          balance={card.balance}
          type={card.type}
          holder={card.holder}
          valid={card.valid}
          number={card.number}
        />
      ))}
        <CustomBarChart
        labels={labels}
        dataPoints={dataPoints}
        highlightedIndex={highlightedIndex}
        />
      </div>
      <div className="mt-8">
        <TransactionTable transactions={transactions} showType showId />
      </div>
    </div>
  );
}