import React from 'react'
import bg from "../assets/hero-bg.png";
import aboutBg from "../assets/about-bg.png";
const LoginSuccess = ({user}) => {
  function handleClick(){
    window.open(
			'http://localhost:8000/auth/logout',
			"_self"
		);
  }
  console.log(user)
  return (
    <div className="main_container">
    <div className="modal bg-[#A3C1EC] rounded-lg shadow-xl  absolute h-[40vh] w-[45vw] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center">
      <img src={user.picture} alt="User-Profile-Picture"  className='w-[100px] h-[100px] rounded-full'/>
      <h1 className='text-4xl text-white font-extrabold'> Login - Success </h1>
      <hr/>
      <h1 className='text-2xl text-yellow-200 font-extrabold my-2'>{`Hello ${user.name}`}</h1>
      <button className="google cursor-pointer hover:bg-red-300 bg-red-200 px-3 py-[0.4rem] rounded-lg flex gap-3 items-center justify-center m-6 " onClick={handleClick}>
            <p>Logout</p> 
          </button>
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
  )
}

export default LoginSuccess