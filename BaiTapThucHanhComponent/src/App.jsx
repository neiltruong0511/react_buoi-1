import Banner from "./BaiTapThucHanhLayout/Banner"
import Body from "./BaiTapThucHanhLayout/Body"
import Footer from "./BaiTapThucHanhLayout/Footer"
import Header from "./BaiTapThucHanhLayout/Header"
import Item from "./BaiTapThucHanhLayout/Item"



function App() {


  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header/>
        <Body/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
