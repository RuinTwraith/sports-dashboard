import { useState } from 'react';
import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  classes?: string;
};

export default function Accordion(props: Props) {
  const { title, children, defaultOpen = false, classes = '' } = props;

  const [open, setOpen] = useState(!!defaultOpen);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`w-full border rounded ${classes}`}>
      <div
        className="header w-full flex justify-between cursor-pointer bg-slate-200 p-2"
        onClick={handleClick}
      >
        <h3>{title}</h3> <button>{open ? '△' : '▽'}</button>
      </div>
      {open && <div className="bg-white p-2">{children}</div>}
    </div>
  );
}
