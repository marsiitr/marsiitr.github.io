import React, { useState, useEffect, useRef } from 'react';

const AnimatedConstructionLogo = () => {
  const [config, setConfig] = useState({
    theme: 'system',
    delay: 1,
    cross: 2.8,
    crossd: 0,
    dot: 4.4,
    dotd: 0.8,
  });
  
  const [showControls, setShowControls] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = config.theme;
    root.style.setProperty('--base-delay', config.delay);
    root.style.setProperty('--cross-delay', config.crossd);
    root.style.setProperty('--cross-speed', config.cross);
    root.style.setProperty('--dot-delay', config.dotd);
    root.style.setProperty('--dot-speed', config.dot);
  }, [config]);

  const reanimate = () => {
    if (headerRef.current) {
      const current = headerRef.current.innerHTML;
      headerRef.current.innerHTML = '';
      requestAnimationFrame(() => {
        headerRef.current.innerHTML = current;
      });
    }
  };

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');
        
        :root {
          --cable: color-mix(in lch, canvasText, canvas 35%);
          --claw: color-mix(in lch, canvasText, canvas 15%);
          --head: color-mix(in lch, canvasText, canvas 25%);
          --font-size-min: 16;
          --font-size-max: 20;
          --font-ratio-min: 1.2;
          --font-ratio-max: 1.33;
          --font-width-min: 375;
          --font-width-max: 1500;
          --delay: 1s;
          --speed: 2.4s;
        }

        html {
          color-scheme: light dark;
        }

        [data-theme='light'] {
          color-scheme: light only;
        }

        [data-theme='dark'] {
          color-scheme: dark only;
        }

        .animated-construction-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: transparent;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif, system-ui;
          pointer-events: none;
          opacity: 0.7;
          z-index: 1;
        }

        .animated-construction-overlay::before {
          --size: 45px;
          --line: color-mix(in hsl, canvasText, transparent 70%);
          content: '';
          height: 100vh;
          width: 100vw;
          position: absolute;
          background: linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size),
                      linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size);
          mask: linear-gradient(-20deg, transparent 50%, white);
          top: 0;
          transform-style: flat;
          pointer-events: none;
          z-index: -1;
        }

        .fluid {
          --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
          --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
          --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
          --fluid-type: clamp(
            (var(--fluid-min) / 16) * 1rem,
            ((var(--fluid-min) / 16) * 1rem) - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) + (var(--fluid-preferred) * var(--variable-unit, 100vi)),
            (var(--fluid-max) / 16) * 1rem
          );
          font-size: var(--fluid-type);
        }

        .tagline {
          --font-level: 6;
          height: 1em;
          overflow: visible !important;
        }

        .construct {
          animation: slide-in var(--speed) var(--delay) ease-out both;
        }
        
        .claw {
          animation: slide-out var(--speed) var(--delay) ease-in both;
        }
        
        .claw path {
          animation: let-go var(--speed) var(--delay) ease-out both;
        }

        .construct--horizontal {
          --delay: calc((var(--base-delay, 1) + var(--cross-delay, 1)) * 1s);
          --speed: calc(var(--cross-speed, 1) * 1s);
        }
        
        .construct--vertical {
          --delay: calc((var(--base-delay, 1) + var(--dot-delay, 1)) * 1s);
          --speed: calc(var(--dot-speed, 1) * 1s);
        }

        @keyframes let-go {
          0%, 48% { rotate: var(--start); }
          50%, 100% { rotate: var(--end); }
        }

        @keyframes slide-in {
          0% { transform: translate(var(--x, 0), var(--y, 0)); }
          40%, 100% { transform: translate(0, 0); }
        }

        @keyframes slide-out {
          0%, 60% { transform: translate(0, 0); }
          100% { transform: translate(var(--x, 0), var(--y, 0)); }
        }

        .construct, .claw, .cross, .dot, .claw path {
          transform-box: fill-box;
        }

        .construct--horizontal { --x: -100vmax; }
        .construct--vertical { --y: -150vmax; }

        .claw--horizontal { transform-origin: 50% 50%; }

        .claw path { stroke: var(--claw); }
        .claw line { stroke: var(--cable); }
        .claw circle { fill: var(--head); stroke: var(--head); }

        .claw--vertical path:nth-of-type(1) {
          transform-origin: 0 0;
          rotate: -25deg;
          --start: 0;
          --end: -25deg;
        }
        .claw--vertical path:nth-of-type(2) {
          transform-origin: 100% 0;
          rotate: 25deg;
          --start: 0;
          --end: 25deg;
        }
        .claw--horizontal path:nth-of-type(1) {
          transform-origin: 0 100%;
          rotate: 4deg;
          --start: 4deg;
          --end: -25deg;
        }
        .claw--horizontal path:nth-of-type(2) {
          transform-origin: 0 100%;
          rotate: -4deg;
          --start: -4deg;
          --end: 25deg;
        }
      `}</style>

      <div className="animated-construction-overlay">
        {/* Main Content */}
        <main className="h-full w-full absolute inset-0 flex justify-center" style={{alignItems: 'flex-start', paddingTop: '24vh'}}>
          <header ref={headerRef} className="relative flex flex-col items-center justify-center w-full">
            <svg
              className="tagline fluid mx-auto block"
              viewBox="1521 1500 882 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{width: '40%', height: 'auto', maxWidth: '40%', display: 'block', margin: '0 auto'}}
            >
              <path
                fill="currentColor"
                d="M1548.5 1597c-5.2 0-9-1.2-11.4-3.5-2.3-2.4-3.5-6.1-3.5-11.2v-48.6h12.3v47.5c0 2.3.5 4 1.5 5 1 .8 2.6 1.3 4.8 1.3h7.2v9.5h-11ZM1568.4 1597v-68.2h12.3v28.7h-1.5c.5-3 1.5-5.4 3-7.3 1.6-1.9 3.5-3.3 5.7-4.2 2.3-1 4.7-1.4 7.4-1.4 3.8 0 7 .8 9.5 2.5 2.6 1.6 4.6 3.9 5.9 6.8 1.3 3 2 6.3 2 10.2v32.9h-12.3v-30c0-4.1-.7-7.2-2.1-9.3-1.4-2-3.6-3.1-6.6-3.1-3.4 0-6 1-8 3.2s-3 5.4-3 9.5v29.7h-12.3ZM1647 1598.2c-5 0-9.5-1.1-13.3-3.3a22.5 22.5 0 0 1-8.7-9.4c-2-4-3.1-8.8-3.1-14.1 0-5.4 1-10 3-14 2.1-4 5-7.2 8.7-9.5 3.8-2.2 8.2-3.3 13.2-3.3 4.8 0 9 1 12.7 3.3 3.7 2.1 6.6 5.3 8.6 9.4 2 4 3 9 3 14.7v2.8h-36.4c.2 4.5 1.4 7.9 3.6 10.2a12 12 0 0 0 8.8 3.4c2.8 0 5-.6 6.9-1.9 1.8-1.2 3-3 3.8-5.2l12.6.7c-1.4 5-4.2 9-8.4 11.8-4 3-9 4.4-15 4.4Zm-12.3-31.6h23.7c-.3-4.2-1.5-7.3-3.6-9.2-2.1-2-4.8-3.1-8-3.1-3.3 0-6 1-8.2 3.2a15.2 15.2 0 0 0-4 9ZM1726.5 1598.2a23.2 23.2 0 0 1-22.2-12.7c-2-4-3-8.8-3-14.1 0-5.5 1-10.2 3-14.1 2.2-4 5.1-7.2 8.9-9.3a26 26 0 0 1 13.3-3.4c5 0 9.5 1.1 13.3 3.4a22 22 0 0 1 8.7 9.3c2.1 4 3.2 8.6 3.2 14 0 5.5-1 10.2-3.2 14.2-2 4-5 7.2-8.7 9.4a26 26 0 0 1-13.3 3.3Zm0-10c4 0 7-1.5 9.2-4.4 2.1-3 3.2-7.1 3.2-12.4 0-5.3-1-9.4-3.2-12.3-2.2-3-5.2-4.5-9.2-4.5-4 0-7 1.5-9.2 4.5-2.1 3-3.2 7-3.2 12.3 0 5.3 1 9.4 3.2 12.4 2.2 2.9 5.3 4.4 9.2 4.4ZM1761.2 1597v-51.3h11.1l.5 14.4-1.5-.5a19 19 0 0 1 3.2-8.7c1.6-2.2 3.6-3.8 5.9-4.8 2.3-1 4.8-1.5 7.6-1.5 3.7 0 6.9.8 9.5 2.5 2.6 1.7 4.6 4 6 6.9 1.3 2.9 2 6.2 2 10v33H1793v-29c0-2.9-.3-5.3-.8-7.3-.6-2-1.6-3.5-2.9-4.5-1.3-1-3-1.6-5.2-1.6a9.9 9.9 0 0 0-7.9 3.4c-1.9 2.3-2.8 5.7-2.8 10v29h-12.3ZM1839.8 1598.2c-5.1 0-9.6-1.1-13.4-3.3a22.5 22.5 0 0 1-8.7-9.4c-2-4-3-8.8-3-14.1 0-5.4 1-10 3-14s5-7.2 8.6-9.5c3.8-2.2 8.2-3.3 13.2-3.3 4.9 0 9.1 1 12.8 3.3 3.7 2.1 6.5 5.3 8.5 9.4 2 4 3 9 3 14.7v2.8h-36.4c.3 4.5 1.5 7.9 3.6 10.2a12 12 0 0 0 8.9 3.4c2.7 0 5-.6 6.8-1.9 1.8-1.2 3.1-3 3.8-5.2l12.6.7c-1.4 5-4.2 9-8.3 11.8-4.1 3-9.1 4.4-15 4.4Zm-12.4-31.6h23.7c-.2-4.2-1.4-7.3-3.5-9.2-2.1-2-4.8-3.1-8.1-3.1s-6 1-8.2 3.2a15.2 15.2 0 0 0-3.9 9ZM1907.8 1597l-15.5-51.3h12.6l10 37.4 10.2-37.4h10.8l10.4 37.4 10-37.4h12.5l-15.4 51.3h-12.7l-10.2-34.4-10 34.4h-12.7ZM1976.6 1597v-68.2h12.3v28.7h-1.5c.5-3 1.5-5.4 3-7.3 1.6-1.9 3.5-3.3 5.7-4.2 2.2-1 4.7-1.4 7.4-1.4 3.8 0 7 .8 9.5 2.5 2.6 1.6 4.6 3.9 5.8 6.8 1.4 3 2 6.3 2 10.2v32.9h-12.2v-30c0-4.1-.7-7.2-2.1-9.3-1.4-2-3.7-3.1-6.7-3.1-3.3 0-6 1-8 3.2s-2.9 5.4-2.9 9.5v29.7h-12.3ZM2055.3 1598.2a23.2 23.2 0 0 1-22.2-12.7c-2-4-3-8.8-3-14.1 0-5.5 1-10.2 3-14.1 2.2-4 5.1-7.2 8.9-9.3a26 26 0 0 1 13.3-3.4c5 0 9.5 1.1 13.3 3.4a22 22 0 0 1 8.7 9.3c2.1 4 3.2 8.6 3.2 14 0 5.5-1 10.2-3.2 14.2-2 4-5 7.2-8.7 9.4a26 26 0 0 1-13.3 3.3Zm0-10c4 0 7-1.5 9.1-4.4 2.2-3 3.3-7.1 3.3-12.4 0-5.3-1-9.4-3.3-12.3-2-3-5.1-4.5-9-4.5-4 0-7.1 1.5-9.3 4.5-2.2 3-3.3 7-3.3 12.3 0 5.3 1.1 9.4 3.3 12.4 2.2 2.9 5.3 4.4 9.2 4.4ZM2141.1 1598.2c-3.5 0-6.7-.8-9.4-2.4a16 16 0 0 1-6.1-6.4l-.3 7.6h-11.7v-68.2h12.3v24.2c1.4-2.3 3.4-4.3 6-6 2.6-1.6 5.7-2.4 9.2-2.4 4.5 0 8.3 1.1 11.5 3.4 3.2 2.1 5.7 5.2 7.4 9.3a34 34 0 0 1 2.7 14c0 5.5-.9 10.3-2.7 14.3-1.7 4-4.2 7-7.4 9.3-3.3 2.2-7 3.3-11.5 3.3Zm-2.8-10c3.6 0 6.4-1.5 8.5-4.4 2.1-3 3.2-7.2 3.2-12.4 0-5.3-1-9.5-3.2-12.4-2-3-4.8-4.4-8.4-4.4-2.6 0-4.8.6-6.8 2a12.3 12.3 0 0 0-4.3 5.7c-1 2.5-1.4 5.5-1.4 9s.4 6.5 1.4 9.1a13 13 0 0 0 4.3 5.8c1.9 1.3 4.1 2 6.8 2ZM2189.2 1598.2c-5.2 0-9.3-1.7-12.4-5.1a21 21 0 0 1-4.5-14.3v-33h12.3v29.9c0 4.3.7 7.5 2 9.5 1.5 2 3.8 3 6.7 3 3.3 0 5.9-1.1 7.7-3.3 1.8-2.2 2.8-5.5 2.8-9.7v-29.5h12.2v51.3h-11.2l-.3-14.1 1.6.5c-.8 4.8-2.6 8.5-5.5 11a16.8 16.8 0 0 1-11.4 3.8ZM2228.6 1597v-51.3h12.3v51.3h-12.3ZM2266 1597c-3.7 0-6.7-1-9-2.9-2.2-1.9-3.3-5-3.3-9.2v-56h12.3v54.8c0 1.2.3 2.2 1 2.8.7.7 1.7 1 2.9 1h3.7v9.5h-7.6ZM2299.7 1598.2c-4.3 0-8.1-1.1-11.3-3.3a21 21 0 0 1-7.3-9.3c-1.7-4-2.6-8.8-2.6-14.2 0-5.5.9-10.2 2.6-14.2 1.7-4 4.2-7.2 7.4-9.4 3.2-2.1 7-3.2 11.2-3.2 3.6 0 6.7.7 9.4 2.2 2.8 1.5 4.9 3.5 6.3 6.2v-24.2h12.3v68.2h-11.8l-.2-7.6a15 15 0 0 1-6.4 6.4c-2.8 1.6-6 2.4-9.6 2.4Zm3.8-10c2.5 0 4.7-.7 6.4-2 1.8-1.2 3.1-3.1 4-5.6 1-2.6 1.5-5.6 1.5-9.2 0-3.7-.5-6.8-1.5-9.2-.9-2.5-2.2-4.4-4-5.7-1.7-1.3-3.9-2-6.4-2-3.7 0-6.7 1.6-9 4.6-2.1 3-3.2 7-3.2 12.3 0 5 1 9.2 3.2 12.3 2.3 3 5.3 4.5 9 4.5ZM2361 1598.2c-5 0-9.3-.8-12.8-2.3a17.5 17.5 0 0 1-11-15l12.6-.6a9.8 9.8 0 0 0 3.3 6.2c1.8 1.5 4.5 2.3 8 2.3 2.9 0 5.1-.5 6.7-1.4 1.7-1 2.5-2.4 2.5-4.4 0-1.2-.3-2.1-.9-2.9a7 7 0 0 0-3.2-2c-1.6-.6-4-1.2-7.1-1.7-5.3-1-9.4-2-12.4-3.3-3-1.3-5.1-3-6.4-5-1.3-2-1.9-4.4-1.9-7.4 0-4.8 1.9-8.7 5.5-11.6 3.7-3 9.1-4.5 16.2-4.5 4.7 0 8.5.8 11.7 2.3 3 1.5 5.5 3.5 7.3 6.1 1.7 2.6 2.9 5.5 3.3 8.9l-12.4.5c-.3-1.7-.9-3.2-1.7-4.5-.8-1.3-2-2.2-3.4-2.9-1.4-.7-3-1-5-1-2.8 0-5 .6-6.5 1.7a5.6 5.6 0 0 0-2.2 4.6c0 1.4.3 2.5 1 3.4.7.9 1.8 1.6 3.3 2.2 1.6.5 3.6 1 6.2 1.4 5.4.9 9.6 2 12.7 3.3 3 1.3 5.3 3 6.6 5 1.3 2 2 4.4 2 7.2 0 3.3-1 6-2.8 8.4-1.8 2.3-4.3 4-7.7 5.2a34.7 34.7 0 0 1-11.5 1.8Z"
              />
              
              {/* Horizontal Construction */}
              <mask id="mask0" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="1522" width="1575" height="53">
                <rect y="1522" width="1575" height="53" fill="url(#paint0_linear)" />
              </mask>
              <g mask="url(#mask0)" className="construct construct--horizontal">
                <path className="cross" d="M1525.52 1555.24V1545.73H1559.41V1555.24H1525.52Z" fill="currentColor" />
                <g className="claw claw--horizontal">
                  <path d="M1530.5 1542.2L1515.5 1535.7L1499.25 1542.95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M1530.5 1558.7L1515.5 1565.2L1499.25 1557.95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="1501.5" cy="1550.7" r="9" transform="rotate(-90 1501.5 1550.7)" fill="#D9D9D9" stroke="currentColor" strokeWidth="5" />
                  <line x1="1494" y1="1550.5" x2="0" y2="1550.5" stroke="currentColor" strokeWidth="5" />
                </g>
              </g>

              {/* Vertical Construction */}
              <mask id="mask1" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="2203" y="0" width="67" height="1545">
                <rect x="2203" width="67" height="1545" fill="url(#paint1_linear)" />
              </mask>
              <g mask="url(#mask1)" className="construct construct--vertical">
                <path className="dot" d="M2228.42 1538.92V1527.98H2241.19V1538.92H2228.42Z" fill="currentColor" />
                <g className="claw claw--vertical">
                  <path d="M2243 1533.5L2249.5 1518.5L2242.25 1502.25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <path d="M2226.5 1533.5L2220 1518.5L2227.25 1502.25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="2234.5" cy="1504.5" r="9" fill="#D9D9D9" stroke="currentColor" strokeWidth="5" />
                  <line x1="2234.5" y1="1494" x2="2234.5" y2="0" stroke="currentColor" strokeWidth="5" />
                </g>
              </g>

              <rect x="2387" y="1585" width="13" height="12" fill="currentColor" />
              
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="1548.5" x2="1575" y2="1548.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.255" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="2236.5" y1="0" x2="2236.5" y2="1545" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.245" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
            
           
          </header>
        </main>
      </div>
    </>
  );
};

export default AnimatedConstructionLogo;