"use client"
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="bg-black rounded-lg flex items-center justify-between px-10 py-8 mb-8">
      <div>
        <div className="text-white text-xl mb-2">iPhone 14 Series</div>
        <div className="text-white text-3xl font-bold mb-4">
          Up to 10% off Voucher
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
          Shop Now &rarr;
        </button>
        <div className="mt-4 flex space-x-2">
          {[0,1,2,3].map(i => (
            <span key={i} className={`w-2 h-2 rounded-full ${i===0 ? 'bg-red-500' : 'bg-white'}`}/>
          ))}
        </div>
      </div>
      <div><Image src="/images/secondimage.jpg" alt="iPhone Banner" width={600} height={120}/> </div>
    </div>
  );
}
