export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-2xl w-full text-center">
      <img
  src="/partition-logo.png"
  alt="Partition logo"
  className="mx-auto mb-6 w-24 sm:w-32"
/>
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Partition</h1>
        <p className="text-lg text-gray-700 mb-8">
          Find your perfect home — Buy, Sell, or Rent with ease.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Browse Listings
          </button>
          <button className="px-6 py-2 bg-white text-blue-500 border border-blue-500 rounded hover:bg-blue-100">
            List Your Property
          </button>
        </div>
      </div>
    </main>
  );
}
