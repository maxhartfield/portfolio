import React from "react";
interface Props {
  src: string;
}
function Image({ src }: Props) {
  return <img className="rounded-circle img-fluid" src={src} alt="" />;
}

export default Image;
