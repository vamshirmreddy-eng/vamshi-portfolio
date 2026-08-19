// Progressive bottom blur — sits below the dock's own z-index so the dock stays sharp, while
// page content scrolling underneath the last ~120px gradually blurs into it.
export function BottomBlur() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 h-[120px] z-40 pointer-events-none"
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 55%, black 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.5) 55%, black 100%)',
        background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08))',
      }}
    />
  );
}
