const Logo = ({ color = "currentColor", className = "", ...props }) => {
  return (
    <svg
      viewBox="0 0 65.635789 81.352625"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(-5353.4139,594.17151)">
        <path
          style={{ fill: "inherit" }}
          d="m 5402.6404,-594.17148 -16.4084,16.27028 v 16.27022 4.9e-4 16.27029 l 16.4084,-16.27029 v -16.27071 z m 0,32.54099 v 16.27029 9.4e-4 16.27019 16.27021 h 5e-4 l 16.4086,-16.27021 v -16.27118 -16.27029 -16.27068 z m -16.4084,16.27029 h -16.4086 -5e-4 v 9.4e-4 16.27019 h 16.4091 z m 0,-32.541 h -16.4091 l -16.4091,16.27071 h 16.4091 z"
        />
      </g>
    </svg>
  );
};

export default Logo;
