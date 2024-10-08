import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-primary back-button"
      onClick={() => navigate(-1)}
    >
      &#8592; Back
    </button>
  );
};

export default BackButton;
