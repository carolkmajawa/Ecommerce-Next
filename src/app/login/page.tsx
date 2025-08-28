"use client"
import Image from "next/image";
import Link from "next/link";
import Footer from "../sharedComponents/footer";
import HeaderContent from "../sharedComponents/header";

export default function Login() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <HeaderContent/>
      <div className="flex flex-grow">
        <div className="w-1/2 flex items-center justify-center bg-[#e7fafe]">
          <Image src="/images/login-image.avif" alt="Shopping cart with mobile" width={700} height={400}/>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-sm space-y-8">
            <h2 className="text-2xl font-semibold mb-2">Log in to Exclusive</h2>
            <p className="mb-6 text-gray-500">Enter your details below</p>
            <form className="space-y-4">
              <input type="text" placeholder="Email or Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"/>
              <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black" />
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-[#DB4444] text-white px-7 py-2 rounded hover:bg-red-700 transition"> <Link href="/home/banner"> Log In</Link>   </button>
                <Link href="/signup" className="text-[#DB4444] hover:underline text-sm"> Forget Password? </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
