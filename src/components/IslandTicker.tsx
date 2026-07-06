import Link from "next/link";

const items = [
  ["40°30′ K", "/avsa-rehberi"],
  ["Marmara Denizi", "/avsa-rehberi"],
  ["Koy rotaları", "/blog/avsa-plajlari-rehberi"],
  ["Ada ulaşımı", "/avsa-ulasim"],
  ["Aile tatili", "/blog/avsada-cocuklu-tatil-onerileri"],
  ["Havuzlu konaklama", "/havuz-aquapark"],
] as const;

export default function IslandTicker(){return <nav className="island-ticker" aria-label="Hızlı Avşa rehberleri"><div className="ticker-track">{items.map(([label,href],index)=><Link href={href} key={label}><span>{String(index+1).padStart(2,"0")}</span>{label}<i>✦</i></Link>)}</div></nav>}
