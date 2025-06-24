const Logo = () => (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="120"
  height="70"
  viewBox="0 0 100 40"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "#50E3C2", stopOpacity: 1 }} />
    </linearGradient>
  </defs>

  <text
    x="0"
    y="30"
    fontSize="20"
    fontWeight="bold"
    fill="url(#grad1)"      
    fontFamily="'Poppins', sans-serif"  
    letterSpacing="1"
  >
  Admin
  </text>
  
  <text
    x="0"
    y="30"
    fontSize="20"
    fontWeight="bold"
    fill="none"
    stroke="black"
    strokeWidth="0.5"
    fontFamily="'Poppins', sans-serif"
    letterSpacing="1"
    filter="url(#shadow)"
  >
    Admin
  </text>
</svg>

  );
  
  export default Logo;
  