import Image from "next/image";
import type { ReactNode } from "react";

export default function SiteImage({src,alt,className="",priority=false,sizes="(max-width: 768px) 100vw, 50vw",position="center",children}:{src:string;alt:string;className?:string;priority?:boolean;sizes?:string;position?:string;children?:ReactNode}){
  return <div className={`image-placeholder has-image relative overflow-hidden ${className}`}>
    <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-center" style={{objectPosition:position}}/>
    {children}
  </div>;
}
