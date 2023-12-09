import logo from './logo.svg';
import Home from './Pages/Home/index';
import Product from './Pages/Product';
import TopNavbar from './Components/navbar/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import MainNavbar from './Components/main-navbar';
import { Pagination } from 'react-bootstrap';
// import Footer from './Components/Footer';
import Detail from './Pages/Detail';
import Footer from './Components/Footer';
import LoginPage from './Pages/Login';
import { useEffect, useState } from 'react';
import { setCookie, parseCookies } from "nookies";
import Login2 from './Pages/Login/login';

function App() {
  const [login, setLogin] = useState(false)
  const cookies = parseCookies();

  useEffect(() => {
    CheckLogin()
  
    
  }, [])
  


  const CheckLogin =()=>{
    console.log("token",cookies.token)
    if(cookies.access_token){
        setLogin(true)
    }else{
        setLogin(false)
    }
}
  return (
    <>
      {
        login ? (
          <>
            <TopNavbar />
            <div className='main-navbar'>
              <MainNavbar />
            </div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/detail" element={<Detail />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </>
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<LoginPage CheckLogin={CheckLogin}/>} />
              </Routes>
            </BrowserRouter>
          </>
      )
      }

    </>
  );
}


export default App;
