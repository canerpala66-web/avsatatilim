import type { Metadata } from "next"; import GuideLayout from "@/components/GuideLayout"; import { siteImages } from "@/data/site";
export const metadata:Metadata={title:"Avşa’ya Nasıl Gidilir? İstanbul, Erdek, Tekirdağ",description:"İstanbul Avşa, Erdek Avşa ve Tekirdağ Avşa ulaşım seçenekleri; araçlı feribot ve deniz otobüsü planlama rehberi.",alternates:{canonical:"/avsa-ulasim"}};
export default function Page(){return <GuideLayout eyebrow="Ulaşım rehberi" title="Avşa’ya Nasıl Gidilir?" description="Kesin saat vermeden, doğru hattı seçmenize ve güncel seferi güvenle kontrol etmenize yardımcı olan ulaşım rehberi." featureImage={siteImages.avsaAerial} sections={[
  {title:"İstanbul’dan Avşa’ya ulaşım",body:"Yenikapı, Bostancı veya Avcılar gibi noktalardan sezonluk seçenekler gündeme gelebilir. Hatlar her sezon aynı olmayabilir; resmi taşıyıcı kanallarını kontrol edin."},
  {title:"Erdek’ten Avşa’ya feribot",body:"Erdek bağlantısı Güney Marmara’dan gelenler ve araçlı geçişi değerlendirenler için uygun olabilir. Araç kapasitesi ve bilet koşullarını önceden doğrulayın."},
  {title:"Tekirdağ’dan Avşa’ya ulaşım",body:"Trakya yönünden sezonluk deniz bağlantıları bulunabilir. Kalkış iskelesini, aracın kabul edilip edilmediğini ve dönüş seferini resmi kaynaktan teyit edin."},
  {title:"Araçlı mı, araçsız mı?",body:"Merkez odaklı kısa tatilde araç gerekmeyebilir. Koyları gezmek isteyenler için araç esneklik sunabilir; park ve feribot maliyetini de hesaba katın.",points:["Araç taşıma koşulu","Park bilgisi","Yerel minibüs ve taksi","Dönüş rezervasyonu"]},
  {title:"Güncel sefer uyarısı",body:"Sefer saatleri mevsim, hava ve işletme planına göre değişir. Yola çıkmadan hemen önce ilgili firmanın resmi internet sitesi veya satış kanalını kontrol edin."},
  {title:"Avşa’ya vardıktan sonra",body:"İskeleden otelinize yürüyüş veya yerel ulaşım seçeneğini önceden sorun. Ataş Aqua Otel rezervasyon talebinize tahmini varış saatinizi ekleyebilirsiniz."}
]}/>}
