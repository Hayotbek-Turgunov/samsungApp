import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";

function App() {
  return (
    <div>
      <Navbar img='https://e7.pngegg.com/pngimages/483/415/png-clipart-samsung-simple-logo-icons-logos-emojis-iconic-brands.png'
        navbarListLeft={['Shop', 'Mobile', 'TV & Audio', 'Appliances', 'Computing', 'Displays', 'Accessories', 'SmartThings']}
        navbarListRight={['Explore', 'Support', 'For Businnes']}
        navbarIconSearch={[<IoSearch />, <SlBasket />, <FaRegUser />]} />
    </div>
  );
}

export default App;
