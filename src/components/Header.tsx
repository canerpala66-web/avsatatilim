"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, site } from "@/data/site";
import { Icon } from "./Icon";
import BrandMark from "./BrandMark";

export default function Header(){
  const [open,setOpen]=useState(false);
  const [compact,setCompact]=useState(false);
  const pathname=usePathname();
  useEffect(()=>{const onScroll=()=>setCompact(window.scrollY>36);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  useEffect(()=>setOpen(false),[pathname]);
  return <>
    <div className="edition-bar"><div className="container flex justify-between"><span><i/> AVŞA / MARMARA • BAĞIMSIZ TATİL REHBERİ</span><a className="mobile-hide" href={`tel:${site.phone.replace(/\s/g,"")}`}>BİLGİ HATTI &nbsp; {site.phone}</a></div></div>
    <header className={`site-header ${compact?"site-header-compact":""}`}>
      <div className={`container header-inner ${compact?"header-inner-compact":""}`}>
        <BrandMark compact={compact}/>
        <nav className="desktop-nav" aria-label="Ana menü">{navItems.map(([label,href])=>{const active=href==="/"?pathname===href:pathname.startsWith(href);return <Link key={href} href={href} className={active?"is-active":""}>{label}</Link>})}</nav>
        <div className="flex items-center gap-2"><span className="header-coordinate mobile-hide">40°30′ K<br/><b>27°30′ D</b></span><Link href="/rezervasyon" className="btn btn-sun mobile-hide !min-h-[46px] !px-5">Müsaitlik Sor <Icon name="arrow" size={17}/></Link><button onClick={()=>setOpen(!open)} className="menu-button" aria-label={open?"Menüyü kapat":"Menüyü aç"} aria-expanded={open}><Icon name={open?"close":"menu"}/></button></div>
      </div>
      {open&&<nav className="mobile-menu container" aria-label="Mobil menü"><div className="mobile-menu-intro"><span>ADA MENÜSÜ</span><strong>Avşa’yı kendi ritminizde keşfedin.</strong></div><div className="mobile-menu-grid">{navItems.map(([label,href],i)=><Link key={href} href={href} className={pathname.startsWith(href)&&href!=="/"?"is-active":""}><span>{String(i+1).padStart(2,"0")}</span>{label}</Link>)}</div><Link href="/rezervasyon" className="btn btn-sun w-full !rounded-[18px]">Rezervasyon Talebi Gönder</Link></nav>}
    </header>
  </>;
}
