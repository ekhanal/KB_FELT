interface ButtonProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  styles,
}) => {
  return (
    <button
      className={`w-full cursor-pointer rounded-md bg-pink-400 py-2 px-2 md:py-3 md:px-4  text-white transition hover:bg-opacity-90 ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
