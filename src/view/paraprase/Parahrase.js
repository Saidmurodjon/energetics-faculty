import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Paraprase from "../../components/praphrase/Paraprase";

const Parahrase = () => {
  
  return (
    <div className="bg-white">
      {/* <Navbar/> */}
      <div className="">
        <Navbar/>
        <Paraprase />
        <Footer/>
      </div>
      
    </div>
  );
};

export default Parahrase;
