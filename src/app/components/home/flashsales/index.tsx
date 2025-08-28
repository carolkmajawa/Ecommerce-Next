const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    img: "/images/game.jpg",
    rating: 88
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    img: "/images/keyboard.jpg",
    rating: 75
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    img: "/images/plasma.jpg",
    rating: 99
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    img: "/images/seat.png",
    rating: 99
  },
];

function Countdown() {
  return (
    <div className="flex space-x-8 mb-4 text-center">
      {[
        {label: 'Days', value: '03'},
        {label: 'Hours', value: '23'},
        {label: 'Minutes', value: '19'},
        {label: 'Seconds', value: '56'},
      ].map((item, idx) => (
        <div key={idx}>
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-xs">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function FlashSales() {
  return (
    <section className="mt-8">
      <div className="flex items-center mb-4">
        <span className="text-red-500 font-bold mr-2">Today’s</span>
        <span className="text-2xl font-semibold">Flash Sales</span>
      </div>
      <Countdown />
      <div className="flex space-x-18 overflow-x-auto pb-6 right-10">
        {products.map((item, idx) => (
          <div key={idx}
            className="bg-white p-4 rounded-lg shadow border min-w-[300px] relative">
            <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs rounded">{item.discount}</span>
            <img src={item.img} alt={item.name} className="mx-auto h-24 mb-2" />
            <div className="font-medium mb-1">{item.name}</div>
            <div className="flex items-center mb-1 space-x-1">
              <span className="text-[#DB4444] font-semibold">${item.price}</span>
              <span className="line-through text-gray-400 text-sm">${item.oldPrice}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-xs mr-2">★</span>
              <span className="text-xs">{item.rating}</span>
            </div>
            {idx === 1 ? (
              <button className="bg-black text-white w-full py-2 rounded">Add To Cart</button>
            ) : null}
            <button className="absolute top-4 right-4 text-gray-400">&hearts;</button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-[#DB4444] text-white font-semibold px-8 py-3 rounded-md">
          View All Products
        </button>
      </div>
    </section>
  );
}
