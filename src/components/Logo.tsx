/**
 * GenuVerity Logo Component
 * 
 * This component provides the GenuVerity logo using the actual designed logo image,
 * which works in all deployment environments (Figma Make, Vercel, etc.)
 */

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 180, height = 144 }: LogoProps) {
  return (
    <img
      src="/genuverity-logo.png"
      alt="GenuVerity - Constitutional AI Fact Checking"
      className={className}
      style={{
        width: width,
        height: height,
        objectFit: 'contain'
      }}
    />
  );
}

/**
 * Alternative: Logo with Shield Icon
 * Uncomment this version if you prefer a logo with an icon
 */
/*
export function Logo({ className, width = 200, height = 144 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield Icon *\/}
      <path
        d="M30 35L40 30L50 35V50C50 58 45 65 40 68C35 65 30 58 30 50V35Z"
        fill="#d2562d"
        stroke="#d2562d"
        strokeWidth="2"
      />
      <path
        d="M36 45L38.5 48L44 42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* GenuVerity Text *\/}
      <text
        x="100"
        y="55"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="36"
        fontWeight="700"
        textAnchor="middle"
        fill="currentColor"
      >
        GenuVerity
      </text>
      
      {/* Subtitle *\/}
      <text
        x="100"
        y="75"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="500"
        textAnchor="middle"
        fill="#d2562d"
        letterSpacing="1.5"
      >
        CONSTITUTIONAL AI FACT-CHECKING
      </text>
    </svg>
  );
}
*/
