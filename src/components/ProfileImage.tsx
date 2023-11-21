import React from "react";
interface Props {
  src: string;
}
function Image({ src }: Props) {
  return <img className="small img-fluid" src={src} alt="" />;
}

export default Image;
