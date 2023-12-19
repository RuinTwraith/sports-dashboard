type Props = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  small?: boolean;
};

const TextField = ({ value, onChange, small }: Props) => {
  return (
    <input
      className={`bg-gray-200 p-2 rounded mb-2 focus:bg-gray-100 outline-blue-500 ease-in duration-100 ${
        small && 'w-20'
      }`}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
