import type { Metadata } from "next"; import GuideLayout from "@/components/GuideLayout"; import { siteImages } from "@/data/site";
export const metadata:Metadata={title:"Avşa Adası Rehberi: Plajlar, Gezi ve Tatil",description:"Avşa nerede, nasıl gidilir, nerede kalınır? Plajlar, gezilecek yerler, aile tatili, yeme içme ve en uygun dönem rehberi.",alternates:{canonical:"/avsa-rehberi"}};
export default function Page(){return <GuideLayout eyebrow="Adayı keşfedin" title="Avşa Adası Tatil Rehberi" description="Ulaşımdan plajlara, konaklamadan akşam yürüyüşlerine kadar tatilinizi adım adım planlayın." featureImage={siteImages.avsaVineyards} sections={[
  {title:"Avşa nerede, nasıl gidilir?",body:"Balıkesir’in Marmara ilçesine bağlı Avşa’ya İstanbul, Erdek ve Tekirdağ yönlerinden sezonluk deniz bağlantılarıyla ulaşılabilir. Seferleri her zaman resmi kanaldan kontrol edin."},
  {title:"Avşa’da nerede kalınır?",body:"Merkez; çarşı ve sahil yaşamına yakınlığıyla, koy çevreleri ise daha sakin ritmiyle öne çıkar. Aileler havuz, oda kapasitesi ve plaja erişimi birlikte değerlendirmelidir."},
  {title:"Plajlar ve koylar",body:"Merkez Plajı kolay erişim; Çınar, Karadut, Altınkum, Manastır ve Tavşanlı çevresi ise farklı kıyı deneyimleri sunar.",points:["Merkez Plajı","Çınar Koyu","Altınkum","Karadut ve Manastır"]},
  {title:"Gezilecek yerler",body:"Sahil yolu, Avşa Çarşısı, Yiğitler Köyü ve koy rotaları birkaç güne yayılan rahat bir planla keşfedilebilir."},
  {title:"Aile tatili ve gece hayatı",body:"Merkez akşamları canlı olabilir. Çocuklu aileler konaklama seçerken gürültü düzeyini, yürüme rotasını ve tesis içi olanakları sormalıdır."},
  {title:"Yeme içme ve en uygun dönem",body:"Deniz ürünleri, ev yemekleri ve sahil atıştırmalıkları yaygındır. Temmuz–ağustos hareketli; haziran ve eylül görece sakin bir deneyim sunabilir."}
]}/>}
