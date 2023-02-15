type ButtonProps = {
  name: string;
  label: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  styles?: string;
};

export function Button({
  name,
  label,
  disabled,
  type = "button",
  onClick,
  styles,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={`font-medium bg-primary text-white rounded-lg capitalize w-full py-[10px] outline-none flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed transition shadow-sm ${styles}`}
      name={name}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {label}
    </button>
  );
}
