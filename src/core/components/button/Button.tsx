import { useMemo } from "react";
import "./button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};



const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled,
  variant,
}) => {


  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bt-primary";
      case "secondary":
        return "bt-secondary";
      default:
        return "bt-primary";
    }
  }, [variant])

  const getName = () => {
    return text.toUpperCase();
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bt ${variantClass}`}
    >
      {getName()}
    </button>
  );
};

export default Button;
