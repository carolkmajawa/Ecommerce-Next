"use client"
import Image from 'next/image';

export default function Experience() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center w-500 h-20">
      <div className="text-white p-1  rounded-lg flex items-center">
        <div className="">
          <span className="text-green-400 font-medium">Categories</span>
          <h2 className="text-3xl font-bold mt-3 mb-2">Enhance Your Music Experience</h2>
          <div className="flex gap-6 mt-5 mb-8">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">23</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">49</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">59</span>
              <span className="text-xs">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">35</span>
              <span className="text-xs">Seconds</span>
            </div>
          </div>
          <button className="bg-green-500 text-black font-bold px-5 py-3 rounded-lg hover:bg-green-400">Shop Now</button>
        </div>
        <div className="ml-10">
          <Image src="/images/bluetooth-speaker.png" alt="Speaker Promo" width={1000} height={100} className="rounded-md" />
        </div>
      </div>
    </div>
  );
}
