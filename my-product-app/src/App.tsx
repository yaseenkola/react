import { useMemo, useState } from 'react';

const UNIT_PRICE = 1000;

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
}

export default function App() {
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => quantity * UNIT_PRICE, [quantity]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <section className="w-full max-w-md rounded-3xl bg-white/90 shadow-xl ring-1 ring-black/5 backdrop-blur-sm">
        <div className="flex items-center gap-3 border-b border-slate-100 px-8 py-6">
          <span className="text-4xl" role="img" aria-label="shopping bag">
            🛍️
          </span>
          <div>
            <h1 className="text-2xl font-semibold">Product: iPhone 15 Pro</h1>
            <p className="text-slate-500 text-center">Price: {formatCurrency(UNIT_PRICE)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 px-8 py-10">
          <div className="flex items-center gap-6 text-lg">
            <button
              type="button"
              className="h-16 w-16 rounded-2xl border border-slate-200 text-2xl font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease quantity"
              disabled={quantity === 1}
            >
              −
            </button>
            <span className="w-12 text-center text-3xl font-semibold text-slate-700">{quantity}</span>
            <button
              type="button"
              className="h-16 w-16 rounded-2xl border border-slate-200 text-2xl font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
              onClick={() => setQuantity((prev) => prev + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <p className="text-xl text-slate-500 text-center">
            Total: <span className="font-semibold text-slate-900">{formatCurrency(total)}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
