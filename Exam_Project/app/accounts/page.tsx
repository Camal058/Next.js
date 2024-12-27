"use client";

import { StatCard } from "@/components/accounts/StatCard";
import DebitCreditChart from '@/components/accounts/DebitCreditChart';
import PageHeader from "@/components/common/PageHeader";
import CreditCard from '@/components/dashboard/CreditCard';
import TransactionTable from '@/components/transactions/TransactionTable';


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
];

const cards = [
  {
    id: 1,
    type: 'Visa',
    number: '5103 **** **** 7893',
    holder: 'Jamal Imanov',
    valid: '11/27',
    balance: '$24,568',
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <PageHeader
          pageTitle="Accounts"
      />
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="My Balance"
          value="$12,560.00"
        />
        <StatCard
          title="Income"
          value="$3,460.00"
        />
        <StatCard
          title="Expense"
          value="$8,240.00"
        />
        <StatCard
          title="Total Saving"
          value="$15,890.00"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TransactionTable transactions={recentTransactions} />
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
      </div>
      <h1 className="text-xl font-bold mb-4">Debit & Credit Overview</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
          <div className="mb-4 text-gray-500 text-sm">
            <span className="font-semibold text-black">$7,560 Debited</span> &{' '}
            <span className="font-semibold text-black">$5,420 Credited</span> in this Week
          </div>
          <DebitCreditChart />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Invoices Sent</h2>
          <ul>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <img src="accounts/apple-store.png"/>
                </div>
                <div>
                  <p className="font-semibold">Apple Store</p>
                  <p className="text-sm text-gray-400">5h ago</p>
                </div>
              </div>
              <p className="font-semibold">$450</p>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src="accounts/person.png"/>
                </div>
                <div>
                  <p className="font-semibold">Emilly</p>
                  <p className="text-sm text-gray-400">2 days ago</p>
                </div>
              </div>
              <p className="font-semibold">$160</p>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <img src="accounts/playstation.png"/>
                </div>
                <div>
                  <p className="font-semibold">Playstation</p>
                  <p className="text-sm text-gray-400">5 days ago</p>
                </div>
              </div>
              <p className="font-semibold">$1,085</p>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <img src="accounts/person.png"/>
                </div>
                <div>
                  <p className="font-semibold">William</p>
                  <p className="text-sm text-gray-400">10 days ago</p>
                </div>
              </div>
              <p className="font-semibold">$90</p>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <img src="accounts/spotify.png"/>
                </div>
                <div>
                  <p className="font-semibold">Spotify</p>
                  <p className="text-sm text-gray-400">12 days ago</p>
                </div>
              </div>
              <p className="font-semibold">$10</p>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <img src="accounts/mobile.png"/>
                </div>
                <div>
                  <p className="font-semibold">iTicket</p>
                  <p className="text-sm text-gray-400">20 days ago</p>
                </div>
              </div>
              <p className="font-semibold">$160</p>
            </li>
          </ul>
      </div>
    </div>
    </div>
  </div>
  );
}