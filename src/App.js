import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Views/AboutUs/AboutUs";
import MechanicCard from "./Components/Card/MechanicCard";
import ContactUs from "./Views/ContactUs/ContactUs";
import SkillAndCertificates from "./Views/SkillAndCertificates";
import ForgotPassword from "./Views/AuthUser/ForgotPassword/ForgotPassword";
import Register from "./Views/AuthUser/Register/Register";
import Login from "./Views/AuthUser/Login/Login";
import SelectCustomerOrMechanic from "./Views/AuthUser/SelectCustomerOrMechanic/SelectCustomerOrMechanic";
import HowWeWork from "./Views/HowWeWork/HowWeWork";
import OtpVerification from "./Views/AuthUser/OtpVerification/OtpVerification";
import NewPassword from "./Views/AuthUser/NewPassword/NewPassword";
import SearchResult from "./Views/SearchResult";
import NearBy from "./Views/Meachanics/Nearby/Nearby";
import NewlyJoined from "./Views/Meachanics/NewlyJoined/NewlyJoined";
import TopRated from "./Views/Meachanics/TopRated/TopRated";
import Home from "./Views/Home/Home";
import OrderCard from "./Components/Card/OrderCard";
import SideBar from "./Components/SideBar/SideBar";
import DisputeOrderCard from "./Components/Card/DisputeOrderCard";
import AboutCard from "./Components/Card/AboutCard";
import Favourite from "./Views/Favourite";
import MyFavourite from "./Views/MyFavourite";
import MyCars from "./Views/MyCars";
import UnderRepair from "./Views/UnderRepair";
import OrderReceipt from "./Views/OrderReceipt";
import PaymentModal from "./Components/Modal/PaymentModal";
import OrderComplete from "./Views/OrderComplete";
import Comment from "./Views/Comment";
import { useState } from "react";
import DisputeOrder from "./Views/DisputeOrder";
import DisputeOrderModal from "./Components/Modal/DisputeOrderModal";
import DisputeOrderModal1 from "./Components/Modal/DisputeOrderModal1";
import DisputeOrderModal2 from "./Components/Modal/DisputeOrderModal2";
import ReviewCard from "./Views/Review";
import Order from "./Views/Order";
import NotificationLatestActivity from "./Views/NotificationLatestActivity";
import TransactionDetails from "./Views/TransactionDetails";
import TransactionHistory from "./Views/TransactionHistory";
// import PersonalInformation from "./Views/PersonalInformation";
import AddCarModal from "./Components/Modal/AddCarModal";
import CertificateModal from "./Components/Modal/CertificateModal";
import DeleteCertificateModal from "./Components/Modal/DeleteCertificateModal";
import CertificateModalImage from "./Components/Modal/CertificateModalImage";
import Certificate from "./Views/Certificate";
import NavbarModal from "./Components/Modal/NavbarModal";
import Header from "./Components/Header/Header";
import SideBarCertificate from "./Views/SidebarCertificate";
import MembershipCrad from "./Components/Card/MembershipCrad";
import MemberShipCard1 from "./Components/Card/MemberShipCard1";
import MemberShip from "./Views/MemberShip";
import Chat from "./Views/Chat";
import OrderWaiting from './Views/OrderWaiting/OrderWaiting.js';
import OrderChat from './Views/OrderChat/OrderChat.js';
import PersonalInformation from './Views/PersonalInformation/PersonalInformation.js';

function App() {
  return (
    <div className="App">
      <Routes>
    {/* connected */}
        <Route path="/" element={<SelectCustomerOrMechanic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/home" element={<Home />} />

        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/near-by" element={<NearBy />} />
        <Route path="/newly-joined" element={<NewlyJoined />} />
        
        <Route path="/under-repair" element={<UnderRepair />} />
        <Route path="/my-car" element={<MyCars />} />
                <Route path="/favourite" element={<Favourite />} />
        <Route path="/order-waiting" element={<OrderWaiting />} />
        <Route path="/order-chat" element={<OrderChat />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/order-receipt" element={<OrderReceipt />} />

      {/* done */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/skillandcertificate" element={<SkillAndCertificates />} />
        <Route path="/my-favourite" element={<MyFavourite />} />


      {/* have to do */}   
        <Route path="/dispute-order" element={<DisputeOrder />} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/notification-latest-activity"
          element={<NotificationLatestActivity />}
        />
        <Route path="/transaction-detail" element={<TransactionDetails />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/certificate-modal" element={<CertificateModal />} />
        <Route path="/Sidebar-Certificate" element={<SideBarCertificate />} />        
        <Route path="/membership-card" element={<MembershipCrad />} />
        <Route path="/membership-card1" element={<MemberShipCard1 />} />
        <Route path="/membership" element={<MemberShip />} />
      </Routes>
    </div>
  );
}

export default App;
