import { useState } from 'react';
import type { ReactNode } from 'react';

type Props = {  
  /* title of the Accordion */
  title: string;
  /* children props */
  children: ReactNode;
  /* if true, opens the accordion at render */
  defaultOpen?: boolean;
  /* classes to add styles to the root of Accordion */
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
