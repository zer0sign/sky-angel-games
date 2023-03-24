import ParachuteImage from "../Assets/Images/parachute.png";
import "../Assets/Styles/ParachuteStyles.css";

function Parachute({ children, duration = 3000, delay = 0 }) {
  return (
    <div
      className="falling-animation"
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      <img
        src={ParachuteImage}
        alt="ParachuteImage"
        style={{
          width: "7%",
          zIndex: 50,
          position: "absolute",
        }}
      />
    </div>
  );
}

export default Parachute;
