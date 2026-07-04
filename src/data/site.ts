export const site = {
  siteName: "Avşa Tatil Rehberi",
  siteUrl: "https://www.avsatatilrehberi.com.tr",
  phone: "0551 086 66 82",
  whatsappNumber: "905510866682",
  address: "Avşa Adası, Marmara / Balıkesir",
  mapUrl: "https://maps.google.com/?q=Avşa+Adası",
  socialLinks: { instagram: "#", facebook: "#" },
  hotelName: "Ataş Aqua Otel",
  hotelDescription: "Avşa Adası’nda aileler, çocuklu misafirler ve havuzlu konaklama arayanlar için öne çıkan tesis önerimiz.",
};

export const siteImages = {
  hero: {
    src: "/images/hotel/atas-aqua-otel-genel.webp",
    alt: "Ataş Aqua Otel havuz, aquapark ve tesis genel görünümü",
  },
  hotelExterior: {
    src: "/images/hotel/atas-aqua-otel-dis-cephe.webp",
    alt: "Ataş Aqua Otel dış cephe ve açık yüzme havuzu",
  },
  reception: {
    src: "/images/hotel/atas-aqua-otel-resepsiyon.webp",
    alt: "Ataş Aqua Otel resepsiyon ve karşılama alanı",
  },
  pool: {
    src: "/images/pool/atas-aqua-otel-havuz.webp",
    alt: "Ataş Aqua Otel açık yüzme havuzu ve dinlenme alanı",
  },
  swimmingPool: {
    src: "/images/pool/atas-aqua-otel-yuzme-havuzu.webp",
    alt: "Ataş Aqua Otel şezlonglu açık yüzme havuzu",
  },
  aquapark: {
    src: "/images/pool/atas-aqua-otel-aquapark.webp",
    alt: "Ataş Aqua Otel çocuklar için su kaydıraklı aquapark alanı",
  },
  nightPool: {
    src: "/images/pool/atas-aqua-otel-gece-havuz.webp",
    alt: "Ataş Aqua Otel gece aydınlatmalı havuz ve aquapark görünümü",
  },
  avsaSunset: {
    src: "/images/avsa/avsa-gunbatimi.webp",
    alt: "Avşa Adası sahilinde gün batımı ve Marmara Denizi",
  },
  avsaAerial: {
    src: "/images/avsa/avsa-adasi-havadan.webp",
    alt: "Avşa Adası ve kıyılarının havadan görünümü",
  },
  avsaHorizon: {
    src: "/images/avsa/avsa-marmara-ufku.webp",
    alt: "Avşa Adası açıklarında sakin Marmara Denizi ufku",
  },
  avsaVineyards: {
    src: "/images/avsa/avsa-baglari.webp",
    alt: "Avşa Adası bağları ve Marmara Denizi manzarası",
  },
} as const;

export const blogCategoryImages: Record<string,{src:string;alt:string}> = {
  "Avşa Rehberi": { src: "/images/blog/avsa-rehberi-kapak.webp", alt: "Avşa Adası bağları ve ada merkezi manzarası" },
  "Konaklama": { src: "/images/blog/avsa-gunbatimi-kapak.webp", alt: "Avşa Adası sahilinde gün batımı" },
  "Plajlar": { src: "/images/blog/avsa-plajlar-kapak.webp", alt: "Avşa Adası Marmara Denizi ufku" },
  "Ulaşım": { src: "/images/blog/avsa-ulasim-kapak.webp", alt: "Avşa Adası havadan görünümü ve kıyıları" },
  "Aile Tatili": { src: "/images/blog/avsa-gunbatimi-kapak.webp", alt: "Avşa Adası sahilinde aile tatili atmosferi" },
  "Yeme İçme": { src: "/images/blog/avsa-rehberi-kapak.webp", alt: "Avşa Adası bağları ve yerel ada manzarası" },
  "Tatil İpuçları": { src: "/images/blog/avsa-plajlar-kapak.webp", alt: "Avşa Adası çevresinde Marmara Denizi" },
  "Rezervasyon": { src: "/images/blog/avsa-gunbatimi-kapak.webp", alt: "Avşa Adası sahilinde gün batımı manzarası" },
};

export const hotelGallery = [
  { label: "Havuz ve tesis", ...siteImages.hero },
  { label: "Aquapark", ...siteImages.aquapark },
  { label: "Yüzme havuzu", ...siteImages.swimmingPool },
  { label: "Dış cephe", ...siteImages.hotelExterior },
  { label: "Gece havuzu", ...siteImages.nightPool },
  { label: "Resepsiyon", ...siteImages.reception },
] as const;

export const navItems = [
  ["Ana Sayfa", "/"], ["Avşa Otelleri", "/avsa-otelleri"], ["Ataş Aqua Otel", "/atas-aqua-otel"],
  ["Odalar", "/odalar"], ["Havuz & Aquapark", "/havuz-aquapark"], ["Avşa Rehberi", "/avsa-rehberi"],
  ["Blog", "/blog"], ["Ulaşım", "/avsa-ulasim"], ["İletişim", "/iletisim"]
] as const;

export const roomTypes = [
  { name: "Standart Havuz Manzaralı", capacity: "2–3 kişi", balcony: "Havuz manzaralı balkon", description: "Havuz cephesine bakan, çiftler ve küçük aileler için ferah standart oda.", image: "/images/rooms/standart-havuz-manzarali.webp", alt: "Ataş Aqua Otel standart havuz manzaralı oda", gallery: ["/images/rooms/standart-havuz-manzarali.webp", "/images/rooms/standart-havuz-manzarali-2.webp"] },
  { name: "Standart Yol Manzaralı", capacity: "2–3 kişi", balcony: "Yol manzaralı balkon", description: "Standart oda düzenini yol cephesinde tercih eden misafirler için.", image: "/images/rooms/standart-yol-manzarali.webp", alt: "Ataş Aqua Otel standart yol manzaralı oda", gallery: ["/images/rooms/standart-yol-manzarali.webp", "/images/rooms/standart-yol-manzarali-2.webp"] },
  { name: "Aile Odası Havuz Manzaralı", capacity: "4–5 kişi", balcony: "Havuz manzaralı balkon", description: "Çocuklu ailelerin birlikte konaklaması için havuz cepheli geniş oda.", image: "/images/rooms/aile-havuz-manzarali.webp", alt: "Ataş Aqua Otel havuz manzaralı aile odası", gallery: ["/images/rooms/aile-havuz-manzarali.webp", "/images/rooms/aile-havuz-manzarali-2.webp"] },
  { name: "Aile Odası Yol Manzaralı", capacity: "4–5 kişi", balcony: "Yol manzaralı balkon", description: "Kalabalık aileler için yol cephesinde geniş ve işlevsel oda düzeni.", image: "/images/rooms/aile-yol-manzarali.webp", alt: "Ataş Aqua Otel yol manzaralı aile odası", gallery: ["/images/rooms/aile-yol-manzarali.webp", "/images/rooms/aile-yol-manzarali-2.webp"] },
];

export const faqs = [
  ["Avşa’ya ne zaman gidilir?", "Deniz tatili için haziran–eylül dönemi tercih edilir. Temmuz ve ağustos daha hareketli; haziran ve eylül daha sakindir."],
  ["Ataş Aqua Otel çocuklu ailelere uygun mu?", "Tesis; havuz ve aquapark olanaklarıyla çocuklu ailelerin değerlendirebileceği konaklama seçeneklerinden biridir. Güncel kullanım koşullarını rezervasyon öncesinde sorun."],
  ["Rezervasyon nasıl yapılır?", "Formu doldurarak WhatsApp üzerinden müsaitlik isteği gönderebilir veya telefonla bilgi alabilirsiniz."],
  ["Avşa’ya araçla gidilebilir mi?", "Bazı feribot seferleri araç taşır. Hat ve sefer koşulları sezona göre değiştiğinden ilgili işletmenin güncel bilgisini kontrol edin."],
  ["Sefer saatleri nereden öğrenilir?", "Deniz ulaşımı saatleri değişebilir. Yolculuk öncesinde ilgili taşıyıcının resmi kanalını kontrol etmenizi öneririz."],
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
