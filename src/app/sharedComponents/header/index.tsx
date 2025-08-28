"use client"
import { useState } from 'react';

export default function HeaderContent() {
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-1">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
          <span className="ml-1 font-semibold cursor-pointer hover:underline">ShopNow</span>
        </p>
        <div className="relative">
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="flex items-center gap-1"
            aria-haspopup="true"
            aria-expanded={languageOpen}
          >
            English
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {languageOpen && (
            <ul className="absolute right-0 mt-1 bg-white text-black rounded shadow-lg w-24 z-10">
              <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer">English</li>
              <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer">French</li>
              <li className="px-3 py-1 hover:bg-gray-200 cursor-pointer">Swahili</li>
            </ul>
          )}
        </div>
      </div>

      <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
        <div className="text-xl font-bold">Exclusive</div>
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Contact</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer underline cursor-pointer">Sign Up</li>
        </ul>
        <div className="relative w-64">
          <input
            type="search"
            placeholder="What are you looking for?"
            className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-indigo-500"
          />
          <button className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}