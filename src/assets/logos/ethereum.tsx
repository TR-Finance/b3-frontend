import * as React from 'react';

const ETHsvg = (props:React.SVGProps<SVGSVGElement>) => {
    return (
        /* eslint-disable react/jsx-props-no-spreading */
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M25.6238 0L25.2607 1.18492V35.5685L25.6238 35.9165L42.2477 26.4823L25.6238 0Z" fill="#343434"/>
        <path d="M25.6239 0L9 26.4823L25.6239 35.9166V19.2278V0Z" fill="#8C8C8C"/>
        <path d="M25.6238 38.9385L25.4192 39.1779V51.4261L25.6238 52L42.2576 29.509L25.6238 38.9385Z" fill="#3C3C3B"/>
        <path d="M25.6239 51.9998V38.9383L9 29.5088L25.6239 51.9998Z" fill="#8C8C8C"/>
        <path d="M25.6238 35.9164L42.2474 26.4824L25.6238 19.2279V35.9164Z" fill="#141414"/>
        <path d="M9.00012 26.4824L25.6238 35.9165V19.228L9.00012 26.4824Z" fill="#393939"/>
      </svg>
    );
}

export default ETHsvg;