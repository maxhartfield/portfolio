import Image from "../components/Image";
import profile from "../images/Profile.jpeg";

function Home() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <div className="p-3 mb-2 bg-secondary text-white text-center">
        <Image className="profile-img" src={profile}></Image>
        <h1>Hello I'm Max Hartfield!</h1>
        <h3>
          I am a CS major at the University of Texas at Austin graduating in May
          2025.
        </h3>
        <h3>I am looking for a software engineering full time job.</h3>
        <h3>
          Use the navigation bar and look at my projects and achievements!
        </h3>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default Home;
