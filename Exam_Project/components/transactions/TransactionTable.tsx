import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Transaction {
  id?: string;
  name?: string;
  description?: string;
  date: string;
  card: string;
  amount: string;
  type?: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  showType?: boolean;
  showId?: boolean;
}

export default function TransactionTable({ 
  transactions, 
  showType = false,
  showId = false 
}: TransactionTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="block md:hidden">
        {transactions.map((transaction, idx) => (
          <div key={transaction.id || idx} className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium text-gray-900">
                  {transaction.name || transaction.description}
                </div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
              <div className={`text-sm font-medium ${
                transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                {showId && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {showType ? 'Description' : 'Transaction'}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Card
                </th>
                {showType && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                  </th>
                )}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((transaction, idx) => (
                <tr key={transaction.id || idx} className="hover:bg-gray-50">
                  {showId && (
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.id}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.name || transaction.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.card}</div>
                  </td>
                  {showType && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                        {transaction.type}
                      </span>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`text-sm font-medium ${
                        transaction.amount.startsWith('+')
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.amount}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  </CardContent>
</Card>
  );
}