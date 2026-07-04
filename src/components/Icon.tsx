export function Icon({ name, size=20 }: { name: "arrow"|"phone"|"whatsapp"|"calendar"|"users"|"check"|"map"|"menu"|"close"; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>, phone:<path d="M5 4h4l2 5-3 2c1 3 3 5 6 6l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-1 2-1Z"/>,
    whatsapp:<><path d="M20 11.5a8 8 0 0 1-12 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8c.5 3 2 4.5 5 5"/></>, calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></>, users:<><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6M16 5c3 0 4 4 2 6M17 14c3 .5 4 2 4 5"/></>, check:<path d="m5 12 4 4L19 6"/>, map:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>, menu:<path d="M4 7h16M4 12h16M4 17h16"/>, close:<path d="m6 6 12 12M18 6 6 18"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{paths[name]}</svg>;
}
