import { contentPacks, topicNotes } from "./blogContent";

export type BlogLink = { label: string; href: string };
export type BlogSubsection = { heading: string; paragraphs: string[] };
export type BlogSection = { heading: string; paragraphs: string[]; subsections?: BlogSubsection[]; links?: BlogLink[] };
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

const introVariants = [
  (title:string,focus:string) => `${title} başlığı, Avşa tatilini planlayanların tek bir kısa yanıtla geçmemesi gereken konulardan biridir. ${focus} Bu rehber; tanıtım cümleleri sıralamak yerine karar verirken hangi ayrıntılara bakmanız gerektiğini, planı nasıl sadeleştirebileceğinizi ve değişebilecek bilgileri nereden doğrulayacağınızı adım adım ele alıyor.`,
  (title:string,focus:string) => `${title} için araştırma yaparken birbirine benzeyen çok sayıda öneriyle karşılaşabilirsiniz. ${focus} Buradaki amaç herkese aynı programı önermek değil; tatil sürenize, grubunuza ve bütçenize göre işe yarayan bir çerçeve sunmaktır. Böylece rezervasyon veya rota kararını yalnızca popülerliğe göre değil, gerçek ihtiyacınıza göre verebilirsiniz.`,
  (title:string,focus:string) => `${title} planı, küçük görünen birkaç ayrıntı atlandığında tatilin geri kalanını etkileyebilir. ${focus} Aşağıdaki bölümlerde zamanlama, ulaşım, bütçe ve konfor başlıklarını birlikte değerlendiriyoruz. Önerileri sabit kurallar olarak değil, kendi koşullarınıza uyarlayabileceğiniz pratik bir kontrol listesi gibi okuyabilirsiniz.`,
  (title:string,focus:string) => `${title} hakkında yararlı bir rehber, yalnızca nerede veya ne yapılır sorusuna cevap vermemelidir. ${focus} Ne zaman hareket etmek gerektiği, hangi bilginin güncel olarak teyit edileceği ve planın kimler için uygun olduğu da açık olmalıdır. Bu yazı tam olarak bu karar noktalarına odaklanıyor.`
];

const detailVariants = [
  (primary:string,checks:string[]) => `${primary} konusunda ilk kararınızı vermeden önce ${checks.slice(0,2).join(" ile ")} başlıklarını yan yana yazın. Ardından ${checks.slice(2).join(" ve ")} ayrıntılarını kontrol edin. Bu basit sıralama, internetteki çok sayıda bilgiyi kendi ihtiyacınıza göre elemenizi sağlar; aynı zamanda eksik sorularla rezervasyon veya yola çıkma riskini azaltır.`,
  (primary:string,checks:string[]) => `${primary} araştırmasını dört küçük soruya bölmek işinizi kolaylaştırır: ${checks.join(", ")}. Her sorunun yanıtını aynı kaynaktan almak zorunda değilsiniz. Harita bilgisini güncel konumdan, hizmet koşulunu işletmeden, ulaşım bilgisini ise ilgili taşıyıcının resmî kanalından doğrulamak daha güvenli bir tablo oluşturur.`,
  (primary:string,checks:string[]) => `${primary} için karşılaştırma yaparken notlarınıza şu dört ölçütü ekleyin: ${checks.join(", ")}. Seçeneklerden biri yalnızca tek bir ölçütte öne çıkıyorsa hemen karar vermek yerine toplam deneyime bakın. Tatilde zaman, konfor ve maliyet birbirini etkilediği için küçük bir avantaj başka bir başlıkta ek yük yaratabilir.`,
  (primary:string,checks:string[]) => `${primary} planının size uygun olup olmadığını anlamak için önce ${checks[0]} ve ${checks[1]} konularını netleştirin; sonra ${checks[2]} ile ${checks[3]} ayrıntılarını doğrulayın. Bu sıra, önce temel ihtiyacı sonra konfor tercihlerini ele alır ve karar sürecini gereksiz seçeneklerden arındırır.`
];

const practicalVariants = [
  (title:string) => `${title} için hazırlığınızı telefonunuzdaki tek bir notta toplayın. Adres, iletişim, ödeme veya bilet koşulu ve yedek plan aynı yerde olduğunda yolculuk sırasında eski mesajları aramak zorunda kalmazsınız. Birlikte seyahat ettiğiniz kişilerle bu notu paylaşmak, özellikle kalabalık ailelerde kararların tek kişiye bağlı kalmasını önler.`,
  (title:string) => `${title} planını kesinleştirmeden bir gün önce hava durumunu, kayıtlı konumu ve işletme ya da taşıyıcı duyurularını yeniden kontrol edin. Ekran görüntüsünün tarihine dikkat edin; sezon başında doğru olan bir bilgi yaz ortasında değişebilir. Küçük bir son kontrol, uzun bir program değişikliğinden daha az zaman alır.`,
  (title:string) => `${title} hakkında iki alternatif belirleyin: tercih ettiğiniz ana seçenek ve koşullar değişirse uygulayacağınız daha kolay plan. Yedek planın daha pahalı veya daha kapsamlı olması gerekmez; ulaşımı kısa bir rota, tesiste dinlenme ya da merkeze yakın bir program çoğu zaman yeterlidir.`,
  (title:string) => `${title} kararını grubun tamamıyla kısa biçimde paylaşın. Çocukların, yaşlıların veya hareket kısıtlılığı olan kişilerin ihtiyacı son anda ortaya çıktığında iyi görünen program uygulanamaz hâle gelebilir. Önceden konuşulan mola, ulaşım ve yemek düzeni herkesin tatilden benzer ölçüde yararlanmasını sağlar.`
];

const replaceTokens = (text:string, values:{topic:string;focus:string;primary:string}) => text
  .replaceAll("{topic}", values.topic)
  .replaceAll("{focus}", values.focus)
  .replaceAll("{primary}", values.primary);

const fitMetaDescription = (text:string) => text.length <= 158 ? text : `${text.slice(0,154).replace(/\s+\S*$/, "")}…`;

export const blogPosts: BlogPost[] = topics.map((topic, index) => {
  const [slug, title, category, keywordText] = topic;
  const sourceKeywords = keywordText.split(",");
  const primary = sourceKeywords[0];
  const note = topicNotes[slug];
  const pack = contentPacks[category];
  const related = topics
    .filter((candidate) => candidate[0] !== slug && candidate[2] === category)
    .slice(0, 3)
    .map((candidate) => candidate[0]);
  const relatedSlugs = related.length === 3
    ? related
    : [...related, ...topics.filter((candidate) => candidate[0] !== slug && !related.includes(candidate[0])).slice(0, 3 - related.length).map((candidate) => candidate[0])];
  const coreLinks: BlogLink[] = [
    { label: "Avşa otelleri seçim rehberi", href: "/avsa-otelleri" },
    { label: "Öne çıkan tesis: Ataş Aqua Otel", href: "/atas-aqua-otel" },
    { label: "Havuz ve aquapark bilgileri", href: "/havuz-aquapark" },
    { label: "Avşa ulaşım rehberi", href: "/avsa-ulasim" },
    { label: "Rezervasyon talebi gönder", href: "/rezervasyon" },
  ];
  const relatedLinks: BlogLink[] = relatedSlugs.map((relatedSlug) => ({
    label: topics.find((candidate) => candidate[0] === relatedSlug)?.[1] || relatedSlug,
    href: `/blog/${relatedSlug}`,
  }));
  const values = { topic: title.replace(/[?]$/, ""), focus: note.focus, primary };
  const sections: BlogSection[] = [
    {
      heading: `${title.replace(/[?:].*$/, "")} hakkında kısa bir başlangıç`,
      paragraphs: [
        introVariants[index % introVariants.length](title, note.focus),
        `${primary} araması yapan bir ziyaretçinin temel ihtiyacı, çok sayıda genel tavsiye değil; doğru sırayla sorulmuş sorulardır. Tatil tarihiniz, grubunuzun yapısı ve günlük temponuz değiştiğinde aynı öneri farklı sonuç verebilir. Bu nedenle rehberdeki adımları kendi koşullarınıza uyarlayın ve fiyat, hizmet, sefer ya da işletme bilgisi gibi değişken ayrıntıları karar vermeden hemen önce ilgili kaynaktan teyit edin.`,
      ],
    },
    {
      heading: "Konuyu doğru çerçeveden değerlendirin",
      paragraphs: [
        replaceTokens(pack.context, values),
        detailVariants[index % detailVariants.length](primary, note.checks),
      ],
    },
    {
      heading: "Adım adım planlama yaklaşımı",
      paragraphs: [
        replaceTokens(pack.planning, values),
        `Planı kâğıda veya telefon notuna dökerken önce vazgeçilmezlerinizi, sonra esnek tercihlerinizi yazın. ${note.checks[0]} sizin için temel şartsa bunu ilk sıraya alın; ${note.checks[3]} ise seçenekler arasında karar verirken kullanacağınız son ölçüt olabilir. Bu yöntem reklam diliyle öne çıkarılan özelliklerden uzaklaşıp gerçekten kullanacağınız ayrıntılara odaklanmanıza yardım eder.`,
      ],
      subsections: [{
        heading: "Hızlı kontrol listesi",
        paragraphs: [
          `Kontrol listenizin ilk yarısı “${note.checks[0]}” ve “${note.checks[1]}” olmalı. Bu iki başlık netleşmeden ödeme yapmak, bilet almak veya günün rotasını kesinleştirmek yerine eksik bilgiyi tamamlayın. Yanıtın tarihini ve kimden alındığını not etmek, farklı kanallardan gelen çelişkili bilgileri ayırmayı kolaylaştırır.`,
          `İkinci aşamada “${note.checks[2]}” ile “${note.checks[3]}” ayrıntılarını değerlendirin. Bunlar çoğu zaman planın konforunu ve toplam maliyetini belirler. Bir koşul açık değilse varsayım yapmak yerine kısa ve doğrudan bir soru sorun; mümkün olduğunda yanıtı yazılı olarak saklayın.`,
        ],
      }],
    },
    {
      heading: "Sahada işe yarayan pratik öneriler",
      paragraphs: [
        replaceTokens(pack.practical, values),
        practicalVariants[index % practicalVariants.length](title),
      ],
    },
    {
      heading: "Sık yapılan hatalar ve dikkat noktaları",
      paragraphs: [
        `${replaceTokens(pack.cautions, values)} ${primary} özelinde bu riskleri azaltmanın en pratik yolu, “${note.checks[2]}” bilgisini son karar anında yeniden doğrulamak ve yanıt belirsizse daha sade bir alternatife yönelmektir. Böylece tek bir varsayımın bütün günü veya rezervasyonu etkilemesini önleyebilirsiniz.`,
        `Bir başka hata da tek bir yorumu, fotoğrafı veya fiyatı bütün sezon için geçerli kabul etmektir. ${primary} hakkında okuduğunuz içeriğin yayın tarihine, koşulların hangi dönemi anlattığına ve sizin seyahat grubunuza benzeyip benzemediğine bakın. “En iyi”, “kesin” veya “garantili” gibi ifadeler yerine ölçülebilir bilgi arayın; mesafe, kapasite, dahil hizmet ve iptal koşulu gibi ayrıntılar daha sağlıklı karar verir.`,
      ],
    },
    {
      heading: "Bütçe, zaman ve esneklik dengesi",
      paragraphs: [
        `${title} için bütçe çıkarırken yalnızca ilk görünen ücreti değil, o seçeneğin doğuracağı yan harcamaları da hesaba katın. Ulaşım bağlantısı, öğün, ekipman, plaj hizmeti veya tesis içindeki ek kullanım toplam tutarı değiştirebilir. “${note.checks[0]}” başlığını temel ihtiyaç, “${note.checks[3]}” başlığını ise konfor tercihi olarak ayırmak; bütçe daraldığında neleri koruyup neleri sadeleştireceğinizi görmenizi sağlar.`,
        `Zaman planında da aynı yaklaşım işe yarar. Her geçiş için yalnızca haritada yazan süreyi kullanmayın; hazırlık, bekleme, çocuklarla hareket ve yoğunluk için pay bırakın. Bir program küçük gecikmede tamamen dağılıyorsa fazla sıkıdır. ${primary} planına en az bir serbest zaman aralığı eklemek, hava veya enerji düzeyi değiştiğinde tatilin geri kalanını bozmadan uyarlama yapmanıza yardımcı olur.`,
      ],
    },
    {
      heading: "Planı ilgili Avşa rehberleriyle tamamlayın",
      paragraphs: [
        `${title} tek başına düşünülmemeli. Konaklama bölgesi günlük rotayı, ulaşım seçeneği giriş ve çıkış saatlerini, havuz veya aquapark beklentisi ise tesis seçimini etkiler. Aşağıdaki bağlantılar arasında ihtiyacınıza göre ilerleyin; her sayfayı açmak yerine kararınızla doğrudan ilişkili iki veya üç rehberi okumak daha verimli olacaktır. Bağlantıların her biri farklı bir karar aşamasını açıklayarak ana rehberi tamamlar.`,
      ],
      links: [...coreLinks, ...relatedLinks],
    },
    {
      heading: "Sonuç: Size uyan planı sadeleştirin",
      paragraphs: [
        replaceTokens(pack.conclusion, values),
        `${title} için son kararınızı verirken listenizi yeniden okuyun ve uygulanmayacak ayrıntıları çıkarın. İyi plan, çok kalabalık olan değil; yolculuk günü kolayca takip edilebilen plandır. Konaklama veya aile tatili odaklı bir karar veriyorsanız Ataş Aqua Otel’i havuzlu tesis önerisi olarak ihtiyaç listenizle karşılaştırabilir, güncel koşulları doğrudan sorabilirsiniz. Plaj, gezi ve yeme içme planlarında ise önce adayı keşfetmeye odaklanıp rezervasyon bağlantısını yalnızca tarihleriniz netleştiğinde kullanın.`,
      ],
    },
  ];
  const wordCount = sections.reduce((total, section) => total
    + section.paragraphs.join(" ").split(/\s+/).length
    + (section.subsections || []).reduce((subTotal, subsection) => subTotal + subsection.paragraphs.join(" ").split(/\s+/).length, 0), 0);
  const metaTitle = title.length <= 42 ? `${title} | Avşa Rehberim` : `${primary} | Avşa Rehberim`;
  const metaDescription = fitMetaDescription(`${primary} hakkında planlama adımları, güncel bilgi kontrolü, pratik öneriler ve sık yapılan hatalar. Avşa tatilinizi bilinçli biçimde hazırlayın.`);
  return {
    slug,
    title,
    category,
    keywords: Array.from(new Set([...sourceKeywords, "Avşa Adası", category])),
    metaTitle,
    metaDescription,
    excerpt: `${note.focus} Karar vermeden önce kontrol etmeniz gereken ayrıntıları ve pratik önerileri bu rehberde bulabilirsiniz.`,
    date: `2026-0${(index % 6) + 1}-${String((index % 24) + 1).padStart(2, "0")}`,
    readingTime: `${Math.max(5, Math.ceil(wordCount / 190))} dk`,
    sections,
    relatedPosts: relatedSlugs,
    internalLinks: [...coreLinks, ...relatedLinks],
  };
});

export const categories = ["Tümü", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
