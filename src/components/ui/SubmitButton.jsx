// Button design inspired and amended from: https://codepen.io/astitva2009/pen/ExQeNxb
import styles from "./SubmitButton.module.css";
import PropTypes from "prop-types";

const SubmitButton = ({ onClick, children }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${styles.button}`}
        type="Send message"
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};
// Add default props
SubmitButton.defaultProps = {
  onClick: () => {}, // Prevents crash if not provided
  children: "Submit", // Default text
};

// Add PropTypes for better debugging
SubmitButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default SubmitButton;
