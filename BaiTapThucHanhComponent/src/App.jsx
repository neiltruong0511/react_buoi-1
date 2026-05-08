import Banner from "./BaiTapThucHanhLayout/Banner"
import Footer from "./BaiTapThucHanhLayout/Footer"
import Header from "./BaiTapThucHanhLayout/Header"
import Item from "./BaiTapThucHanhLayout/Item"



function App() {


  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
