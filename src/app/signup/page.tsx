"use client"
import Footer from "../sharedComponents/footer";
import HeaderContent from "../sharedComponents/header";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <HeaderContent/>
      <div className="flex flex-grow">
        <div className="w-1/2 flex items-center justify-center bg-[#e7fafe]">
          <Image src="/images/login-image.avif" alt="Shopping cart with mobile" width={700} height={700}/>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-sm space-y-8">
            <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
            <p className="mb-6 text-gray-500">Enter your details below</p>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"/>
              <input type="text" placeholder="Email or Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"/>
              <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"/>
              <button type="submit" className="bg-[#DB4444] text-white px-7 py-2 rounded w-full hover:bg-red-700 transition"> Create Account </button>
              <button type="button" className="border border-gray-300 rounded w-full flex items-center justify-center py-2 mt-2"><span className="ml-2">Sign up with Google</span></button>
            </form>
            <div className="text-center mt-2 text-sm">Already have account?{" "}<a href="/login" className="text-[#DB4444] hover:underline"> Log in</a></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

