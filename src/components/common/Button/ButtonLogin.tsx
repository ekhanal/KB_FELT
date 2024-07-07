import React from "react";
import { FaPlus as PlusIcon } from "react-icons/fa"; // Importing FaPlus icon

interface ButtonProps {
  title: string;
  onClickLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  styles?: string;
  FaPlus?: boolean;
}

const ButtonLogin: React.FC<ButtonProps> = ({
  title,
  onClickLogin,
  disabled,
  styles,
  FaPlus,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-md bg-blue-900  text-white transition hover:bg-opacity-90 ${styles}`}
      onClick={onClickLogin}
      disabled={disabled}
    >
      {FaPlus && <PlusIcon className="" />}{" "}
      {/* Conditionally rendering the icon */}
      {title}
    </button>
  );
};

export default ButtonLogin;
