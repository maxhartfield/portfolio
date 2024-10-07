import Image from "../components/Image";
import TTS1 from "../images/TTS.png";
import TTS2 from "../images/TTS2.png";
import TTS3 from "../images/TTS3.png";
import TTS4 from "../images/TTS4.png";
import TTS5 from "../images/TTS5.png";
import TTS6 from "../images/TTS6.png";
import TTS7 from "../images/TTS7.png";
import TTS8 from "../images/TTS8.png";
import TTS9 from "../images/TTS9.png";
import TTS10 from "../images/TTS10.png";
import BackButton from "../components/BackButton";

function TTS() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Trauma Support Website</h1>
      <h3>
        In my software engineering class at the University of Texas at Austin, I
        collaborated with 4 colleagues to build a dynamic React.js website
        hosted on AWS Amplify to aid trauma survivors. This project demonstrates
        my ability to develop full stack and utilize common software engineering
        practices like unit testing and continuous integration.
      </h3>
      <br className="spacer" />
      <h3>
        Here is the landing page. We utilized bootstrap to style the website and
        use components like the navigation bar.
      </h3>
      <Image className="info-img" src={TTS1}></Image>
      <h3>
        This is the about page showing my collaborators. We utilized GitLab api
        to display the number of commits, issues closed, and unit tests written
        per person.
      </h3>
      <Image className="info-img" src={TTS2}></Image>
      <h3>
        These are the therapists, trauma facilities, and trauma support group
        pages. In order to get the data for these page we utilized Puppeteer to
        programmatically scrape data from 3 data sources for 410 instances of
        therapists, 301 instances of trauma facilities, and 2851 instance of
        trauma support groups. We populated the data into a SQL database and
        implemented an API for the frontend to seamlessly retrieve the data from
        the backend.
      </h3>
      <Image className="info-img" src={TTS3}></Image>
      <Image className="info-img" src={TTS5}></Image>
      <Image className="info-img" src={TTS6}></Image>
      <h3>In the backend, we implemented searching for key words.</h3>
      <Image className="info-img" src={TTS10}></Image>
      <h3>
        We also implemented sorting and filtering by attributes of the data in
        all three pages
      </h3>
      <Image className="info-img" src={TTS7}></Image>
      <h3>
        We developed navigation through the instances at the bottom of the
        pages.
      </h3>
      <Image className="info-img" src={TTS4}></Image>
      <h3>
        We also integrated a global searching feature in the navigation bar at
        the top of all pages.
      </h3>
      <Image className="info-img" src={TTS8}></Image>
      <h3>
        Finally, we demonstrate how to use our API to create visualizations of
        the data stored in our database on the visualizations page.
      </h3>
      <Image className="info-img" src={TTS9}></Image>
      <h3>
        Ultimately, this was a great project to expand my software engineering
        skills. We utilized many tools like AWS, Docker, Postman, Jest,
        Selenium, and more.
      </h3>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default TTS;
