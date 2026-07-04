"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { Icon } from "./Icon";

export default function Header(){
  const [open,setOpen]=useState(false);
  const [compact,setCompact]=useState(false);
  useEffect(()=>{const onScroll=()=>setCompact(window.scrollY>36);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <>
    <div className="bg-gradient-to-r from-[#032f3e] via-[#075365] to-[#08747b] text-white/80 text-[11px] py-2.5"><div className="container flex justify-between"><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f3bd4d] rounded-full"/>Bağımsız Avşa tatil bilgileri & öne çıkan konaklama önerisi</span><a className="mobile-hide hover:text-white" href={`tel:${site.phone.replace(/\s/g,"")}`}>Bilgi hattı: {site.phone}</a></div></div>
    <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${compact?"bg-white/92 border-[#dce9e9] shadow-[0_10px_35px_#073b4c0c]":"bg-white/80 border-white/60"}`}>
      <div className={`container flex items-center justify-between gap-5 transition-all duration-300 ${compact?"h-[64px]":"h-[78px]"}`}>
        <Link href="/" className="flex items-center gap-3" aria-label="Avşa Tatil Rehberi ana sayfa"><span className={`rounded-[18px] bg-gradient-to-br from-[#dff7f4] to-[#fff3cb] text-[#007f91] grid place-items-center shadow-inner transition-all ${compact?"w-10 h-10 text-lg":"w-12 h-12 text-xl"}`}>☀</span><span><strong className="font-[Georgia] text-[20px] text-[#073b4c] block leading-none">Avşa Tatil</strong><small className="text-[#45808a] tracking-[.22em] text-[8px] font-black">REHBERİ</small></span></Link>
        <nav className="hidden xl:flex items-center gap-1 text-[12px] font-bold text-[#335861]">{navItems.map(([label,href])=><Link key={href} href={href} className="px-2.5 py-2 rounded-full hover:text-[#007f91] hover:bg-[#edf8f6] transition">{label}</Link>)}</nav>
        <div className="flex items-center gap-2"><Link href="/rezervasyon" className="btn btn-sun mobile-hide !min-h-[44px] !px-5">Müsaitlik Sor <Icon name="arrow" size={17}/></Link><button onClick={()=>setOpen(!open)} className="xl:hidden p-3 rounded-[16px] bg-[#eef7f6] text-[#073b4c] border border-[#d9ebe8]" aria-label={open?"Menüyü kapat":"Menüyü aç"} aria-expanded={open}><Icon name={open?"close":"menu"}/></button></div>
      </div>
      {open&&<nav className="xl:hidden container pb-5 grid grid-cols-2 gap-2 border-t border-[#e4efed] pt-4">{navItems.map(([label,href],i)=><Link onClick={()=>setOpen(false)} key={href} href={href} className={`p-3.5 rounded-2xl font-bold text-sm transition ${i===1||i===5?"bg-[#e7f7f3] text-[#076b79]":"bg-[#f6f9f7] text-[#274d56]"}`}>{label}</Link>)}<Link onClick={()=>setOpen(false)} href="/rezervasyon" className="col-span-2 btn btn-sun !rounded-2xl mt-1">Rezervasyon Talebi Gönder</Link></nav>}
    </header>
  </>;
}
