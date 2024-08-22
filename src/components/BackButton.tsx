import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <button className="back-button" onClick={handleBack}>
      &larr; Back
    </button>
  );
};

export default BackButton;
