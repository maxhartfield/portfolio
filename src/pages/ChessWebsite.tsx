import BackButton from "../components/BackButton";
import Image from "../components/Image";
import ChessWebsite2 from "../images/Chess-Website2.png";
import ChessWebsite3 from "../images/Chess-Website3.png";
import ChessWebsite4 from "../images/Chess-Website4.png";
import ChessWebsite5 from "../images/Chess-Website5.png";

function ChessWebsite() {
  return (
    <>
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <br className="spacer" />
      <BackButton />
      <h1>Chess Website</h1>
      <h3 className="mx-3 mx-md-5">
        Chess Website is a website that two people can play chess on using the
        same computer. I tought myself HTML, CSS, and JavaScript and made this
        website over the summer of 2023 using what I learned. This project was
        extremely fun to make since I play chess as a hobby. This project
        demonstrates my ability to utilize HTML, CSS, and JavaScript to create a
        complex website from scratch.
      </h3>
      <Image className="info-img" src={ChessWebsite2}></Image>
      <h3 className="mx-3 mx-md-5">
        The chess pieces are unicode characters. I implemented a user friendly
        design throughout this project with CSS. The possible moves for each
        piece are highlighted in green. The last move is highlighted in yellow.
        The clicked piece is highlighted in black. The hovered square is
        highlighted blue.
      </h3>
      <Image className="info-img" src={ChessWebsite3}></Image>
      <h3 className="mx-3 mx-md-5">
        The king is highlighted red when in check. A message is printed at the
        bottom upon checkmate, stalemate, and insufficient material.
      </h3>
      <Image className="info-img" src={ChessWebsite4}></Image>
      <h3 className="mx-3 mx-md-5">
        All the chess features like promotion, castling, en passant, pinned
        pieces, etc. are implemented.
      </h3>
      <Image className="info-img" src={ChessWebsite5}></Image>
      <h3 className="mx-3 mx-md-5">
        I have added a board editor, so it is possible to start playing from any
        position. I have also added a undo function that undos the last move.
      </h3>
      <br className="spacer" />
      <br className="spacer" />
    </>
  );
}
export default ChessWebsite;
