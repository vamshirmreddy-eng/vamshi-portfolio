interface MarkerUnderlineProps {
  color?: string;
}

// Hand-drawn marker-stroke underline for section-heading accents. Two overlapping wavy
// paths (a wider faded one behind a tighter solid one) fake the uneven brush thickness
// a single fixed-width <path> can't produce on its own.
export function MarkerUnderline({ color = '#ff4d5a' }: MarkerUnderlineProps) {
  return (
    <svg
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute left-0 -bottom-1.5 w-full h-[12px] -z-10 pointer-events-none overflow-visible"
    >
      <path
        d="M4 8 C30 5, 60 10, 92 6 S150 9, 175 6 S192 8, 196 7"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <path
        d="M5 7 C35 5, 65 9, 98 6 S155 6, 195 7"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
