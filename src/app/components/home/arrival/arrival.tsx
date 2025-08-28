"use client"
import Image from 'next/image';
import Footer from '../../../sharedComponents/footer';

export default function Arrival() {
  return (
    <div className="bg-white min-h-screen ">
      <div className="pt-8 px-8">
        <span className="text-pink-600 font-medium">Featured</span>
        <h1 className="text-3xl font-bold mt-2">New Arrival</h1>
      </div>

      <div className="grid grid-cols-3 gap-200 px-8 pt-10 justify-center ml-40">
        <div className="col-span-1">
          <div className="relative h-180 w-190 rounded-lg overflow-hidden">
            <Image src="/images/PS5.jpg" alt="PlayStation 5" layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-4 w-full">
              <h2 className="text-lg font-semibold">PlayStation 5</h2>
              <p className="text-sm mt-1">Experience the future of gaming. Buy PS5 now!</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-8">
          <div className="relative h-106 w-150 rounded-lg overflow-hidden">
            <Image src="/images/woman.avif" alt="Women's Collections" layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-3 w-full">
              <h3 className="text-md font-semibold">Womens Collections</h3>
              <p className="text-xs">Fashionable womens items. Shop now!</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative h-66 rounded-lg overflow-hidden">
              <Image src="/images/bluetooth.gif" alt="Speakers" layout="fill" objectFit="cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 w-full">
                <h3 className="text-md font-semibold">Speakers</h3>
                <p className="text-xs">Feel the beat. Shop now!</p>
              </div>
            </div>
            <div className="relative h-66 rounded-lg overflow-hidden">
              <Image src="/images/perfume.avif" alt="Perfume" layout="fill" objectFit="cover" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white p-2 w-full">
                <h3 className="text-md font-semibold">Perfume</h3>
                <p className="text-xs">Luxury fragrance. Shop now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20 py-14">
        <div className="flex flex-col items-center">
          <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor"><path d="M5 13l4 4L19 7"/></svg></span>
          <span className="font-semibold">FREE AND FAST DELIVERY</span>
          <span className="text-sm mt-1 text-center text-gray-500">Free delivery for orders above $100</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>
          </span>
          <span className="font-semibold">24/7 CUSTOMER SERVICE</span>
          <span className="text-sm mt-1 text-center text-gray-500">Friendly 24/7 customer support</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"><path d="M4 4v16h16V4z" strokeWidth="2"/></svg>
          </span>
          <span className="font-semibold">MONEY BACK GUARANTEE</span>
          <span className="text-sm mt-1 text-center text-gray-500">Return money within 30 days</span>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
