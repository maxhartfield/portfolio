import Image from "../components/Image";
import EagleScout1 from "../images/EagleScout.png";
import EagleScout2 from "../images/EagleScout2.png";
import EagleScout3 from "../images/Eagle-Project.jpg";
function EagleScout() {
  return (
    <>
      <h1>Eagle Scout</h1>
      <h3>
        I have been part of scouting since I was a kid and it has tought me many
        skills like leadership, communication, and teamwork. After many years I
        finally achieved the highest rank, Eagle Scout.
      </h3>
      <div className="spacer">.........</div>
      <Image className="info-img together" src={EagleScout1}></Image>

      <Image className="info-img together" src={EagleScout2}></Image>

      <div className="spacer">.........</div>
      <h3>
        This is my finished eagle scout project. It was a 42 ft x 8 ft screening
        fence located at Saint Andrew’s United Methodist Church in Plano. It
        took a total of 14 hours to complete with me and my fellow scouts.
        Building and designing this fence was an intricate task and took a great
        deal of effort. My eagle scout project demonstrates my ability to
        prepare, manage a budget, delagate tasks, communicate with my fellow
        scouts and my benificiary, etc.
      </h3>
      <div className="spacer">.........</div>
      <Image className="info-img" src={EagleScout3}></Image>
      <div className="spacer">.........</div>
      <Image className="info-img" src={EagleScout3}></Image>
      <div className="spacer">.........</div>
      <Image className="info-img" src={EagleScout3}></Image>

      <div className="spacer">.........</div>
      <div className="spacer">.........</div>
    </>
  );
}
export default EagleScout;
