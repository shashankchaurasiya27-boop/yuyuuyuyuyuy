import { useState } from 'react';
import { PixelCard } from '../components/PixelCard';
import { PixelButton } from '../components/PixelButton';
import { Mascot } from '../components/Mascot';
import { useNavigate } from 'react-router-dom';

export default function LoanGame() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(10); // 10% interest

  const interest = Math.round(amount * (rate / 100));
  const total = amount + interest;

  return (
    <div className="min-h-screen bg-autumn-pattern p-8 flex flex-col items-center font-pixel">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 text-white">
        <PixelButton onClick={() => navigate('/')} variant="secondary">🏠 Home</PixelButton>
        <h1 className="text-2xl">Loan Lab 🧪</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-center justify-center">
        <Mascot mood="thinking" message={`If you borrow ${amount}, you pay back ${total}!`} />

        <PixelCard className="w-full max-w-lg">
          <h2 className="text-xl mb-6 text-center">Interest Calculator</h2>
          
          <div className="mb-6">
            <label className="block mb-2">Borrow Amount: {amount} coins</label>
            <input 
              type="range" min="10" max="1000" step="10" 
              value={amount} onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-autumn-orange"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-2">Interest Rate: {rate}%</label>
            <input 
              type="range" min="1" max="50" step="1" 
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-autumn-teal"
            />
          </div>

          <div className="bg-gray-100 p-4 rounded border-2 border-black mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Loan:</span>
              <span>{amount}</span>
            </div>
            <div className="flex justify-between text-sm mb-2 text-red-500">
              <span>+ Interest ({rate}%):</span>
              <span>{interest}</span>
            </div>
            <div className="border-t-2 border-black pt-2 flex justify-between font-bold">
              <span>Total Payback:</span>
              <span>{total}</span>
            </div>
          </div>

          <p className="text-xs text-center text-gray-500">
            See? Borrowing costs extra money! Save up instead!
          </p>
        </PixelCard>
      </div>
    </div>
  );
}
