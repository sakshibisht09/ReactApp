import React, { useState } from 'react';

import './App.css'
import Header from './components/header/header.jsx'
import Counter from './components/counter1/Counter.jsx'
import ImgComp from './components/imgTask/ImgComp.jsx'
import Home from './components/home/Home.jsx'
import Products from './components/products/Products.jsx'
import { Route, Routes } from 'react-router-dom'
import Jewellery from './components/products/categories/jewellery/Jewellery.jsx'
import Electronics from './components/products/categories/electronics/Electronics.jsx'
import Women from './components/products/categories/womenWear/Women.jsx'
import Men from './components/products/categories/menWear/Men.jsx'
import PageNotFound from './components/pageNotFound/PageNotFound.jsx'
import AllProducts from './components/allProducts/AllProducts.jsx'
import A from './components/parent-child/A.jsx'
import TestMap from './components/testMap/TestMap.jsx'
import I from './components/contextApi/I.jsx'

import HomeComp from './components/contextApi/newContextApi/HomeComp.jsx'
import SecHome from './components/contextApi/secContextApi/SecHome.jsx'

import Ref from './components/ref/Ref.jsx'
import Timer from './components/timer/Timer.jsx'

import RefDom from './components/ref/RefDom.jsx'

import Image from './components/lifeCycle/Image.jsx'

import Text from './components/lifeCycle/Text.jsx'

import Reducer from './components/reducer/Reducer.jsx'

import Show from './components/redux/component/Show.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <Header/>
        {/* <RefDom/> */}
        {/* <TestMap/> */}
        {/* <A/> */}
        {/* <I/> */}
        {/* <HomeComp/> */}

        {/* <SecHome/> */}

        {/* <Ref/> */}

        {/* <Timer/> */}

        {/* <Image/>
        <Text/> */}

        {/* <Reducer/> */}

        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/allproducts"} element={<AllProducts/>}></Route>
          <Route path={"/counter1"} element={<Counter/>}></Route>
          <Route path={"/imgTask"} element={<ImgComp/>}></Route>
          <Route path={"/redux"} element={<Show/>}></Route>
          <Route path={"/products"} element={<Products/>}>
          
            <Route path={"electronics"} element={<Electronics/>}></Route>
            <Route path={"jewellery"} element={<Jewellery/>}></Route>
            <Route path={"menWear"} element={<Men/>}></Route>
            <Route path={"womenWear"} element={<Women/>}></Route>  
                </Route>
          <Route path={"*"} element={<PageNotFound/>}></Route>
        </Routes>

      </div>
  )
}

export default App
