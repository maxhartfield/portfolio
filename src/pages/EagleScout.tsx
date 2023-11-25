import Image from "../components/Image";
import EagleScout1 from "../images/EagleScout.png";
import EagleScout2 from "../images/Eagle-Project.jpg";
function EagleScout() {
  return (
    <>
      <h1>Eagle Scout</h1>
      <Image className="info-img" src={EagleScout1}></Image>
      <h3>
        I have been part of scouting since I was a kid and it has tought me many
        skills like leadership, communication, and teamwork. After many years I
        finally achieved the highest rank, Eagle Scout.
      </h3>
      <Image className="info-img" src={EagleScout2}></Image>
      <h3>
        This is my finished Eagle Scout project. It was a 42 ft x 8 ft screening
        fence. It took a total of 14 hours to complete with me and my fellow
        scouts.
      </h3>
      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default EagleScout;
