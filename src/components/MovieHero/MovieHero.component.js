import React from "react";
import { BiChevronRight } from "react-icons/bi";
import {FcLike} from "react-icons/fc";

const launchRazorPay = () => {
  let options = {
    key: "rzp_test_yo2fjlHjvrz5V4",
    amount: 500*100,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image: "https://w7.pngwing.com/pngs/3/952/png-transparent-logo-bookmyshow-business-brand-india-business-text-people-logo-thumbnail.png",
    handler: () => {
      alert("Payment Done")
    },
    theame: {color: "#c4242d"}
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

const MovieHero = () => {
  return(
    <>
    <div className="md:hidden" >
    <img
    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-let-there-be-carnage-et00122532-29-09-2021-06-14-07.jpg"
    alt="poster"
     />
    </div>

    <div className="relative hidden lg:block shadow-inner"  style={{height: "35rem"}}>
        <div
        className="absolute w-full h-full z-20"
        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%"}}
        />
            <div className="flex items-center absolute z-30 left-32 top-16">
            <div className="">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/doctor-et00305742-02-02-2021-03-30-24.jpg"
                alt="poster"
                className="w-4/5 h-5/6 rounded-xl"
                />
            </div>
           <div className="flex flex-col items-start gap-4 z-70">
               <h1 className="text-5xl font-bold text-white">Doctor</h1>
               <div className="flex flex-row gap-2">
               <FcLike className="w-1/6 h-1/5 text-xl"/>
               <span className="text-xl text-white font-bold">90%</span>
               <h2 className="text-gray-100 w-28">53.8K ratings</h2>
               <div className="text-gray-100">
               <BiChevronRight className="w-full h-full left-0" />
               </div>
               </div>
               <div className="bg-navLgColor-600 p-2 px-4 flex justify-between gap-20 rounded-lg">
               <div className="flex flex-col items-start">
                <p className="text-lg font-semibold text-white"> Add your rating and review</p>
                <span className="text-gray-400">Your ratings matter</span>
               </div>
               <button className="text-lg font-semibold mt-1 py-2 h-1/2 px-3 text-gray-800 bg-gray-50 rounded-lg">Rate now</button>
               </div>
               <div className="flex gap-2">
               <button className="font-semibold px-2 text-black bg-gray-50 rounded-sm">2D</button>
               <button className="font-semibold px-2 text-black bg-gray-50 rounded-sm">Tamil</button>
               </div>
               <div className="flex gap-2">
                <span className="text-white ">2h 28m •</span>
                <span className="text-white hover:underline">comedy,</span>
                <span className="text-white hover:underline">Action</span>
                <span className="text-white ">• &nbsp; UA</span>
                <span className="text-white ">• &nbsp;  14 Oct, 2021</span>
               </div>
               <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-8 rounded">
             Book Tickets
           </button>
           </div>
            </div>
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/doctor-et00305742-02-02-2021-03-30-24.jpg"
            alt="poster"
            className="w-full h-full absolute bg-gray-900 outline-none"
            />
        </div>
        </>
    );
};



export default MovieHero;
