import { memo } from "react";

const Button = ({ children }) => {
    
    let buttonCss = 'h-20 w-[25%] m-0 bg-slate-100 text-xl font-semibold border-2 border-b-zinc-800';
    
    if(children === '0'){
        buttonCss = 'h-20 w-[50%] m-0 bg-slate-100 text-xl font-semibold border-2 border-b-zinc-800';
    }
  return (
    <button className={buttonCss}>
      {children}
    </button>
  );
};

export default memo(Button);
