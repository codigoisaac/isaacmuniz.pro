const script = `(function(){try{var t=localStorage.getItem('theme');var dark=t==='nightflight'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);var l=document.createElement('link');l.rel='icon';l.type='image/svg+xml';l.href=dark?'/favicons/favicon-dark.svg':'/favicons/favicon-light.svg';document.head.appendChild(l);}catch(e){}})();`;

export default function FaviconScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
