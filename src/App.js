import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { IoSearch } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Banner from './Component/Banner/Banner';
import bannerBg from './Assets/bannerBg.webp'
import bannerBg0 from './Assets/Zfold5_MX_Black_Friday_HP_KV_DT_1440x640.jpg'
import Reccomends from './Component/Reccomends/Reccomends';
import reccomendsSwitch from './Assets/samsung-hour-removebg-preview.png'
import reccomendsPhone from './Assets/samsung-hour-removebg-preview.png'
import reccomendsDisney from './Assets/samsung-hour-removebg-preview.png'
import reccomendsTv from './Assets/samsung-hour-removebg-preview.png'
import Features from './Component/Features/Features';
import featuresImgPhone from './Assets/galaxy-s8-samsung.jpg'
import featureImgTv from './Assets/feature-img-tv.jpg'
import featureHomeImg from './Assets/features-homeimg.jpg'
import featuresPhoneImg from './Assets/featuresPhone-img.jpg'
import Aside from './Component/Aside/Aside'
import SamsungSearch from './Component/SamsungSearch/SamsungSearch';
import SamsungDeck from './Component/SamsungDeck/SamsungDeck';



function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar img='https://e7.pngegg.com/pngimages/483/415/png-clipart-samsung-simple-logo-icons-logos-emojis-iconic-brands.png'
        navbarListLeft={['Shop', 'Mobile', 'TV & Audio', 'Appliances', 'Computing', 'Displays', 'Accessories', 'SmartThings']}
        navbarListRight={['Explore', 'Support', 'For Businnes']}
        navbarIconSearch={[<IoSearch />, <SlBasket />, <FaRegUser />]}
        navbarIconBars={<FaBars />}
      />
      {/* BANNER */}
      <Banner bannerBg={bannerBg} bannerBg0={bannerBg0} bannerHeading={`Save up to 1000$`}
        bannerText={'Unfold your next-level productivity width Galaxy Z Fold5'} />

      {/* RECCOMENDS */}
      <Reccomends recomendsTopHeading={'Samsung Recommends'}
        reccomendsCard={[{
          img: reccomendsSwitch,
          textLine: 'Galaxy Watch Classic'
        },
        {
          img: reccomendsPhone,
          textLine: 'Galaxy Z Fold Gray'
        },

        {
          img: reccomendsDisney,
          textLine: 'The Frame - Disney100'
        },

        {
          img: reccomendsTv,
          textLine: '85" QE1C QLED 4K TV'
        }
        ]}
      />


      {/* FEATURES */}
      <Features features={[
        {
          featuresHeading: 'Mobile & Computing',
          featuresList: ['Galaxy Z Fold5', 'Galaxy Buds2 Pro', 'GalaxyS23 FE', 'Galaxy Tab s9 Series', 'Galaxy S23'],
          featuresImg: featuresImgPhone,
          featuresBottomDeckHeading: 'Get up to $1000 instand trade-in credit',
          featuresBottomDecktext: 'From $1,7999.99 before eligible trade-in'
        }
      ]} />

      <Features features={[
        {
          featuresBg: '#F2EFEA',
          featuresHeading: 'TV & Audio',
          featuresList: ['Samsung Neo QLED 4K QN90C', ' Samsung Neo QLED 4K QN85C', 'Q-Series Soundbar Q900C'],
          featuresImg: featureImgTv,
          featuresBottomDeckHeading: 'Shine brighter this season',
          featuresBottomDecktext: 'Save up to $2,200 on a Samsung Neo QLED 4k QN90C and call it Mini Led magic'
        }
      ]} />

      <Features features={[
        {
          featuresHeading: 'Home Appliances',
          featuresList: ['Refrigerators', ' Washer & Dryer', ' Vacuum'],
          featuresImg: featureHomeImg,
          featuresBottomDeckHeading: 'Shine brighter this season',
          featuresBottomDecktext: 'Save up to $2,200 on a Samsung Neo QLED 4k QN90C and call it Mini Led magic'
        }
      ]} />


      <Features features={[
        {
          featuresBg: '#F2EFEA',
          featuresHeading: 'Sustainability',
          featuresList: ['Certified Re-Newed', ' How to recycle', ' SmartThings Energy'],
          featuresImg: featuresPhoneImg,
          featuresBottomDeckHeading: 'Shine brighter this season',
          featuresBottomDecktext: 'Save up to $2,200 on a Samsung Neo QLED 4k QN90C and call it Mini Led magic'
        }
      ]} />

      {/* ASIDE */}
      <Aside />
      {/* SAMSUNG-SEARCH */}
      <SamsungSearch />

      {/* SAMSUNG-DECK */}
      <SamsungDeck />
    </div>
  );
}

export default App;
