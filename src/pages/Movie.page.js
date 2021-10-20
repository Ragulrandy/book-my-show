

import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import {BiCameraMovie} from "react-icons/bi";

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

const Movie = () => {
  return(
    <>
    <MovieHero />
    <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
    <div className="flex flex-col item-start gap-3">
    <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
    <p>Varun is a military doctor who visits Chennai and gets caught up in the pursuit of a missing girl. How Varun and six others take on human/organ trafficking lords forms the rest of the story.</p>
    </div>
    <div className="my-8">
    <hr />
    </div>

    <div className="flex flex-col item-start gap-3">
    <h1 className="text-gray-800 font-bold text-2xl ">Applicable Offers</h1>
    <div className="flex item-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
    <div className="w-8 h-8">
    <BiCameraMovie className="w-full h-full" />
    </div>

    <div className="flex flex-col item-start">
    <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
    <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
    </div>


    </div>

    <div className="my-4">
    <div>
    <h3 className="text-gray-800 font-bold text-2xl">Cast</h3>
    </div>

    <div className="flex flex-row gap-8">
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/priyanka-arul-mohan-1095858-30-10-2018-10-24-47.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>priyanka</h3>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sivakarthikeyan-1042969-18-09-2017-03-37-23.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>siva karthikeyan</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/yogi-babu-1055754-24-03-2017-16-16-46.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>yogi babu</h3>
    </div>

    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/vinay-rai-13262-24-03-2017-13-59-03.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>vinay rai</h3>
    </div>

    </div>
    </div>
    <hr />

    <div className="m-4">
    <div>
    <h3 className="text-gray-800 font-bold text-2xl">Crew</h3>
    </div>

    <div className="flex flex-row gap-8">
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/nelson-dilipkumar-1090825-14-08-2018-11-45-27.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>nelson</h3>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-32 h-32">
    <img
    src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/anirudh-ravichander-34897-24-03-2017-13-54-49.jpg"
    alt="img"
    className="rounded-full"/>
    </div>
    <h3>Aniruth</h3>
    </div>



    </div>
    </div>


    </div>

    </>
  );
};


export default Movie;
