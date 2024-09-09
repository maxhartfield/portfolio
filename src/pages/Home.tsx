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
        <h3>I am a CS major at the University of Texas at Austin.</h3>
        <h3>Use the navigation bar to look at my projects and achievements!</h3>
      </div>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}

export default Home;
