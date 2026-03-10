import logoPaths from "../../../imports/svg-1vzdo6xjgw";

interface LogoSvgProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Shared logo component used by Navbar and Footer.
 * Change the SVG paths import here to update the logo everywhere.
 */
export function LogoSvg({ color, className = "h-7 w-auto", style }: LogoSvgProps) {
  const iconColor = color ?? "#00A82D";
  const textLightColor = color ?? "#F9F9F9";
  const textGreenColor = color ?? "#00A82D";

  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 790 72">
      {/* TM Icon */}
      <path d={logoPaths.p8ca1240} fill={iconColor} />
      <path d={logoPaths.p16802000} fill={iconColor} />
      <path d={logoPaths.p162a970} fill={iconColor} />
      {/* Text */}
      <g transform="translate(105, 0)">
        <path d={logoPaths.p3cdcad40} fill={textLightColor} />
        <path d={logoPaths.p114ebf1} fill={textGreenColor} />
        <path d={logoPaths.peb1b300} fill={textLightColor} />
      </g>
    </svg>
  );
}

/** Icon-only version (no text) for mobile */
export function LogoIconSvg({ color, className = "h-8 w-auto", style }: LogoSvgProps) {
  const iconColor = color ?? "#00A82D";

  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 88 67.7">
      <path d={logoPaths.p8ca1240} fill={iconColor} />
      <path d={logoPaths.p16802000} fill={iconColor} />
      <path d={logoPaths.p162a970} fill={iconColor} />
    </svg>
  );
}
