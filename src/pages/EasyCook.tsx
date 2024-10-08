import Image from "../components/Image";
import cook from "../images/cook.png";
import BackButton from "../components/BackButton";

function EasyCook() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Easy Cook</h1>
      <h3 className="mx-3 mx-md-5">
        I participated in a hackathon where I built a mobile app help users
        track calories and generate recipes given ingredients or a specified
        meal/cuisine. I programmed in Dart and utilized Flutter and OpenAI API
        to make a unique and flexible experience for both IOS and Android users.
        Watch my demo:
      </h3>
      <br className="spacer" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hYcTRBI4TOw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default EasyCook;
