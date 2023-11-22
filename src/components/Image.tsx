import React from "react";
interface Props {
  src: string;
  className: string;
}
function Image({ src, className }: Props) {
  return <img className={className} src={src} alt="" />;
}

export default Image;
