import type { ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLElement>) => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-200 rounded h-full hover:bg-indigo-300 focus:bg-indigo-300 active:bg-indigo-400 outline-blue-500 ease-in duration-100 w-16"
    >
      {children}
    </button>
  );
};

export default Button;
