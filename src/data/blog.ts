export type BlogSection = { heading: string; paragraphs: string[] };
export type BlogPost = {
  slug: string; title: string; metaTitle: string; metaDescription: string; excerpt: string;
  category: string; date: string; readingTime: string; keywords: string[]; sections: BlogSection[];
  relatedPosts: string[]; internalLinks: { label: string; href: string }[];
};

const topics = [
  ["avsa-adasi-tatil-rehberi","Avşa Adası Tatil Rehberi: İlk Kez Gidecekler İçin Detaylı Rehber","Avşa Rehberi","Avşa tatil rehberi,Avşa Adası tatili"],
  ["avsa-adasi-nerede-nasil-gidilir","Avşa Adası Nerede ve Nasıl Gidilir?","Ulaşım","Avşa nerede,Avşa’ya nasıl gidilir"],
  ["istanbuldan-avsa-adasina-nasil-gidilir","İstanbul’dan Avşa Adası’na Nasıl Gidilir?","Ulaşım","İstanbul Avşa ulaşım,Avşa İDO"],
  ["erdekten-avsaya-feribot-ulasim","Erdek’ten Avşa’ya Feribot ile Ulaşım Rehberi","Ulaşım","Erdek Avşa feribot,Erdek Avşa ulaşım"],
  ["tekirdagdan-avsaya-nasil-gidilir","Tekirdağ’dan Avşa’ya Nasıl Gidilir?","Ulaşım","Tekirdağ Avşa feribot,Tekirdağ Avşa ulaşım"],
  ["avsada-nerede-kalinir","Avşa’da Nerede Kalınır? Bölge ve Otel Seçim Rehberi","Konaklama","Avşa’da nerede kalınır,Avşa otel önerisi"],
  ["avsa-otelleri-secerken","Avşa Otelleri Seçerken Nelere Dikkat Edilmeli?","Konaklama","Avşa otelleri,Avşa otel seçimi"],
  ["avsada-aile-oteli-tavsiyeleri","Avşa’da Aile Oteli Arayanlar İçin Tavsiyeler","Aile Tatili","Avşa aile oteli,Avşa çocuklu aile oteli"],
  ["avsada-havuzlu-otel-avantajlari","Avşa’da Havuzlu Otel Tercih Etmenin Avantajları","Konaklama","Avşa havuzlu otel,Avşa havuzlu konaklama"],
  ["avsada-aquaparkli-otel-tatili","Avşa’da Aquaparklı Otel Tatili: Çocuklu Aileler İçin Rehber","Aile Tatili","Avşa aquaparklı otel,Avşa çocuk havuzlu otel"],
  ["avsada-cocuklu-tatil-onerileri","Avşa’da Çocuklu Tatil Yapacak Aileler İçin Öneriler","Aile Tatili","Avşa çocuklu tatil,Avşa aile tatili"],
  ["avsada-uygun-fiyatli-tatil","Avşa’da Uygun Fiyatlı Tatil Nasıl Planlanır?","Tatil İpuçları","Avşa uygun tatil,Avşa ekonomik otel"],
  ["avsada-erken-rezervasyon","Avşa’da Erken Rezervasyon Yapmanın Avantajları","Rezervasyon","Avşa erken rezervasyon,Avşa otel rezervasyon"],
  ["avsada-hafta-sonu-tatili","Avşa’da Hafta Sonu Tatili Planı","Tatil İpuçları","Avşa hafta sonu tatili,Avşa kısa tatil"],
  ["avsada-3-gunluk-tatil-rotasi","Avşa’da 3 Günlük Tatil Rotası","Avşa Rehberi","Avşa 3 günlük tatil,Avşa gezi planı"],
  ["avsa-plajlari-rehberi","Avşa Plajları Rehberi: Denize Girilecek Yerler","Plajlar","Avşa plajları,Avşa denize girilecek yerler"],
  ["avsa-merkez-plaji","Avşa Merkez Plajı Hakkında Bilmeniz Gerekenler","Plajlar","Avşa merkez plajı,Avşa sahil"],
  ["cinar-koyu-avsa","Çınar Koyu Rehberi","Plajlar","Çınar Koyu Avşa,Avşa Çınar Koyu"],
  ["karadut-koyu-avsa","Karadut Koyu Rehberi","Plajlar","Karadut Koyu Avşa,Avşa koyları"],
  ["manastir-koyu-avsa","Manastır Koyu ve Çevresi","Plajlar","Manastır Koyu Avşa,Avşa Manastır"],
  ["altinkum-plaji-avsa","Altınkum Plajı Rehberi","Plajlar","Altınkum Plajı Avşa,Avşa Altınkum"],
  ["tavsanli-koyu-avsa","Tavşanlı Koyu Rehberi","Plajlar","Tavşanlı Koyu Avşa,Avşa doğal koylar"],
  ["yigitler-koyu-gezi-rehberi","Yiğitler Köyü Gezi Rehberi","Avşa Rehberi","Yiğitler Köyü Avşa,Avşa gezilecek yerler"],
  ["avsa-sahil-yolu","Avşa Sahil Yolu: Akşam Yürüyüşü ve Tatil Atmosferi","Avşa Rehberi","Avşa Sahil Yolu,Avşa akşam gezisi"],
  ["avsa-carsisi","Avşa Çarşısı: Alışveriş, Yeme İçme ve Akşam Hayatı","Yeme İçme","Avşa Çarşısı,Avşa merkez"],
  ["avsada-gezilecek-yerler","Avşa’da Gezilecek Yerler Listesi","Avşa Rehberi","Avşa gezilecek yerler,Avşa gezi rehberi"],
  ["avsada-ne-yenir","Avşa’da Ne Yenir? Yeme İçme Rehberi","Yeme İçme","Avşa ne yenir,Avşa restoran"],
  ["avsada-kahvalti-aksam-yemegi","Avşa’da Kahvaltı ve Akşam Yemeği Önerileri","Yeme İçme","Avşa kahvaltı,Avşa akşam yemeği"],
  ["avsa-yaz-tatili-en-iyi-donem","Avşa’da Yaz Tatili İçin En İyi Dönem","Tatil İpuçları","Avşa ne zaman gidilir,Avşa yaz sezonu"],
  ["avsa-deniz-havuz-eglence","Avşa’da Deniz, Havuz ve Eğlenceyi Birleştiren Tatil Planı","Tatil İpuçları","Avşa deniz tatili,Avşa havuzlu tatil"],
  ["avsada-romantik-tatil","Avşa’da Romantik Tatil Planı","Tatil İpuçları","Avşa romantik tatil,Avşa çift oteli"],
  ["avsada-kalabalik-aile-konaklama","Avşa’da Kalabalık Aileler İçin Konaklama Tavsiyeleri","Aile Tatili","Avşa aile odası,Avşa kalabalık aile oteli"],
  ["avsa-tatil-bavul-listesi","Avşa Tatilinde Yanınıza Almanız Gerekenler","Tatil İpuçları","Avşa tatil hazırlığı,Avşa bavul listesi"],
  ["avsaya-ilk-kez-gidecekler","Avşa’da İlk Kez Tatil Yapacakların Bilmesi Gerekenler","Avşa Rehberi","Avşa ilk kez gidecekler,Avşa tatil önerileri"],
  ["avsa-otel-rezervasyon-sorulari","Avşa’da Otel Rezervasyonu Yapmadan Önce Sorulması Gereken Sorular","Rezervasyon","Avşa otel rezervasyon,Avşa otel soruları"],
  ["denize-yakin-otel-mi-havuzlu-otel-mi","Avşa’da Denize Yakın Otel mi, Havuzlu Otel mi?","Konaklama","Avşa denize yakın otel,Avşa havuzlu otel"],
  ["avsada-cocuk-aktiviteleri","Avşa’da Çocuklar İçin Eğlenceli Tatil Aktiviteleri","Aile Tatili","Avşa çocuk aktiviteleri,Avşa aile tatili"],
  ["avsada-bayram-tatili","Avşa’da Bayram Tatili Planlama Rehberi","Tatil İpuçları","Avşa bayram tatili,Avşa bayram otelleri"],
  ["avsa-yaz-rezervasyon-yogunlugu","Avşa’da Yaz Sezonunda Rezervasyon Yoğunluğu","Rezervasyon","Avşa yaz rezervasyon,Avşa otel doluluk"],
  ["atas-aqua-otel-kimler-icin-uygun","Ataş Aqua Otel Kimler İçin Uygun?","Konaklama","Ataş Aqua Otel,Avşa Ataş Aqua Otel,Avşa aile oteli"],
] as const;

const rich: Record<string, BlogSection[]> = {
  "avsa-adasi-tatil-rehberi": [
    { heading: "Avşa tatiline kısa bir bakış", paragraphs: ["Marmara Denizi’ndeki Avşa Adası, ulaşımı görece kolay, sahil yaşamı hareketli ve farklı bütçelere uygun seçenekleri olan bir yaz rotasıdır. İlk kez gelecekler için en doğru başlangıç; ulaşım, konaklama ve günlük rota kararlarını aynı plan içinde düşünmektir. Ada küçük görünse de merkez, koylar ve Yiğitler çevresi farklı tatil beklentilerine karşılık verir.", "Merkezde kalmak çarşıya, sahile ve yeme içme noktalarına yürümeyi kolaylaştırır. Daha sakin bir deneyim arayanlar koylara yakın bölgeleri değerlendirebilir. Çocuklu aileler ise plaja erişimin yanında tesis içindeki havuz, gölgelik alan ve oda düzeni gibi ayrıntılara da bakmalıdır."] },
    { heading: "Ne zaman gidilir?", paragraphs: ["Haziran ortasından eylül başına kadar deniz tatili öne çıkar. Temmuz ve ağustos sıcak, canlı ve yoğun; haziran ile eylül ise daha sakin olabilir. Bayram ve hafta sonlarında konaklama ile ulaşım talebi hızla yükseldiğinden planı erkenden netleştirmek rahat ettirir.", "Rüzgâr ve deniz koşulları gün içinde değişebilir. Bir koy için uygun olan gün, başka bir plaj için aynı sonucu vermeyebilir. Bu yüzden tek bir sahile bağlı kalmak yerine esnek bir günlük rota hazırlayın."] },
    { heading: "Konaklama seçerken", paragraphs: ["Sadece fiyatı değil, toplam tatil konforunu karşılaştırın. Oda kapasitesi, klima, kahvaltı düzeni, çocuklar için güvenli alan, plaja ve merkeze erişim sorulması gereken başlıklardır. Havuzlu bir tesis, denizin dalgalı olduğu saatlerde ailelere alternatif sunabilir.", "Avşa’da aile dostu ve havuzlu konaklama araştırıyorsanız Ataş Aqua Otel’i öne çıkan tesis önerimiz olarak inceleyebilirsiniz. Rezervasyon öncesinde güncel oda, hizmet ve kullanım koşullarını doğrudan tesisten doğrulamanızı öneririz."] },
    { heading: "İlk kez gelenler için küçük notlar", paragraphs: ["Güneş koruyucu, şapka, ince bir akşam üstlüğü ve rahat yürüyüş ayakkabısı bavulun temel parçalarıdır. Feribot saatleri sezona göre değişebilir; bileti ve dönüş planını ilgili taşıyıcının resmi kanalından kontrol edin. Merkez dışındaki koylar için ulaşım seçeneğini gitmeden öğrenin.", "İki veya üç günlük kısa bir ziyarette bir günü merkez ve sahil yoluna, bir günü koylara, kalan zamanı havuz ve dinlenmeye ayırmak dengeli bir başlangıç sağlar. Böylece tatil, yetişme telaşından çıkıp gerçekten dinlendirici hâle gelir."] },
  ],
  "avsa-adasi-nerede-nasil-gidilir": [
    { heading: "Avşa Adası nerede?", paragraphs: ["Avşa, Balıkesir’in Marmara ilçesine bağlı Marmara Denizi adalarından biridir. İstanbul, Tekirdağ ve Erdek yönlerinden deniz ulaşımı seçenekleriyle yaz aylarında sık tercih edilir. Yolculuk planında çıkış noktanız, araçla gidip gitmeyeceğiniz ve sezon yoğunluğu belirleyicidir.", "Ada üzerinde merkez ile farklı koylar arasında yerel ulaşım seçenekleri bulunabilir. Konaklayacağınız tesisin iskele transferi veya yol tarifi bilgisini seyahatten önce istemek, varış gününü kolaylaştırır."] },
    { heading: "Hangi rotayı seçmeli?", paragraphs: ["İstanbul’dan gelen yolcular deniz otobüsü hatlarını; Trakya’dan gelenler Tekirdağ çevresindeki seçenekleri; araçla veya Güney Marmara’dan gelenler ise Erdek bağlantısını değerlendirebilir. Her hattın araç kabulü, bagaj kuralı ve yolculuk süresi farklı olabilir.", "Kesin sefer saati vermek doğru olmaz; programlar mevsim, hava ve işletme kararlarına göre değişir. Seyahatten hemen önce ilgili taşıyıcının resmi internet sitesi ya da satış kanalı üzerinden saatleri kontrol edin."] },
    { heading: "Bilet ve varış planı", paragraphs: ["Yoğun yaz haftalarında gidiş kadar dönüş biletini de erkenden planlayın. İskeleye son dakikada ulaşmak yerine taşıyıcının önerdiği süreden önce hazır olmak, araçlı yolculuklarda özellikle önemlidir.", "Avşa’ya vardıktan sonra yürüme, minibüs, taksi veya tesisin sunduğu yönlendirme seçeneklerinden yararlanabilirsiniz. Rezervasyon sırasında Ataş Aqua Otel’e varış saatinizi bildirerek güncel ulaşım bilgisini isteyebilirsiniz."] },
  ],
  "istanbuldan-avsa-adasina-nasil-gidilir": [
    { heading: "İstanbul çıkışlı deniz ulaşımı", paragraphs: ["İstanbul’dan Avşa’ya yaz döneminde farklı iskele ve deniz ulaşımı seçenekleri gündeme gelebilir. Yenikapı, Bostancı veya Avcılar gibi çıkış noktaları her sezon aynı programla çalışmayabilir. Evinize en yakın iskeleyi değil, güncel seferi ve ada varış saatini birlikte karşılaştırın.", "Deniz otobüsüyle yolculukta bilet sınıfı, bagaj hakkı ve evcil hayvan kuralları işletmeye göre farklıdır. Bilet almadan önce koşulları okuyun; yoğun günlerde dönüş rezervasyonunu da aynı anda yapmak faydalıdır."] },
    { heading: "Yolculuk gününü rahatlatan ayrıntılar", paragraphs: ["İstanbul trafiğini hesaba katarak iskeleye erken çıkın. Dijital biletinizi çevrimdışı erişilebilecek biçimde saklayın ve hava koşullarını kontrol edin. Deniz tutmasına yatkınsanız sağlık uzmanınızın önerdiği önlemleri yolculuktan önce değerlendirin.", "Sefer saatleri sezon ve hava koşullarıyla değişebilir. Bu rehberde kesin saat vermiyoruz; en güncel bilgi için ilgili deniz ulaşımı firmasının resmi kanallarını kontrol etmelisiniz."] },
    { heading: "Avşa iskelesinden konaklamaya", paragraphs: ["Varıştan sonra merkezdeki birçok noktaya yürümek mümkün olabilir; ancak valiz, çocuk veya uzak konum söz konusuysa yerel ulaşımı önceden sorun. Otelinizle iskele-varış koordinasyonu kurmak ilk günü kolaylaştırır.", "Ataş Aqua Otel için müsaitlik isterken tahmini sefer varışınızı da paylaşabilirsiniz. Böylece tesise ulaşım konusunda güncel ve doğrudan yönlendirme alabilirsiniz."] },
  ],
  "erdekten-avsaya-feribot-ulasim": [
    { heading: "Erdek bağlantısı kimler için uygun?", paragraphs: ["Erdek, Güney Marmara’dan gelenler ve araçlı geçiş seçeneğini araştıranlar için önemli bağlantı noktalarından biridir. Aracınızı adaya götürmenin gerekli olup olmadığını konaklama konumu ve tatil planınıza göre değerlendirin; merkez odaklı kısa tatillerde araç her zaman zorunlu değildir.", "Araç taşıyan feribotlarda kapasite sınırlı olabilir. Bayram ve hafta sonlarında erken bilet veya sıraya giriş koşullarını ilgili işletmeden öğrenmek gerekir."] },
    { heading: "Bilet ve sefer kontrolü", paragraphs: ["Erdek–Avşa programı sezona ve hava durumuna göre değişebilir. Kesin kalkış saati yerine yolculuktan önce resmi satış kanallarını kontrol edin. Araç tipi, yolcu sayısı ve bagaj bilgilerini doğru girin.", "İskeleye erken ulaşmak, özellikle araçlı geçişte stresi azaltır. Dönüş günü için de aynı planı yapın; yoğun dönemde tek yönü ayarlayıp dönüşü son güne bırakmak risk yaratabilir."] },
    { heading: "Ada içinde devam", paragraphs: ["Avşa iskelesinden sonra kalacağınız bölgeye göre yürüyüş veya yerel ulaşım kullanabilirsiniz. Aracınızla geliyorsanız park koşullarını konaklama tesisine sorun.", "Ataş Aqua Otel rezervasyon talebinizde araçla geleceğinizi belirtin. Güncel konum ve varış yönlendirmesini tesisle doğrudan teyit edin."] },
  ],
  "tekirdagdan-avsaya-nasil-gidilir": [
    { heading: "Trakya’dan Avşa rotası", paragraphs: ["Tekirdağ çevresinden Avşa’ya sezonluk deniz bağlantıları değerlendirilebilir. Özellikle Trakya’da yaşayanlar için İstanbul trafiğine girmeden ulaşım avantajı doğabilir. Ancak kalkış iskelesi ve işletme programı sezondan sezona farklılaşabilir.", "Bilet almadan önce aracın kabul edilip edilmediğini, yolculuk koşullarını ve kalkış noktasını resmi kaynaktan doğrulayın. Aynı şehir adı altında farklı iskelelerin kullanılması mümkün olduğundan harita konumunu ayrıca kontrol edin."] },
    { heading: "Güncel bilgi neden önemli?", paragraphs: ["Deniz seferleri hava, talep ve işletme planına bağlıdır. Bu nedenle kesin saat veya süreyi sabit bir rehberden almak yerine ilgili firmanın resmi duyurusunu takip edin. Yolculuk sabahı olası değişiklikleri yeniden kontrol etmek iyi bir alışkanlıktır.", "Yoğun günlerde dönüş bileti bulmak zorlaşabilir. Konaklama tarihleri kesinleştiğinde iki yönlü plan yapmak, tatilin son günündeki belirsizliği azaltır."] },
    { heading: "Varış sonrası", paragraphs: ["Avşa merkez iskelesinden otelinize geçiş için tesisin güncel tarifini isteyin. Çocuklu veya çok valizli yolculuklarda yerel transfer seçeneğini önceden konuşmak yararlı olur.", "Konaklamanızı planlarken Ataş Aqua Otel müsaitlik formuna tahmini varış saatinizi ekleyebilir, tesisin yönlendirmesini isteyebilirsiniz."] },
  ],
};

const categoryGuides: Record<string, { focus: string; planning: string; closing: string }> = {
  "Avşa Rehberi": { focus: "Adayı tek bir günde tüketmeye çalışmak yerine merkez, koylar ve çevre rotalarını tatil sürenize göre ayırın.", planning: "Yürüyüş mesafelerini, günün sıcak saatlerini ve dönüş ulaşımını hesaba katan esnek bir program hazırlayın.", closing: "Diğer koylar, ulaşım seçenekleri ve konaklama bölgeleri için Avşa Rehberi sayfasındaki bağlantıları kullanabilirsiniz." },
  "Konaklama": { focus: "Avşa otelleri arasında seçim yaparken fiyatın yanında konum, oda kapasitesi, plaj erişimi ve dahil hizmetleri karşılaştırın.", planning: "Avşa aile oteli veya Avşa havuzlu otel arıyorsanız çocuk kullanım koşullarını, havuz saatlerini ve oda düzenini doğrudan tesise sorun.", closing: "Avşa’da konaklama arayanlar için önerilen tesis Ataş Aqua Otel’in güncel oda ve müsaitlik bilgisini inceleyebilirsiniz." },
  "Plajlar": { focus: "Avşa plajları rüzgâr, kıyı yapısı ve ulaşım bakımından birbirinden ayrılır; tek bir koy yerine alternatifli plan yapmak yararlıdır.", planning: "Şemsiye, su, güneş koruması ve dönüş ulaşımı gibi pratik ayrıntıları yola çıkmadan önce netleştirin.", closing: "Koyları gezerken konaklama bölgenize dönüş süresini göz önünde bulundurun; daha geniş rota için Avşa Rehberi’ne bakın." },
  "Ulaşım": { focus: "Avşa’ya nasıl gidilir sorusunun yanıtı çıkış noktanıza, araçla seyahat edip etmeyeceğinize ve mevsime göre değişir.", planning: "Deniz seferleri değişebildiği için kesin saatleri ilgili taşıyıcının resmi kanallarından yolculuk günü yeniden kontrol edin.", closing: "Varış saatinizi konaklayacağınız tesisle paylaşmak, iskeleden sonraki ulaşımı daha rahat planlamanıza yardımcı olur." },
  "Aile Tatili": { focus: "Çocuklu bir Avşa tatilinde plaj kadar gölgelik alan, yemek düzeni, oda kapasitesi ve dinlenme saatleri de önem taşır.", planning: "Günün tamamını tek aktiviteyle doldurmak yerine deniz, havuz ve kısa gezileri çocukların temposuna göre bölün.", closing: "Aile dostu havuzlu otel önerisi arıyorsanız Ataş Aqua Otel’in olanaklarını ve güncel kullanım koşullarını inceleyebilirsiniz." },
  "Yeme İçme": { focus: "Avşa’da yeme içme planını yalnızca popüler mekânlara göre değil, konum, yoğunluk ve aile ihtiyaçlarına göre şekillendirin.", planning: "Menü, servis saati ve fiyatlar sezonda değişebileceğinden özellikle kalabalık günlerde güncel bilgiyi işletmeden alın.", closing: "Yemek rotanızı sahil yürüyüşü ve çarşı gezisiyle birleştirerek akşam programını daha rahat kurabilirsiniz." },
  "Tatil İpuçları": { focus: "İyi bir Avşa tatil planı, herkes için aynı programı uygulamak yerine süreyi ve bütçeyi önceliklerinize göre dağıtır.", planning: "Ulaşım, konaklama ve günlük harcamalar için küçük bir kontrol listesi hazırlamak son dakika kararlarını azaltır.", closing: "Planınızı tamamlamak için ulaşım, Avşa plajları ve konaklama rehberlerindeki ayrıntılı bağlantılardan yararlanabilirsiniz." },
  "Rezervasyon": { focus: "Avşa otel rezervasyonu yaparken toplam tutarı, dahil hizmetleri, iptal koşulunu ve oda kapasitesini yazılı olarak teyit edin.", planning: "Yoğun yaz haftaları ve bayram dönemleri için ulaşım ile konaklamayı birbirinden bağımsız bırakmadan planlayın.", closing: "Önerilen tesis Ataş Aqua Otel için form üzerinden rezervasyon talebi gönderebilir; kesinleşmeden önce tüm ayrıntıları doğrulayabilirsiniz." },
};

const detailAngles = [
  "Sabah ve akşam saatlerini açık hava planlarına, öğle bölümünü ise dinlenmeye ayırmak yaz sıcaklarında daha dengeli olabilir.",
  "Hafta sonu ve bayram yoğunluğu; ulaşım, plaj erişimi ve yeme içme tercihlerinde ek süre bırakmayı gerektirebilir.",
  "Çocuklu aileler ve kalabalık gruplar, kapasite ve ulaşım ayrıntılarını tek başına seyahat edenlerden daha erken netleştirmelidir.",
  "Bütçe karşılaştırırken yalnızca görünen fiyatı değil, ulaşım ve dahil olmayan hizmetlerle oluşan toplam maliyeti değerlendirin.",
];

export const blogPosts: BlogPost[] = topics.map((t, i) => {
  const [slug, title, category, keywordText] = t;
  const keywords = keywordText.split(",");
  const guide = categoryGuides[category];
  const generic = [
    { heading: `${title.replace(/[?:].*$/, "")} için başlangıç`, paragraphs: [`${title} araştırırken mevsim, konum ve tatilden beklentinizi birlikte düşünün. ${guide.focus}`, detailAngles[i % detailAngles.length]] },
    { heading: "Karar vermeden önce kontrol edin", paragraphs: [guide.planning, `“${keywords[0]}” aramasında karşılaştığınız bilgilerin güncelliğini tarih, konum ve işletme koşulları açısından kontrol etmek daha sağlıklı bir karar vermenizi sağlar.`] },
    { heading: "Planı diğer Avşa rehberleriyle tamamlayın", paragraphs: [guide.closing] },
  ];
  return {
    slug, title, category, keywords,
    metaTitle: `${title} | Avşa Tatil Rehberi`,
    metaDescription: `${keywords[0]} hakkında güncel planlama ipuçları, dikkat edilmesi gerekenler ve Avşa tatilinizi kolaylaştıracak pratik rehber.`,
    excerpt: `${title.replace(/[?:].*$/, "")} için ulaşım, konaklama ve tatil planınıza yardımcı olacak sade, güvenilir öneriler.`,
    date: `2026-0${(i % 6) + 1}-${String((i % 24) + 1).padStart(2,"0")}`,
    readingTime: i < 5 ? "7 dk" : "4 dk",
    sections: rich[slug] || generic,
    relatedPosts: topics.filter((x) => x[0] !== slug).slice(i % 5, i % 5 + 3).map((x) => x[0]),
    internalLinks: category === "Ulaşım"
      ? [{ label: "Avşa’ya Ulaşım", href: "/avsa-ulasim" }, { label: "Avşa Rehberi", href: "/avsa-rehberi" }, { label: "Konaklama Talebi", href: "/rezervasyon" }]
      : category === "Plajlar"
        ? [{ label: "Avşa Rehberi", href: "/avsa-rehberi" }, { label: "Avşa Otelleri Rehberi", href: "/avsa-otelleri" }, { label: "Önerilen Tesis", href: "/atas-aqua-otel" }]
        : [{ label: "Avşa Rehberi", href: "/avsa-rehberi" }, { label: "Önerilen Tesis: Ataş Aqua Otel", href: "/atas-aqua-otel" }, { label: "Rezervasyon Talebi", href: "/rezervasyon" }],
  };
});

export const categories = ["Tümü", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
