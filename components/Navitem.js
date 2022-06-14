import Link from 'next/link'
import React from 'react'


const Navitem = ({href, text, active}) => {
  return (
    <Link href={href}>
        <a
        className={`
           nav__link ${active ? "active" : ""}
        `}
    
       >
           {text}
       </a>
    </Link>
  );
};

export default Navitem