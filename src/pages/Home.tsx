import React from "react";
import Image from "../components/Image";
import profile from "../images/Profile.jpeg";

function Home() {
  return (
    <>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
      <div className="p-3 mb-2 bg-secondary text-white text-center">
        <Image className="profile-img" src={profile}></Image>
        <h1>Hello I'm Max Hartfield!</h1>
        <h3>
          I am a Computer Science major at the University of Texas at Austin.
        </h3>
        <h3>
          I am looking for a software engineering internship for summer 2024.
        </h3>
        <h3>
          Use the navigation bar and look at my projects and achievements!
        </h3>
      </div>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}

export default Home;
