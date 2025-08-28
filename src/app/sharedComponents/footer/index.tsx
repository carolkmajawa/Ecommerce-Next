"use client"
import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-20">
        <div className=" ">
          <h3 className="text-white font-bold mb-4">Exclusive</h3>
          <p>Get 10% off your first order</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-1 py-2 rounded-l bg-gray-800 border border-gray-600 focus:outline-none text-white"
            />
            <button className="bg-gray-700 px-3 rounded-r hover:bg-gray-600">
              &rarr;
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Account</h3>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Download App</h3>
          <p className="mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gray-700">
                <Image src="/images/code-scane.webp" alt="QR" width={400} height={400} />
                </div>
            <div className="flex flex-col space-y-1">
              <button className="bg-gray-800 rounded px-3 py-1 text-sm">
                Google Play
              </button>
              <button className="bg-gray-800 rounded px-3 py-1 text-sm">
                App Store
              </button>
            </div>
          </div>
          <div className="flex space-x-3 text-white">
            <a href="*" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor"> {} </svg>
            </a>
            <a href="*" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor"> {} </svg>
            </a>
            <a href="*" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor"> {} </svg>
            </a>
            <a href="*" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor"> {} </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-10">
        © Copyright Rimel 2022. All right reserved.
      </div>
    </footer>
  );
}
