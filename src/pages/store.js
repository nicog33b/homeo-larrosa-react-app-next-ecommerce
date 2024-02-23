import React from "react";
import './globals.css'
import Navbar from '../components/UI/navbar'
import Footer from '../components/UI/footer'
import NavFilter from "@/components/productFilter";
import ProductGrid from "@/components/productGrid";



export default function ProductList() {
  return (

<>

    <Navbar/>
    <NavFilter/>
    <ProductGrid/>
    <Footer/>
    
</>
  );
};


