type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  value?: any;
  onChange?: (arg: any) => void;
};

export const Input = ({
  name,
  label,
  type = "text",
  placeholder,
  error,
  disabled = false,
  required = false,
  pattern,
  value,
  onChange,
  ...otherProps
}: InputProps) => {
  let style =
    "w-full h-[48px] pl-3 rounded-[8px] my-1 border border-[#D8E2EE] placeholder-[#D8E2EE] outline-none focus:border-secondary duration-500 disabled:cursor-not-allowed disabled:opacity-70";
  return (
    <div className="w-full mb-2">
      <label className="block font-semibold capitalize text-md" htmlFor={name}>
        {label}
      </label>

      <input
        className={
          style + " invalid:focus:border-red-700 valid:border-secondary"
        }
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        required={required}
        pattern={pattern}
        {...otherProps}
      />

      {error && <div className="ml-2 text-red-800">{error}</div>}
    </div>
  );
};
