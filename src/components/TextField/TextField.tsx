type Props = {
  /* value to bind with input */
  value: string | number;
  /* onChange function to bind with input */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /* small prop to render small textField */
  small?: boolean;
};

const TextField = ({ value, onChange, small }: Props) => {
  return (
    <input
      className={`bg-gray-200 p-2 rounded mb-2 focus:bg-gray-100 outline-blue-500 ease-in duration-100 ${
        small && "w-20"
      }`}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
