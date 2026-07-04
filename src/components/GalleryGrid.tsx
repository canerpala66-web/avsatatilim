import { hotelGallery } from "@/data/site";
import SiteImage from "./SiteImage";

export default function GalleryGrid(){return <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] md:auto-rows-[200px]">{hotelGallery.map((item,i)=><SiteImage src={item.src} alt={item.alt} sizes={i===0?"(max-width: 768px) 100vw, 50vw":"(max-width: 768px) 50vw, 25vw"} key={item.src} className={`rounded-2xl ${i===0?"col-span-2 row-span-2":""}`}><div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/45 via-transparent to-transparent"/><span className="absolute z-[2] bottom-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-[10px] font-bold text-[#073b4c]">{item.label}</span></SiteImage>)}</div>}
