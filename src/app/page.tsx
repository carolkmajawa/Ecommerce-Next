import Login from './login/page';
import Signup from './signup/page';
import FlashSales from "./components/home/flashsales"
import Sidebar from "./components/home/sidebar";
import Banner from "./components/home/banner"
import Product from "./components/home/explore";
import ProductCard from "./components/home/productCard";
import BestSells from "./components/home/bestProducts"
import Arrival from "./components/home/arrival/arrival"
import Experience from "./components/home/experience/experience";
import HeaderContent from "./sharedComponents/header"

export default function Home() {
  return (
    <>
       <HeaderContent/>
    <div className="min-h-screen bg-[#fff]">
      <div className="flex mt-6 max-w-7xl mx-auto">
        <Sidebar />
        <main className="flex-1 p-8">
          <Banner />
          <FlashSales />
        </main>
      </div>
      <BestSells/>
    </div>
    <ProductCard/>
    <Experience/>
    <Product/>
    <Arrival/>
    </>
  );
}

