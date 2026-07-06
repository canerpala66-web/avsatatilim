import Link from "next/link";

export default function BrandMark({inverse=false,compact=false}:{inverse?:boolean;compact?:boolean}){
  return <Link href="/" className={`brand-lockup ${inverse?"brand-lockup-inverse":""}`} aria-label="Avşa Tatil Rehberi ana sayfa">
    <span className={`brand-symbol ${compact?"brand-symbol-compact":""}`} aria-hidden="true"><i/><b>≈</b></span>
    <span className="brand-copy"><strong>Avşa</strong><small>ADA REHBERİ</small></span>
  </Link>;
}
