"use client"

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import CreditCard from '@/components/dashboard/CreditCard';
import SpendingStats from '@/components/dashboard/SpendingStats'
import SmoothLineGraph from '@/components/dashboard/SmoothLineGraph';
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

const recentTransactions = [
  {
    name: 'Online Store Payment',
    date: 'Dec 23, 2024',
    amount: '-$128.00',
    card: '5522 ****',
  },
  {
    name: 'Salary Deposit',
    date: 'Dec 21, 2024',
    amount: '+$4,500.00',
    card: '5522 ****',
  },
  {
    name: 'Utility Bill Payment',
    date: 'Dec 20, 2024',
    amount: '-$258.00',
    card: '4098 ****',
  },
  {
    name: 'Restaurant Payment',
    date: 'Dec 18, 2024',
    amount: '-$850.00',
    card: '5522 ****',
  },
  {
    name: 'Freelance Payment',
    date: 'Dec 17, 2024',
    amount: '+$2,500.00',
    card: '4098 ****',
  },
  {
    name: 'Card to Card',
    date: 'Dec 14, 2024',
    amount: '-$18.00',
    card: '4098 ****',
  },
  {
    name: 'From Kerim to my Card',
    date: 'Dec 14, 2024',
    amount: '+$120.00',
    card: '4098 ****',
  },
  {
    name: 'CashBack',
    date: 'Dec 13, 2024',
    amount: '+$30.00',
    card: '5522 ****',
  },
  {
    name: 'Spotify Payment',
    date: 'Dec 10, 2024',
    amount: '-$10.00',
    card: '4098 ****',
  },
];

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']; // X-axis labels
const dataPoints = [100, 300, 400, 800, 600, 300, 700]; // Y-axis data points


export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <PageHeader
        pageTitle="Overview"
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
      <SmoothLineGraph labels={labels} dataPoints={dataPoints} />

    </div>


      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpendingStats/>
          <TransactionTable transactions={recentTransactions} />
        </div>
      </div>
    </div>
  );
}