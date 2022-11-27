import React from "react";
import bg from "../assets/hero-bg.png";
import aboutBg from "../assets/about-bg.png";
import google from '../assets/google.png';
import facebook from '../assets/facebook.png'

const Home = ({user}) => {
  function handleGoogleClick(){
    window.open(
			'http://localhost:8000/auth/google/callback',
			"_self"
		);
  }
  function handleFacebookClick(){
    window.open(
			'http://localhost:8000/auth/facebook/callback',
			"_self"
		);
  }
  function handleLogoutClick(){
    window.open(
			'http://localhost:8000/auth/logout',
			"_self"
		);
  }
  return (
    <div className="main_container">
      <div className="modal bg-[#A3C1EC] rounded-lg shadow-xl  absolute h-[40vh] w-[45vw] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center">
        {user ? <div className="flex flex-col items-center justify-center"><h1 className="text-3xl font-semibold my-5">FliqaIndia</h1>
        <p className="mb-3">WELCOME ON BOARD</p>
        <div className="login_tabs flex flex-col items-center justify-center  gap-4 w-[80] mx-auto">
        <p>{`Hello ${user.name} `}</p>
        <button className="google cursor-pointer hover:bg-red-300 bg-red-200 px-3 py-[0.4rem] rounded-lg " onClick={handleLogoutClick}>
            <p>Logout</p> 
          </button>
         
        </div> </div>: <div className="flex flex-col items-center justify-center"><h1 className="text-3xl font-semibold my-5">FliqaIndia</h1>
        <p className="mb-3">Log in with</p>
        <div className="login_tabs flex gap-4 w-[80] mx-auto">
          <button className="fb cursor-pointer hover:bg-gray-200 bg-white px-3 py-[0.4rem] rounded-lg flex gap-3 items-center justify-center" onClick={handleFacebookClick}>
            <div className="image">
              <img className="h-[20px]" src={facebook} alt="" />
            </div>
            <p>Facebook</p>
          </button>
          <button className="google cursor-pointer hover:bg-gray-200 bg-white px-3 py-[0.4rem] rounded-lg flex gap-3 items-center justify-center" onClick={handleGoogleClick}>
            <div className="image">
            <img className="h-[20px]" src={google} alt="" />
            </div>
            <p>Google</p>
          </button>
        </div></div>}
      </div>
      <div
        className="hero_section h-[100vh] bg-cover bg-no-repeat"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[80vw] mx-auto h-[100vh]">
      <div className="about_us p-10 pb-5 px-[20%]  mx-auto" style={{backgroundImage:`url(${aboutBg})`, backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
        <h1 className="text-center font-bold text-3xl my-10">About Us</h1>
        <p className="text-center text-2xl">
          With this belief, we at{" "}
          <span className="font-bold text-blue-600">Fliqaindia</span> started
          our journey 5 years ago with the belief that everyone has the right to
          quality photography to help them better capture and conserve their
          special moments. We have been appreciated and recommended by{" "}
          <span className="text-gray-400 font-semibold">
            Start Up India, StartUp Bengal, Imagesbazaar
          </span>{" "}
          and Digital India for our novel initiative.
          </p>
          <br/>
          <p className="text-center text-2xl">
          We have partnered with Canvera to give you the best service possible.
          We are also trusted by{" "}
          <span className="text-[#F1B177] font-semibold">
            Justdial, WedMEGood, Shaadisaga, weddingwire
          </span>{" "}
          and so many well known event organisers. Now, we have expanded our
          business in different parts of India owing to our happy customers who
          have believed in us, supported us and promoted us through strong
          word-of-mouth. We continue to work hard towards realizing our vision
          of making quality photography accessible and affordable for all.
        </p>
      </div>
      </div>

    </div>
  );
};

export default Home;
