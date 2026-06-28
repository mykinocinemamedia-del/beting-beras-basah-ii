'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "ms" | "en";

type TranslationDict = Record<string, string>;

const translations: Record<Language, TranslationDict> = {
  ms: {
    // Nav
    "nav.apa": "Apa Yang Membezakan",
    "nav.tonton": "Tonton",
    "nav.pakej": "Pakej",
    "nav.legasi": "Program Legasi",
    "nav.faq": "Soalan",
    "nav.hubungi": "Berhubung Dengan Kami →",

    // Hero
    "hero.eyebrow":
      "30 Oktober – 1 November 2026  ·  Panggung Sari, Istana Budaya",
    "hero.title.l1": "Lima Ratus Tahun",
    "hero.title.l2": "Menanti. Kini",
    "hero.title.l3": "Tibalah Masanya.",
    "hero.sub":
      "Ada cerita yang menunggu terlalu lama untuk diceritakan. Beting Beras Basah II: Hikayat Mahkota Dewa adalah malam di mana hikayat itu akhirnya menemui pentasnya — di Istana Budaya, dengan cahaya hologram yang belum pernah menyentuh dunia bangsawan sebelum ini.",
    "hero.cta.penaja": "Jadi Rakan Penaja →",
    "hero.cta.pdf": "⬇ Muat Turun Pitch Deck",
    "hero.countdown.label": "Masa yang berbaki sebelum tirai dibuka",
    "hero.countdown.days": "Hari",
    "hero.countdown.hours": "Jam",
    "hero.countdown.mins": "Minit",
    "hero.countdown.secs": "Saat",

    // Three Firsts
    "firsts.eyebrow": "Tiga Kali Pertama Dalam Sejarah Istana Budaya",
    "firsts.title.l1": "Tiga Hal Yang Tidak Pernah",
    "firsts.title.l2": "Berlaku Serentak —",
    "firsts.title.l3": "Sehingga Malam Ini.",
    "firsts.1.badge": "Kali Pertama",
    "firsts.1.title": "500 Tahun, Baru Sampai",
    "firsts.1.desc":
      "Hikayat ini telah ada jauh sebelum kita. Sejarah penubuhan Negeri Perak — tentang panah yang jatuh ke bumi, tentang perjanjian yang dimeterai di tepi muara — baru kini sampai ke pentas yang selayaknya. Lima ratus tahun kemudian. Tepat pada masanya.",
    "firsts.2.badge": "Kali Pertama",
    "firsts.2.title": "Hologram Dalam Dunia Bangsawan di IB",
    "firsts.2.desc":
      "Sejak Istana Budaya mula menyala pada 1999, tiada watak mistik yang pernah hadir secara holografik di atas pentasnya. Beting Beras Basah II mengubah itu — bukan sekadar dengan teknologi, tetapi dengan roh. Watak yang selama ini hanya hidup dalam imaginasi, kini berdiri di hadapan penonton.",
    "firsts.3.badge": "Pembukaan Semula",
    "firsts.3.title": "Istana Budaya Membuka Pintunya Semula",
    "firsts.3.desc":
      "Ada orang yang menunggu bertahun-tahun hanya untuk duduk semula di kerusi merah Istana Budaya. Mereka tidak datang hanya untuk menonton — mereka datang untuk merasai semula sesuatu yang pernah hilang. Show pertama yang mereka pilih adalah show yang akan mereka ceritakan kepada cucu mereka.",

    // Contrast
    "contrast.eyebrow": "Ini Berbeza",
    "contrast.title.l1": "Ada Penajaan Yang Habis",
    "contrast.title.l2": "Bila Lampu Dipadamkan.",
    "contrast.title.l3": "Ada Yang Tidak.",
    "contrast.bad.label": "Biasanya begini jadinya",
    "contrast.good.label": "Malam ini berbeza",
    "contrast.bad.1": "Logo kecil di poster yang tiada siapa ambil gambar",
    "contrast.bad.2": "Banner yang dilipat selepas malam terakhir",
    "contrast.bad.3": "Publisiti yang hanya bertahan selagi ada bajet",
    "contrast.bad.4": "Program yang ada, tapi tiada bukti kukuh untuk dilaporkan",
    "contrast.bad.5": "Habis malam, habis semuanya",
    "contrast.good.1":
      "Nama jenama anda tertulis dalam sejarah seni bangsawan Malaysia",
    "contrast.good.2":
      "Media perdana datang sendiri — kerana ini adalah berita, bukan iklan",
    "contrast.good.3":
      "Program pembangunan modal insan dengan 5 elemen yang boleh didokumentasikan dan dilaporkan",
    "contrast.good.4":
      "Nama anda pada modul latihan yang akan diajar lama selepas malam ini berlalu",
    "contrast.good.5":
      "Sebuah gelaran yang tidak akan diberikan kepada sesiapa lain selepas ini",

    // Video
    "video.eyebrow": "Pementasan Terdahulu",
    "video.title.l1": "Ini Bukan Janji.",
    "video.title.l2": "Ini Rekod.",
    "video.sub":
      "Apa yang anda lihat ini bukan konsep atau moodboard. Ini persembahan kami yang lepas. Bayangkan ia semula — dengan hologram, di Istana Budaya, pada malam 30 Oktober 2026.",
    "video.caption":
      "Persembahan terdahulu — Beting Beras Basah I  ·  Pertubuhan Bangsawan Warisan Moraza Negeri Perak",

    // Credibility
    "cred.eyebrow": "Siapa Kami",
    "cred.title.l1": "Tiga Puluh Lima Tahun",
    "cred.title.l2": "Tidak Pernah Berhenti.",
    "cred.stat1.num": "35+",
    "cred.stat1.lbl": "Tahun di atas pentas",
    "cred.stat2.num": "40+",
    "cred.stat2.lbl": "Penggiat seni aktif",
    "cred.stat3.num": "4",
    "cred.stat3.lbl": "Negara pernah dikunjungi",
    "cred.stat4.num": "500",
    "cred.stat4.lbl": "Tahun kesultanan yang diraikan",
    "cred.card1.title": "Sokongan MOTAC",
    "cred.card1.desc":
      "Produksi ini mendapat sokongan rasmi Kementerian Pelancongan, Seni dan Budaya Malaysia.",
    "cred.card2.title": "Sejarah DiRaja",
    "cred.card2.desc":
      "Kami pernah mementaskan di hadapan DYAM Raja DiHilir Perak dan DYAM Raja Puan Muda Perak. Ini bukan kali pertama kami berbakti kepada warisan diraja.",
    "cred.card3.title": "Malaysia Book of Records",
    "cred.card3.desc":
      "Nama kami sudah pernah tertulis dalam rekod kebangsaan. Pementasan ini menyasar yang baharu.",
    "cred.card4.title": "Panel Pakar NOSS",
    "cred.card4.desc":
      "Ahli kami bukan sahaja penggiat seni — mereka adalah Panel Pakar NOSS Teater Tahap 4–5 dan Jurulatih Seni Budaya JKKN.",
    "cred.card5.title": "Kolaborasi Nusantara",
    "cred.card5.desc":
      "Pakar dari Malaysia, Indonesia, dan Singapura dalam satu produksi. Bukan label semata — mereka bekerja dalam bilik yang sama, ke arah satu matlamat.",
    "cred.card6.title": "Pentas Antarabangsa",
    "cred.card6.desc":
      "Czech Republic (2016), China (2019), Singapura (2019), Brunei (2022). Kami bukan baru dalam konteks dunia.",

    // Offer
    "offer.eyebrow": "Nilai Penajaan",
    "offer.title.l1": "Ini Bukan Sekadar",
    "offer.title.l2": "Nama Di Poster.",
    "offer.1.title": "Liputan yang Datang Sendiri",
    "offer.1.desc":
      "RTM, TV AlHijrah, Bernama, Berita Harian — mereka tidak perlu dijemput. Tiga faktor bersejarah pementasan ini adalah cerita yang mereka akan cari sendiri. Logo anda ada dalam setiap liputan itu.",
    "offer.2.title": "Gelaran Yang Tidak Boleh Dibeli",
    "offer.2.desc":
      "Rakan Strategik Warisan 500 Tahun. Ia bukan sekadar tajuk dalam buku program — ia adalah cara orang akan merujuk jenama anda dalam konteks sambutan bersejarah negara ini.",
    "offer.3.title": "Program Pembangunan Modal Insan",
    "offer.3.desc":
      "5 elemen program yang boleh didokumentasikan sepenuhnya — dari Akademi hingga lawatan berpandu di IB semasa rehearsal. Setiap elemen menghasilkan bukti yang boleh dilaporkan.",
    "offer.4.title": "Nama Yang Kekal Selepas Malam Ini",
    "offer.4.desc":
      "Modul latihan dengan nama jenama anda akan terus diajar, dirujuk, dan digunakan berulang kali — oleh orang yang belum pernah dengar nama anda malam itu.",
    "offer.5.title": "Bilik Yang Sama Dengan Orang Yang Tepat",
    "offer.5.desc":
      "Kerabat DiRaja, barisan kepimpinan kerajaan, tokoh korporat terkemuka. Siapa yang ada dalam dewan malam itu — itu pun ada nilainya yang tidak dapat diukur.",
    "offer.6.title": "Lebih Dari Satu Sempadan",
    "offer.6.desc":
      "Kerjasama Malaysia-Indonesia-Singapura bermakna jenama anda dilihat oleh lebih dari satu audiens. Ini bukan cerita tempatan.",

    // Packages
    "pkg.eyebrow": "Pakej Penajaan",
    "pkg.title.l1": "Pilih Cara",
    "pkg.title.l2": "Anda Ingin Dikenang.",
    "pkg.sub": "Kami tidak jual ruang kosong. Kami jual tempat dalam sejarah.",
    "pkg.1.tier": "Pakej Saujana",
    "pkg.1.name": "Strategik",
    "pkg.1.price": "RM 500 – 2,000",
    "pkg.1.note": "Langkah pertama yang bermakna",
    "pkg.1.f1": "Paparan logo dalam media cetak & video",
    "pkg.1.f2": "2 tiket penghargaan",
    "pkg.1.f3": "Potongan cukai kelayakan",
    "pkg.2.badge": "PALING BANYAK DIPILIH",
    "pkg.2.tier": "Pakej Sinar Warisan",
    "pkg.2.name": "Sokongan",
    "pkg.2.price": "RM 2,001 – 10,000",
    "pkg.2.note": "Yang paling banyak dipilih oleh rakan korporat kami",
    "pkg.2.f1": "Paparan logo media cetak & video",
    "pkg.2.f2": "Kempen media sosial aktif",
    "pkg.2.f3": "2 tiket penghargaan",
    "pkg.2.f4": "Potongan cukai kelayakan",
    "pkg.2.f5": "Cenderahati BBB eksklusif",
    "pkg.3.tier": "Pakej Wira Budaya",
    "pkg.3.name": "Utama",
    "pkg.3.price": "RM 10,001+",
    "pkg.3.note": "Untuk mereka yang mahu namanya diingat paling lama",
    "pkg.3.f1": "Iklan produk 30 saat sebelum persembahan",
    "pkg.3.f2": "Ruang pameran eksklusif",
    "pkg.3.f3": "Paparan logo media cetak & video",
    "pkg.3.f4": "Kempen media sosial aktif",
    "pkg.3.f5": "Potongan cukai kelayakan",
    "pkg.3.f6": "Cenderahati BBB eksklusif",
    "pkg.3.f7": "5% sumbangan Tabung Amal",
    "pkg.3.f8": "Akses Program Bangsawan Legasi",
    "pkg.btn": "Berhubung Dengan Kami →",

    // Legasi
    "legasi.eyebrow":
      "Untuk Penaja yang Memerlukan Lebih Dari Sekadar Logo",
    "legasi.title.l1": "Program Bangsawan Legasi:",
    "legasi.title.l2": "Lima Pengalaman Yang",
    "legasi.title.l3": "Tidak Dijual Di Mana-Mana.",
    "legasi.intro":
      "Ini bukan program seremonial untuk difoto dan dilupakan. Setiap elemen direka dengan sengaja — supaya peserta membawa balik sesuatu yang nyata, dan penaja membawa balik bukti yang boleh dilaporkan kepada board dan Putrajaya.",
    "legasi.1.title": "Akademi Bangsawan Legasi",
    "legasi.1.desc":
      "Sesi pembelajaran berstruktur bersama penggiat seni yang lebih tiga dekad di atas pentas. Bukan seminar kosong — ini pemindahan ilmu dari pakar kepada pewaris yang sebenar.",
    "legasi.2.title": "Modul Latihan Bertauliah",
    "legasi.2.desc":
      "Modul latihan fizikal yang dibangunkan khas, selaras dengan NOSS Teater Kebangsaan Tahap 4–5. Nama jenama anda tercetak pada setiap salinan — dan ia akan terus digunakan lama selepas malam show berlalu.",
    "legasi.3.title": "Lawatan Berpandu di Istana Budaya",
    "legasi.3.desc":
      "Akses lawatan berpandu ke Istana Budaya semasa tempoh rehearsal — bukan sebagai pelawat biasa, tetapi sebagai tetamu yang diundang masuk ke jantung sebuah produksi berskala nasional.",
    "legasi.4.title": "Akses Behind the Scene",
    "legasi.4.desc":
      "Peserta menyaksikan proses sebenar produksi — dari sesi blocking hingga technical rehearsal. Dunia di sebalik tabir yang jarang sekali dibuka kepada orang luar. Boleh dijadikan content CSR syarikat anda.",
    "legasi.5.title": "Sentuhan Terus Dengan Asset Show",
    "legasi.5.desc":
      "Kostum diraja yang ditenun dengan teliti. Prop set yang diukir khas. Peserta menyentuh artifak produksi sebenar — bukan dalam gambar, bukan di muzium. Di tangan mereka sendiri.",
    "legasi.sponsor.eyebrow": "Apa yang Penaja Terima",
    "legasi.sponsor.title": "— Bukti yang Boleh Dilaporkan",
    "legasi.sponsor.1.title": "Kohort Bernama Rasmi",
    "legasi.sponsor.1.desc":
      '"Kohort Waris [Nama Jenama] 2026" — nama yang boleh dilaporkan, dibuktikan, dan dibanggakan dalam laporan CSR dan ESG tahunan.',
    "legasi.sponsor.2.title": "Dokumentasi Setiap Elemen",
    "legasi.sponsor.2.desc":
      "Gambar dan video dari setiap sesi program — boleh digunakan terus sebagai content CSR syarikat anda tanpa kerja tambahan.",
    "legasi.sponsor.3.title": "Data yang Siap Dilaporkan",
    "legasi.sponsor.3.desc":
      "Bilangan peserta, jam aktiviti per elemen, sijil penyertaan rasmi — sedia untuk tabling kepada board atau dikemukakan kepada Putrajaya.",
    "legasi.sponsor.4.title": "Kredit IP yang Kekal",
    "legasi.sponsor.4.desc":
      "Nama jenama anda pada modul latihan yang akan terus diajar dan dirujuk. Ini bukan iklan yang tamat. Ini warisan.",
    "legasi.metric1.num": "20–30",
    "legasi.metric1.lbl": "Pelajar terpilih",
    "legasi.metric2.num": "5",
    "legasi.metric2.lbl": "Elemen program",
    "legasi.metric3.num": "96–120",
    "legasi.metric3.lbl": "Jam latihan",
    "legasi.metric4.num": "8–12",
    "legasi.metric4.lbl": "Minggu program",

    // FAQ
    "faq.eyebrow": "Soalan Lazim",
    "faq.title.l1": "Ada Soalan?",
    "faq.title.l2": "Kami Ada Jawapannya.",
    "faq.1.q": "Adakah penajaan ini layak untuk potongan cukai?",
    "faq.1.a":
      "Ya. Penajaan kepada pertubuhan seni berdaftar biasanya layak untuk potongan cukai. Kami akan sediakan semua dokumen yang diperlukan — anda tinggal semak dengan akauntan syarikat anda untuk memastikan ia selaras dengan keadaan cukai semasa.",
    "faq.2.q":
      "Bagaimana kami boleh masukkan ini dalam laporan ESG/CSR tahunan?",
    "faq.2.a":
      "Program Bangsawan Legasi menghasilkan laporan program lengkap yang mengandungi bilangan penerima manfaat, jam latihan per elemen, dan sijil penyertaan. Semua dalam format yang boleh terus dimasukkan dalam laporan ESG tahunan di bawah kategori pembangunan modal insan dan tanggungjawab sosial komuniti.",
    "faq.3.q": "Berapa lama Program Bangsawan Legasi berlangsung?",
    "faq.3.a":
      "Program ini berlangsung selama 8 hingga 12 minggu sebelum show. Pelajar terpilih melalui kelima-lima elemen program secara berperingkat, dan anda akan menerima laporan kemajuan berkala sepanjang tempoh itu.",
    "faq.4.q":
      "Bolehkah kami tentukan siapa yang kami mahu manfaatkan?",
    "faq.4.a":
      "Boleh. Anda boleh tetapkan kriteria — pelajar B40, komuniti luar bandar, institusi pendidikan tertentu, atau belia dari negeri yang anda sasar. Proses saringan kami akan disesuaikan mengikut keperluan program CSR syarikat anda.",
    "faq.5.q": "Adakah liputan media sudah terjamin?",
    "faq.5.a":
      "Tiga sebab media perdana akan hadir tanpa perlu dijemput: pembukaan semula Istana Budaya, sambutan 500 Tahun Kesultanan Perak, dan teknologi holografik pertama kali dalam bangsawan di IB. Ini bukan event biasa — ini berita. Sokongan rasmi MOTAC turut membantu memastikan liputan dari saluran media kerajaan.",
    "faq.6.q": "Macam mana nak mulakan?",
    "faq.6.a":
      "Cara paling mudah — hubungi kami terus melalui WhatsApp atau muat turun pitch deck kami untuk dibentangkan kepada pihak pengurusan syarikat anda. Kami akan aturkan satu sesi perbincangan yang ringkas untuk faham keperluan anda, dan cadangkan pakej yang paling sesuai.",

    // Form
    "form.eyebrow": "Hubungi Kami",
    "form.title.l1": "Ada Soalan Tentang",
    "form.title.l2": "Peluang Penajaan?",
    "form.title.l3": "Tinggalkan Mesej.",
    "form.sub":
      "Isi borang di bawah dan pasukan kami akan menghubungi anda dalam masa 24 jam. Atau hubungi kami terus melalui WhatsApp.",
    "form.name": "Nama Penuh",
    "form.name.ph": "Cth: Ahmad bin Abdullah",
    "form.email": "Email Korporat",
    "form.email.ph": "Cth: ahmad@syarikat.com.my",
    "form.phone": "Nombor Telefon",
    "form.phone.ph": "Cth: +60123456789",
    "form.company": "Syarikat / Organisasi",
    "form.company.ph": "Cth: Syarikat ABC Sdn Bhd",
    "form.package": "Pakej Yang Berminat",
    "form.package.select": "— Sila pilih —",
    "form.message": "Mesej Anda",
    "form.message.ph":
      "Ceritakan kami tentang objektif penajaan syarikat anda...",
    "form.submit": "Hantar Pertanyaan →",
    "form.submitting": "Menghantar...",
    "form.success.title": "Terima kasih!",
    "form.success.desc":
      "Mesej anda telah diterima. Pasukan kami akan menghubungi anda dalam masa 24 jam.",
    "form.error":
      "Maaf, terdapat ralat. Sila cuba lagi atau hubungi kami terus melalui WhatsApp.",

    // Final CTA
    "cta.eyebrow": "Sebelum Pintu Tertutup",
    "cta.title.l1": "Tiga Kali Pertama.",
    "cta.title.l2": "Satu Malam.",
    "cta.title.l3": "Lepas Ini, Takkan Ada Lagi.",
    "cta.sub":
      "Sejarah tidak pernah menunggu sesiapa. Kami membuka peluang ini kepada bilangan penaja yang terhad — dan bila peluang itu tertutup, ia tertutup selamanya. Berhubung dengan kami hari ini.",
    "cta.wa": "Hubungi via WhatsApp",
    "cta.pdf": "⬇ Muat Turun Pitch Deck (PDF)",
    "cta.note":
      "Pertubuhan Bangsawan Warisan Moraza Negeri Perak  ·  Disokong MOTAC  ·  Istana Budaya 2026",

    // Footer
    "footer.title": "Beting Beras Basah II: Hikayat Mahkota Dewa",
    "footer.org": "Pertubuhan Bangsawan Warisan Moraza Negeri Perak",
    "footer.copy":
      "© 2026 Pertubuhan Bangsawan Warisan Moraza Negeri Perak. Semua hak terpelihara.",

    // Tags
    "tag.1": "Ekonomi Kreatif Malaysia",
    "tag.2": "SDG 4: Quality Education",
    "tag.3": "SDG 8: Decent Work",
    "tag.4": "Kerangka MADANI",
    "tag.5": "NOSS Teater Tahap 4–5",

    // ═══════════════════════════════════════════════════════
    // PROGRAM LEGASI DEDICATED PAGE (/program-legasi) — BM
    // ═══════════════════════════════════════════════════════
    "prog.nav.back": "← Kembali ke Laman Utama",
    "prog.nav.cta": "Hubungi Kami →",
    "prog.hero.eyebrow": "Penerangan Penuh · Program Bangsawan Legasi",
    "prog.hero.title.1": "Sebuah Pintu",
    "prog.hero.title.2": "Yang Tidak Pernah",
    "prog.hero.title.3": "Terbuka Untuk Sesiapa.",
    "prog.hero.subtitle":
      "Banner boleh dipesan. Iklan boleh diatur. Nama di atas poster boleh dicetak. Namun ada satu perkara yang tidak tersedia untuk dibeli di mana-mana jua sepanjang tahun ini.",
    "prog.hero.scroll": "Skrol untuk menerokai",
    "prog.problem.eyebrow": "Persoalan",
    "prog.problem.title.1": "Apakah Sebenarnya",
    "prog.problem.title.2": "Yang Kita Peroleh?",
    "prog.problem.intro":
      "Kita semua sudah pernah melaluinya. Logo yang terselit kecil di sudut poster — dilalui ramai, dilihat sedikit. Buku program yang dicetak rapi tetapi berakhir di dalam laci pejabat. Banner yang berdiri tegak pada malam persembahan, namun esoknya sudah dilipat dan dimasukkan ke dalam van.",
    "prog.problem.question":
      "Lalu pihak pengurusan bertanya — Apakah sebenarnya yang kita peroleh daripada semua ini?",
    "prog.problem.realization":
      "Dan kita mencari jawapan. Tetapi yang ada hanyalah angka kehadiran. Bukan angka perubahan. Bukan jam-jam yang diisi dengan makna sebenar.",
    "prog.problem.typical.label": "Penajaan Acara Biasa",
    "prog.problem.typical.1": "Logo kecil di sudut poster",
    "prog.problem.typical.2": "Buku program di laci pejabat",
    "prog.problem.typical.3": "Banner dilipat selepas show",
    "prog.problem.typical.4": "Hanya angka kehadiran",
    "prog.problem.typical.5": "Meninggalkan gambar kenangan",
    "prog.problem.bbb.label": "Program Bangsawan Legasi",
    "prog.problem.bbb.1": "Nama dalam sejarah seni bangsawan",
    "prog.problem.bbb.2": "Kohort bernama rasmi dengan sijil",
    "prog.problem.bbb.3": "Modul kekal bertahun-tahun",
    "prog.problem.bbb.4": "Angka perubahan + jam bermakna",
    "prog.problem.bbb.5": "Meninggalkan kesan berpanjangan",
    "prog.discovery.eyebrow": "Penemuan",
    "prog.discovery.title.1": "Bayangkan Sesuatu",
    "prog.discovery.title.2": "Yang Berlainan",
    "prog.discovery.title.3": "Sama Sekali.",
    "prog.discovery.body.1":
      "Bayangkan dari minggu pertama — peserta yang tuan-tuan pilih sendiri, daripada komuniti yang tuan-tuan tentukan sendiri — melangkah masuk ke dalam sebuah alam yang selama ini hanya diketahui oleh segelintir manusia.",
    "prog.discovery.body.2":
      "Alam di mana set pentas diukir dengan tangan. Di mana kain songket untuk busana diraja ditenun helai demi helai. Di mana seorang pengarah duduk bersemuka dengan pelakonnya dan membina sebuah babak dari kekosongan — perlahan-lahan, sehingga babak itu bernyawa.",
    "prog.discovery.body.3":
      "Peserta yang tuan-tuan hantar bukan berdiri di luar dan memerhati dari jauh. Mereka berada di dalam bilik itu. Sebahagian daripada denyut nadi produksi itu sendiri.",
    "prog.discovery.cta": "Inilah Program Bangsawan Legasi.",
    "prog.journey.eyebrow": "Perjalanan Program",
    "prog.journey.title.1": "Dari Hari Pertama",
    "prog.journey.title.2": "Hingga Malam Terakhir.",
    "prog.journey.subtitle":
      "Ini bukan bengkel sehari yang bermula pukul sembilan dan berakhir pukul lima. Ini adalah 8 hingga 12 minggu perjalanan sepenuhnya.",
    "prog.journey.click_hint": "Klik setiap langkah untuk menerokai →",
    "prog.journey.duration": "8–12 Minggu",
    "prog.step.1.title": "Akademi Bangsawan Legasi",
    "prog.step.1.duration": "Minggu 1–2",
    "prog.step.1.summary":
      "Sesi pertama bermula di dalam sebuah bilik yang sunyi. Peserta duduk bersama penggiat seni yang telah lebih tiga dekad memikul warisan ini di atas bahu mereka.",
    "prog.step.1.detail":
      "Tiada tayangan slaid. Tiada pembesar suara. Hanya suara, cerita, dan ilmu yang dipindahkan dari satu tangan ke tangan yang berikutnya — sebagaimana seni ini diwarisi sejak zaman-berzaman. Begitulah ia bermula.",
    "prog.step.1.deliverable": "Pemindahan ilmu 35+ tahun",
    "prog.step.2.title": "Modul Latihan Bertauliah",
    "prog.step.2.duration": "Minggu 2–4",
    "prog.step.2.summary":
      "Setiap peserta akan membawa pulang sesuatu yang nyata — sebuah modul latihan yang dibangunkan secara khusus, selaras dengan NOSS Teater Kebangsaan Tahap 4–5.",
    "prog.step.2.detail":
      "Di atas kulit modul tersebut, tertera nama pertubuhan tuan-tuan. Dan modul itu tidak akan berhenti bernafas selepas program selesai — ia akan diajar, dirujuk, dan digunakan oleh fasilitator seni persembahan yang lain. Berbulan-bulan selepas itu. Bertahun-tahun selepas itu.",
    "prog.step.2.deliverable": "Kredit IP kekal",
    "prog.step.3.title": "Lawatan Berpandu ke Istana Budaya",
    "prog.step.3.duration": "Minggu 4–6",
    "prog.step.3.summary":
      "Peserta melangkah masuk ke Istana Budaya bukan ketika dewannya kosong — tetapi ketika dewannya sedang bernafas. Ketika kru sedang mendirikan set.",
    "prog.step.3.detail":
      "Ketika alunan muzik sedang dicuba buat kali pertama. Ketika lampu sedang dilaras satu per satu oleh tangan yang sudah bertahun-tahun mengenal setiap sudut pentas itu. Semuanya dipandu oleh orang dalam. Semuanya disertai cerita di sebalik setiap keputusan yang dibuat. Akses sebegini tidak pernah dibuka kepada orang luar.",
    "prog.step.3.deliverable": "Akses eksklusif IB",
    "prog.step.4.title": "Akses ke Sebalik Tabir",
    "prog.step.4.duration": "Minggu 5–8",
    "prog.step.4.summary":
      "Ada sebuah dunia yang tidak akan pernah dilihat oleh mana-mana penonton. Dunia di mana pelakon mengulangi baris dialognya berpuluh kali sehingga ayat itu menjadi sebahagian daripada dirinya.",
    "prog.step.4.detail":
      "Di mana pengarah berdiri di tengah-tengah pentas yang masih kosong dan berkata — Sekali lagi. Di mana sebuah babak yang akhirnya kelihatan mudah pada malam persembahan sebenarnya dilahirkan daripada berjam-jam kerja keras yang tidak diketahui sesiapa. Peserta tuan-tuan akan berada di situ. Melihat. Mendengar. Memahami. Dan setiap momen itu boleh dijadikan bahan dokumentasi CSR pertubuhan tuan-tuan.",
    "prog.step.4.deliverable": "Content CSR sedia guna",
    "prog.step.5.title": "Sentuhan Terus Dengan Aset Produksi",
    "prog.step.5.duration": "Minggu 6–9",
    "prog.step.5.summary":
      "Busana diraja yang kain songketnya mengambil berminggu-minggu untuk disiapkan. Prop keris yang diukir oleh tangan pengukir yang mewarisi kepandaian datuknya.",
    "prog.step.5.detail":
      "Peralatan holografik yang akan menghidupkan watak kayangan buat pertama kali di atas pentas Istana Budaya. Peserta tidak melihat semua ini dalam gambar. Mereka menyentuhnya. Mereka merasai berat fabrik itu di tapak tangan. Mereka memahami apa yang diperlukan untuk membawa sebuah hikayat dari atas kertas ke atas pentas.",
    "prog.step.5.deliverable": "Sentuhan artifak sebenar",
    "prog.step.6.title": "Malam Persembahan",
    "prog.step.6.duration": "30 Okt – 1 Nov 2026",
    "prog.step.6.summary":
      "Peserta menduduki tempat mereka di Panggung Sari, Istana Budaya. Lampu semakin malap. Tirai terbuka.",
    "prog.step.6.detail":
      "Dan mereka mengetahui sesuatu yang penonton lain tidak tahu — mereka mengetahui apa yang tersembunyi di sebalik setiap babak yang terbentang di hadapan mereka. Kerana mereka pernah berada di sana ketika babak itu masih belum sempurna. Ini bukan sekadar menonton sebuah pertunjukan. Ini menggenapkan sebuah perjalanan.",
    "prog.step.6.deliverable": "Pengalaman pantas bangsawan",
    "prog.step.7.title": "Penutupan Produksi",
    "prog.step.7.duration": "Selepas show",
    "prog.step.7.summary":
      "Dari mula hingga pengakhiran. Dari lampu pertama yang dihidupkan sehinggalah lampu terakhir dipadamkan.",
    "prog.step.7.detail":
      "Seluruh perjalanan itu — dari awal hingga habis — nama pertubuhan tuan-tuan ada di situ. Bukan di atas dinding. Di dalam cerita itu sendiri.",
    "prog.step.7.deliverable": "Laporan akhir lengkap",
    "prog.hidden.eyebrow": "Nilai Yang Sering Terlepas Pandang",
    "prog.hidden.title.1": "Yang Ini Tidak",
    "prog.hidden.title.2": "Boleh Dibeli.",
    "prog.hidden.intro":
      "Barisan pelakon dan penggiat seni kami bukan sahaja hidup di atas pentas. Mereka aktif di ruang media sosial. Mereka akan berkongsi cerita tentang sesi latihan. Tentang proses di sebalik tabir. Dan di dalam cerita-cerita tersebut — nama program tuan-tuan.",
    "prog.hidden.calculator_title":
      "Sekiranya tuan-tuan hendak membeli capaian yang setara melalui iklan berbayar...",
    "prog.hidden.organic_label": "Melalui Program Ini",
    "prog.hidden.paid_label": "Sekiranya Dibeli Berasingan",
    "prog.hidden.cost_label": "Anggaran kos iklan berbayar",
    "prog.hidden.savings_label": "Anda menjimatkan",
    "prog.hidden.organic.1": "Cerita organik dari pelakon",
    "prog.hidden.organic.2": "Kongsi proses di sebalik tabir",
    "prog.hidden.organic.3": "Nama dalam kisah sebenar",
    "prog.hidden.organic.4": "Reach media sosial semula jadi",
    "prog.hidden.note":
      "Semua itu diperoleh secara percuma melalui program ini. Kerana ia bukan datang daripada belanjawan pemasaran — ia datang daripada orang-orang yang ikhlas berkongsi apa yang sedang mereka lalui.",
    "prog.board.eyebrow": "Apa Yang Tuan-Tuan Bawa Ke Bilik Mesyuarat",
    "prog.board.title.1": "Jawapan Kepada:",
    "prog.board.title.2": "\"Apa Yang Kita Dapat?\"",
    "prog.board.subtitle":
      "Ini adalah bahagian yang tuan-tuan letakkan di atas meja apabila pihak pengurusan bertanya.",
    "prog.board.1.title": "Kohort Bernama Rasmi",
    "prog.board.1.tag": "Identiti Program",
    "prog.board.1.desc":
      "Kohort Waris [Nama Pertubuhan] 2026. Sebuah nama yang ada dalam rekod. Ada dalam sijil. Ada dalam laporan. Boleh diceritakan semula — bukan dengan kata-kata sahaja, tetapi dengan bukti yang boleh dipegang.",
    "prog.board.2.title": "Laporan Program Lengkap",
    "prog.board.2.tag": "Data Siap Dilaporkan",
    "prog.board.2.desc":
      "Bilangan peserta. Jam latihan bagi setiap elemen. Senarai aktiviti. Sijil penyertaan rasmi setiap peserta. Semuanya dalam format yang boleh terus dibentangkan kepada lembaga pengarah. Tiada kerja tambahan yang perlu dilakukan oleh pihak tuan-tuan.",
    "prog.board.3.title": "Dokumentasi Sedia Guna",
    "prog.board.3.tag": "Content CSR",
    "prog.board.3.desc":
      "Gambar dan rakaman video daripada setiap elemen program — dari sesi akademi sehinggalah ke penutupan produksi. Boleh digunakan terus untuk laporan tahunan, media sosial, dan pembentangan kepada pihak berkepentingan. Ini bukan gambar bergaya. Ini dokumentasi perjalanan yang sebenar.",
    "prog.board.4.title": "Kredit Harta Intelek Kekal",
    "prog.board.4.tag": "Warisan Berpanjangan",
    "prog.board.4.desc":
      "Nama pertubuhan tuan-tuan pada modul latihan yang akan terus bernafas lama selepas malam persembahan berlalu. Fasilitator seni persembahan di seluruh negara akan membuka modul itu dan melihat nama tuan-tuan tertera di situ. Bukan sekali. Berulang kali. Bertahun-tahun lamanya.",
    "prog.board.5.title": "Liputan Media Tanpa Kos Tambahan",
    "prog.board.5.tag": "Publisiti Organik",
    "prog.board.5.desc":
      "Istana Budaya dibuka semula. 500 Tahun Kesultanan Perak disambut. Holografik pertama dalam bangsawan di IB. Ketiga-tiga perkara ini adalah berita — media perdana tidak perlu dijemput. RTM, TV AlHijrah, Bernama, akhbar arus perdana akan hadir atas kehendak mereka sendiri. Dan logo tuan-tuan ada dalam setiap liputan.",
    "prog.scarcity.eyebrow": "Kekangan",
    "prog.scarcity.title.1": "Apabila Tempat",
    "prog.scarcity.title.2": "Dipenuhi,",
    "prog.scarcity.title.3": "Ia Dipenuhi.",
    "prog.scarcity.body.1":
      "Program ini hanya mampu menampung bilangan penaja yang terhad. Bukan kerana kami sengaja mengehadkan. Tetapi kerana apa yang kami tawarkan adalah akses yang sebenar — kepada pentas yang sebenar, kepada kru yang sebenar, kepada proses yang sebenar.",
    "prog.scarcity.body.2":
      "Sambutan 500 Tahun Kesultanan Perak hanya tiba sekali dalam jangka hayat seseorang. Istana Budaya baru sahaja membuka pintunya semula. Teknologi holografik dalam dunia bangsawan di Istana Budaya — baris pertama sejarah itu hanya ditulis satu kali sahaja.",
    "prog.scarcity.first_mover":
      "Yang pertama melangkah masuk — itulah yang akan dikenang sebagai yang pertama.",
    "prog.calc.eyebrow": "Perkiraan",
    "prog.calc.title.1": "Berapakah Nilai",
    "prog.calc.title.2": "Sebenarnya?",
    "prog.calc.intro":
      "Seandainya tuan-tuan ingin membina program seumpama ini dari awal dengan pihak ketiga, inilah anggarannya. Gerak slider untuk lihat perbandingan.",
    "prog.calc.slider_label": "Tahap penajaan yang dipertimbangkan",
    "prog.calc.tier.1": "Saujana",
    "prog.calc.tier.2": "Sinar Warisan",
    "prog.calc.tier.3": "Wira Budaya",
    "prog.calc.cost_breakdown": "Pecahan Kos Sekiranya Dibina Berasingan",
    "prog.calc.item.1": "Fasilitator industri bertaraf NOSS (3 bulan)",
    "prog.calc.item.1.cost": "RM 8,000 – 15,000",
    "prog.calc.item.2": "Pembangunan modul bertauliah",
    "prog.calc.item.2.cost": "RM 3,000 – 6,000",
    "prog.calc.item.3": "Dokumentasi profesional & penerbitan kandungan",
    "prog.calc.item.3.cost": "RM 4,000 – 7,000",
    "prog.calc.item.4": "Akses venue bertaraf nasional + kelulusan",
    "prog.calc.item.4.cost": "RM 2,000 – 3,000",
    "prog.calc.subtotal_label": "Jumlah kasar (sebelum nilai tambah)",
    "prog.calc.extras_label": "Nilai tambah yang tidak boleh dibeli secara berasingan",
    "prog.calc.extra.1": "Liputan media perdana organik",
    "prog.calc.extra.2": "Kredit harta intelek kekal",
    "prog.calc.extra.3": "Kohort bernama rasmi",
    "prog.calc.extra.4": "Malam di Istana Budaya",
    "prog.calc.extra.5": "Gelaran Rakan Strategik Warisan 500 Tahun",
    "prog.calc.total_value": "Anggaran nilai keseluruhan",
    "prog.calc.your_investment": "Pelaburan anda (pakej pilihan)",
    "prog.calc.roi": "Pulangan nilai atas pelaburan",
    "prog.calc.conclusion":
      "Kami tidak perlu menjawab persoalan tersebut. Angka-angka itu sudah menjawab dengan sendirinya.",
    "prog.closing.eyebrow": "Penutup",
    "prog.closing.title.1": "Dua Jenis",
    "prog.closing.title.2": "Pertubuhan Korporat.",
    "prog.closing.option.1.label": "Jenis Pertama",
    "prog.closing.option.1.text":
      "Membaca sehingga ke penghujung ini dan berkata — Menarik. Kita tengok dulu.",
    "prog.closing.option.2.label": "Jenis Kedua",
    "prog.closing.option.2.text":
      "Membaca sehingga ke penghujung ini — lalu terus menghubungi.",
    "prog.closing.future":
      "Kami sudah tahu yang mana satu yang akan berada di dalam Panggung Sari pada malam 30 Oktober 2026. Dengan nama mereka tertulis bukan di atas banner — tetapi di dalam sejarah seni persembahan negara ini.",
    "prog.closing.urgency":
      "Tempat kami terhad. Tawaran ini tidak akan dibuka semula dalam bentuk yang sama. Satu langkah sahaja yang diminta. Hubungi. Berbincang. Tiada komitmen pada peringkat ini.",
    "prog.closing.final_1": "Lima ratus tahun Kesultanan Perak.",
    "prog.closing.final_2": "Istana Budaya membuka pintunya semula.",
    "prog.closing.final_3": "Holografik pertama dalam dunia bangsawan.",
    "prog.closing.final_q": "Nama pertubuhan tuan-tuan — di dalam semua itu. Atau tidak.",
    "prog.closing.final_q_sub": "Hanya itu sahaja pilihan yang tersedia.",
    "legasi.cta.full": "Lihat Penerangan Penuh →",
    "legasi.cta.full.sub": "Laman web khas untuk CSR & pasukan pengurusan",
  },
  en: {
    // Nav
    "nav.apa": "What Sets Us Apart",
    "nav.tonton": "Watch",
    "nav.pakej": "Packages",
    "nav.legasi": "Legacy Program",
    "nav.faq": "FAQ",
    "nav.hubungi": "Get In Touch →",

    // Hero
    "hero.eyebrow":
      "30 October – 1 November 2026  ·  Panggung Sari, Istana Budaya",
    "hero.title.l1": "Five Hundred Years",
    "hero.title.l2": "Waiting. Now",
    "hero.title.l3": "The Time Has Come.",
    "hero.sub":
      "There are stories that have waited too long to be told. Beting Beras Basah II: Hikayat Mahkota Dewa is the night when that tale finally finds its stage — at Istana Budaya, with holographic light that has never touched the bangsawan world before.",
    "hero.cta.penaja": "Become a Sponsor →",
    "hero.cta.pdf": "⬇ Download Pitch Deck",
    "hero.countdown.label": "Time remaining before the curtain rises",
    "hero.countdown.days": "Days",
    "hero.countdown.hours": "Hours",
    "hero.countdown.mins": "Minutes",
    "hero.countdown.secs": "Seconds",

    // Three Firsts
    "firsts.eyebrow": "Three Firsts in Istana Budaya's History",
    "firsts.title.l1": "Three Things That Never",
    "firsts.title.l2": "Happened Together —",
    "firsts.title.l3": "Until This Night.",
    "firsts.1.badge": "First Time",
    "firsts.1.title": "500 Years, Finally Arrived",
    "firsts.1.desc":
      "This tale existed long before us. The history of the founding of Perak — of an arrow that fell to earth, of a treaty sealed at the river mouth — has only now reached its rightful stage. Five hundred years later. Right on time.",
    "firsts.2.badge": "First Time",
    "firsts.2.title": "Hologram in the Bangsawan World at IB",
    "firsts.2.desc":
      "Since Istana Budaya first lit up in 1999, no mystical character has ever appeared holographically on its stage. Beting Beras Basah II changes that — not merely with technology, but with soul. Characters that until now lived only in imagination now stand before the audience.",
    "firsts.3.badge": "Reopening",
    "firsts.3.title": "Istana Budaya Opens Its Doors Again",
    "firsts.3.desc":
      "There are people who have waited years just to sit again in Istana Budaya's red seats. They don't come merely to watch — they come to feel again something that was once lost. The first show they choose will be the show they tell their grandchildren about.",

    // Contrast
    "contrast.eyebrow": "This Is Different",
    "contrast.title.l1": "Some Sponsorships End",
    "contrast.title.l2": "When the Lights Go Out.",
    "contrast.title.l3": "This One Doesn't.",
    "contrast.bad.label": "Usually it goes like this",
    "contrast.good.label": "This night is different",
    "contrast.bad.1": "Small logo on a poster no one photographs",
    "contrast.bad.2": "Banners folded up after the final night",
    "contrast.bad.3": "Publicity that lasts only as long as the budget does",
    "contrast.bad.4":
      "Programs that exist, but no solid evidence to report",
    "contrast.bad.5": "Night ends, everything ends",
    "contrast.good.1":
      "Your brand name is written into the history of Malaysian bangsawan art",
    "contrast.good.2":
      "Mainstream media comes on their own — because this is news, not advertising",
    "contrast.good.3":
      "Human capital development program with 5 elements that can be documented and reported",
    "contrast.good.4":
      "Your name on training modules that will be taught long after this night passes",
    "contrast.good.5":
      "A title that will not be given to anyone else after this",

    // Video
    "video.eyebrow": "Previous Performance",
    "video.title.l1": "This Is Not a Promise.",
    "video.title.l2": "This Is a Record.",
    "video.sub":
      "What you see here is not a concept or moodboard. This is our past performance. Imagine it again — with holograms, at Istana Budaya, on the night of 30 October 2026.",
    "video.caption":
      "Previous performance — Beting Beras Basah I  ·  Pertubuhan Bangsawan Warisan Moraza Negeri Perak",

    // Credibility
    "cred.eyebrow": "Who We Are",
    "cred.title.l1": "Thirty-Five Years",
    "cred.title.l2": "Never Stopped.",
    "cred.stat1.num": "35+",
    "cred.stat1.lbl": "Years on stage",
    "cred.stat2.num": "40+",
    "cred.stat2.lbl": "Active arts practitioners",
    "cred.stat3.num": "4",
    "cred.stat3.lbl": "Countries visited",
    "cred.stat4.num": "500",
    "cred.stat4.lbl": "Years of sultanate celebrated",
    "cred.card1.title": "MOTAC Endorsement",
    "cred.card1.desc":
      "This production is officially endorsed by the Ministry of Tourism, Arts and Culture Malaysia.",
    "cred.card2.title": "Royal History",
    "cred.card2.desc":
      "We have performed before DYAM Raja DiHilir Perak and DYAM Raja Puan Muda Perak. This is not our first service to royal heritage.",
    "cred.card3.title": "Malaysia Book of Records",
    "cred.card3.desc":
      "Our name has been written in national records before. This production aims for new ones.",
    "cred.card4.title": "NOSS Expert Panel",
    "cred.card4.desc":
      "Our members are not only arts practitioners — they are NOSS Theatre Level 4–5 Expert Panel members and JKKN Cultural Arts Trainers.",
    "cred.card5.title": "Nusantara Collaboration",
    "cred.card5.desc":
      "Experts from Malaysia, Indonesia, and Singapore in one production. Not just a label — they work in the same room, toward one goal.",
    "cred.card6.title": "International Stage",
    "cred.card6.desc":
      "Czech Republic (2016), China (2019), Singapore (2019), Brunei (2022). We are not new to the world stage.",

    // Offer
    "offer.eyebrow": "Sponsorship Value",
    "offer.title.l1": "This Is Not Just",
    "offer.title.l2": "A Name On a Poster.",
    "offer.1.title": "Coverage That Comes On Its Own",
    "offer.1.desc":
      "RTM, TV AlHijrah, Bernama, Berita Harian — they don't need to be invited. The three historic factors of this production are stories they will seek out themselves. Your logo is in every coverage.",
    "offer.2.title": "A Title That Cannot Be Bought",
    "offer.2.desc":
      "Strategic Partner of the 500-Year Heritage. It's not just a title in a program book — it's how people will refer to your brand in the context of this historic national celebration.",
    "offer.3.title": "Human Capital Development Program",
    "offer.3.desc":
      "5 program elements that can be fully documented — from Academy to guided tours at IB during rehearsal. Each element produces reportable evidence.",
    "offer.4.title": "A Name That Lasts Beyond This Night",
    "offer.4.desc":
      "Training modules bearing your brand name will continue to be taught, referenced, and used repeatedly — by people who never heard your name that night.",
    "offer.5.title": "The Same Room With the Right People",
    "offer.5.desc":
      "Royal family, government leadership, leading corporate figures. Who is in the hall that night — that itself has immeasurable value.",
    "offer.6.title": "More Than One Border",
    "offer.6.desc":
      "The Malaysia-Indonesia-Singapore collaboration means your brand is seen by more than one audience. This is not a local story.",

    // Packages
    "pkg.eyebrow": "Sponsorship Packages",
    "pkg.title.l1": "Choose How",
    "pkg.title.l2": "You Want to Be Remembered.",
    "pkg.sub": "We don't sell empty space. We sell a place in history.",
    "pkg.1.tier": "Saujana Package",
    "pkg.1.name": "Strategic",
    "pkg.1.price": "RM 500 – 2,000",
    "pkg.1.note": "A meaningful first step",
    "pkg.1.f1": "Logo display in print & video media",
    "pkg.1.f2": "2 appreciation tickets",
    "pkg.1.f3": "Tax deduction eligibility",
    "pkg.2.badge": "MOST CHOSEN",
    "pkg.2.tier": "Sinar Warisan Package",
    "pkg.2.name": "Support",
    "pkg.2.price": "RM 2,001 – 10,000",
    "pkg.2.note": "Most chosen by our corporate partners",
    "pkg.2.f1": "Logo display in print & video media",
    "pkg.2.f2": "Active social media campaign",
    "pkg.2.f3": "2 appreciation tickets",
    "pkg.2.f4": "Tax deduction eligibility",
    "pkg.2.f5": "Exclusive BBB souvenir",
    "pkg.3.tier": "Wira Budaya Package",
    "pkg.3.name": "Premier",
    "pkg.3.price": "RM 10,001+",
    "pkg.3.note": "For those who want their name remembered longest",
    "pkg.3.f1": "30-second product ad before performance",
    "pkg.3.f2": "Exclusive exhibition space",
    "pkg.3.f3": "Logo display in print & video media",
    "pkg.3.f4": "Active social media campaign",
    "pkg.3.f5": "Tax deduction eligibility",
    "pkg.3.f6": "Exclusive BBB souvenir",
    "pkg.3.f7": "5% donation to Charity Fund",
    "pkg.3.f8": "Access to Bangsawan Legacy Program",
    "pkg.btn": "Get In Touch →",

    // Legasi
    "legasi.eyebrow":
      "For Sponsors Who Need More Than Just a Logo",
    "legasi.title.l1": "Bangsawan Legacy Program:",
    "legasi.title.l2": "Five Experiences",
    "legasi.title.l3": "Sold Nowhere Else.",
    "legasi.intro":
      "This is not a ceremonial program to be photographed and forgotten. Each element is designed intentionally — so participants bring home something real, and sponsors bring home reportable evidence for their board and Putrajaya.",
    "legasi.1.title": "Bangsawan Legacy Academy",
    "legasi.1.desc":
      "Structured learning sessions with arts practitioners who have been on stage for over three decades. Not empty seminars — this is knowledge transfer from experts to true heirs.",
    "legasi.2.title": "Accredited Training Module",
    "legasi.2.desc":
      "Specially developed physical training modules, aligned with NOSS National Theatre Level 4–5. Your brand name is printed on every copy — and it will continue to be used long after the show night passes.",
    "legasi.3.title": "Guided Tour at Istana Budaya",
    "legasi.3.desc":
      "Guided tour access to Istana Budaya during the rehearsal period — not as an ordinary visitor, but as an invited guest entering the heart of a national-scale production.",
    "legasi.4.title": "Behind the Scene Access",
    "legasi.4.desc":
      "Participants witness the real production process — from blocking sessions to technical rehearsal. The world behind the curtain that is rarely opened to outsiders. Can be used as your company's CSR content.",
    "legasi.5.title": "Direct Touch With Show Assets",
    "legasi.5.desc":
      "Royal costumes woven with care. Specially carved set props. Participants touch real production artifacts — not in pictures, not in a museum. In their own hands.",
    "legasi.sponsor.eyebrow": "What Sponsors Receive",
    "legasi.sponsor.title": "— Reportable Evidence",
    "legasi.sponsor.1.title": "Official Named Cohort",
    "legasi.sponsor.1.desc":
      '"Waris [Your Brand] Cohort 2026" — a name that can be reported, proven, and celebrated in annual CSR and ESG reports.',
    "legasi.sponsor.2.title": "Documentation of Each Element",
    "legasi.sponsor.2.desc":
      "Photos and videos from each program session — can be used directly as your company's CSR content without additional work.",
    "legasi.sponsor.3.title": "Ready-to-Report Data",
    "legasi.sponsor.3.desc":
      "Number of participants, activity hours per element, official participation certificates — ready for board tabling or submission to Putrajaya.",
    "legasi.sponsor.4.title": "Permanent IP Credit",
    "legasi.sponsor.4.desc":
      "Your brand name on training modules that will continue to be taught and referenced. This is not an ad that expires. This is heritage.",
    "legasi.metric1.num": "20–30",
    "legasi.metric1.lbl": "Selected students",
    "legasi.metric2.num": "5",
    "legasi.metric2.lbl": "Program elements",
    "legasi.metric3.num": "96–120",
    "legasi.metric3.lbl": "Training hours",
    "legasi.metric4.num": "8–12",
    "legasi.metric4.lbl": "Program weeks",

    // FAQ
    "faq.eyebrow": "Frequently Asked Questions",
    "faq.title.l1": "Have Questions?",
    "faq.title.l2": "We Have Answers.",
    "faq.1.q": "Is this sponsorship eligible for tax deduction?",
    "faq.1.a":
      "Yes. Sponsorship to a registered arts organization is typically eligible for tax deduction. We will provide all necessary documents — you just need to verify with your company accountant to ensure it aligns with current tax conditions.",
    "faq.2.q": "How can we include this in our annual ESG/CSR report?",
    "faq.2.a":
      "The Bangsawan Legacy Program produces a complete program report containing the number of beneficiaries, training hours per element, and participation certificates. All in a format that can be directly inserted into your annual ESG report under human capital development and community social responsibility categories.",
    "faq.3.q": "How long does the Bangsawan Legacy Program run?",
    "faq.3.a":
      "The program runs for 8 to 12 weeks before the show. Selected students go through all five program elements progressively, and you will receive periodic progress reports throughout that period.",
    "faq.4.q": "Can we specify who we want to benefit?",
    "faq.4.a":
      "Yes. You can set criteria — B40 students, rural communities, specific educational institutions, or youth from states you target. Our screening process will be tailored to your company's CSR program requirements.",
    "faq.5.q": "Is media coverage guaranteed?",
    "faq.5.a":
      "Three reasons mainstream media will attend without needing to be invited: the reopening of Istana Budaya, the 500 Years of Perak Sultanate celebration, and holographic technology's first appearance in bangsawan at IB. This is not an ordinary event — it's news. Official MOTAC support also helps ensure coverage from government media channels.",
    "faq.6.q": "How do we get started?",
    "faq.6.a":
      "The easiest way — contact us directly via WhatsApp or download our pitch deck to present to your company's management. We will arrange a brief discussion session to understand your needs, and recommend the most suitable package.",

    // Form
    "form.eyebrow": "Contact Us",
    "form.title.l1": "Have Questions About",
    "form.title.l2": "Sponsorship Opportunities?",
    "form.title.l3": "Leave a Message.",
    "form.sub":
      "Fill out the form below and our team will contact you within 24 hours. Or reach us directly via WhatsApp.",
    "form.name": "Full Name",
    "form.name.ph": "E.g: Ahmad bin Abdullah",
    "form.email": "Corporate Email",
    "form.email.ph": "E.g: ahmad@company.com.my",
    "form.phone": "Phone Number",
    "form.phone.ph": "E.g: +60123456789",
    "form.company": "Company / Organization",
    "form.company.ph": "E.g: Company ABC Sdn Bhd",
    "form.package": "Package of Interest",
    "form.package.select": "— Please select —",
    "form.message": "Your Message",
    "form.message.ph":
      "Tell us about your company's sponsorship objectives...",
    "form.submit": "Send Inquiry →",
    "form.submitting": "Sending...",
    "form.success.title": "Thank you!",
    "form.success.desc":
      "Your message has been received. Our team will contact you within 24 hours.",
    "form.error":
      "Sorry, there was an error. Please try again or contact us directly via WhatsApp.",

    // Final CTA
    "cta.eyebrow": "Before the Door Closes",
    "cta.title.l1": "Three Firsts.",
    "cta.title.l2": "One Night.",
    "cta.title.l3": "After This, Never Again.",
    "cta.sub":
      "History has never waited for anyone. We open this opportunity to a limited number of sponsors — and when that opportunity closes, it closes forever. Contact us today.",
    "cta.wa": "Contact via WhatsApp",
    "cta.pdf": "⬇ Download Pitch Deck (PDF)",
    "cta.note":
      "Pertubuhan Bangsawan Warisan Moraza Negeri Perak  ·  Endorsed by MOTAC  ·  Istana Budaya 2026",

    // Footer
    "footer.title": "Beting Beras Basah II: Hikayat Mahkota Dewa",
    "footer.org": "Pertubuhan Bangsawan Warisan Moraza Negeri Perak",
    "footer.copy":
      "© 2026 Pertubuhan Bangsawan Warisan Moraza Negeri Perak. All rights reserved.",

    // Tags
    "tag.1": "Malaysia Creative Economy",
    "tag.2": "SDG 4: Quality Education",
    "tag.3": "SDG 8: Decent Work",
    "tag.4": "MADANI Framework",
    "tag.5": "NOSS Theatre Level 4–5",

    // ═══════════════════════════════════════════════════════
    // PROGRAM LEGASI DEDICATED PAGE (/program-legasi) — EN
    // ═══════════════════════════════════════════════════════
    "prog.nav.back": "← Back to Home",
    "prog.nav.cta": "Contact Us →",
    "prog.hero.eyebrow": "Full Briefing · Bangsawan Legacy Program",
    "prog.hero.title.1": "A Door",
    "prog.hero.title.2": "That Has Never",
    "prog.hero.title.3": "Opened to Anyone.",
    "prog.hero.subtitle":
      "Banners can be ordered. Ads can be arranged. Names on posters can be printed. Yet there is one thing that is not available for purchase anywhere this year.",
    "prog.hero.scroll": "Scroll to explore",
    "prog.problem.eyebrow": "The Question",
    "prog.problem.title.1": "What Do We",
    "prog.problem.title.2": "Actually Get?",
    "prog.problem.intro":
      "We've all been through it. A small logo in the corner of a poster — passed by many, barely noticed. A neatly printed program book that ends up in an office drawer. A banner standing tall on performance night, but folded up and put in a van the next day.",
    "prog.problem.question":
      "Then management asks — What did we actually get from all this?",
    "prog.problem.realization":
      "And we look for answers. But all we have are attendance numbers. Not numbers of change. Not hours filled with real meaning.",
    "prog.problem.typical.label": "Typical Event Sponsorship",
    "prog.problem.typical.1": "Small logo in poster corner",
    "prog.problem.typical.2": "Program book in office drawer",
    "prog.problem.typical.3": "Banner folded after show",
    "prog.problem.typical.4": "Only attendance numbers",
    "prog.problem.typical.5": "Leaves souvenir photos",
    "prog.problem.bbb.label": "Bangsawan Legacy Program",
    "prog.problem.bbb.1": "Name in bangsawan art history",
    "prog.problem.bbb.2": "Official named cohort with certificates",
    "prog.problem.bbb.3": "Modules lasting for years",
    "prog.problem.bbb.4": "Change numbers + meaningful hours",
    "prog.problem.bbb.5": "Leaves lasting impact",
    "prog.discovery.eyebrow": "The Discovery",
    "prog.discovery.title.1": "Imagine Something",
    "prog.discovery.title.2": "Completely",
    "prog.discovery.title.3": "Different.",
    "prog.discovery.body.1":
      "Imagine from week one — participants you choose yourself, from communities you specify yourself — stepping into a world that until now has been known only to a handful of people.",
    "prog.discovery.body.2":
      "A world where stage sets are carved by hand. Where songket fabric for royal attire is woven thread by thread. Where a director sits face-to-face with actors and builds a scene from emptiness — slowly, until that scene comes alive.",
    "prog.discovery.body.3":
      "The participants you send don't stand outside observing from afar. They are in that room. Part of the very pulse of the production.",
    "prog.discovery.cta": "This is the Bangsawan Legacy Program.",
    "prog.journey.eyebrow": "Program Journey",
    "prog.journey.title.1": "From Day One",
    "prog.journey.title.2": "To the Final Night.",
    "prog.journey.subtitle":
      "This is not a one-day workshop starting at nine and ending at five. This is a full 8 to 12 week journey.",
    "prog.journey.click_hint": "Click each step to explore →",
    "prog.journey.duration": "8–12 Weeks",
    "prog.step.1.title": "Bangsawan Legacy Academy",
    "prog.step.1.duration": "Week 1–2",
    "prog.step.1.summary":
      "The first session begins in a quiet room. Participants sit with arts practitioners who have carried this heritage on their shoulders for over three decades.",
    "prog.step.1.detail":
      "No slideshows. No microphones. Just voice, story, and knowledge transferred from one hand to the next — as this art has been inherited for generations. That is how it begins.",
    "prog.step.1.deliverable": "35+ years knowledge transfer",
    "prog.step.2.title": "Accredited Training Module",
    "prog.step.2.duration": "Week 2–4",
    "prog.step.2.summary":
      "Each participant brings home something tangible — a specially developed training module, aligned with NOSS National Theatre Level 4–5.",
    "prog.step.2.detail":
      "On the cover of that module, your organization's name is printed. And the module will not stop breathing after the program ends — it will be taught, referenced, and used by other performance arts facilitators. For months after. For years after.",
    "prog.step.2.deliverable": "Permanent IP credit",
    "prog.step.3.title": "Guided Tour of Istana Budaya",
    "prog.step.3.duration": "Week 4–6",
    "prog.step.3.summary":
      "Participants enter Istana Budaya not when its hall is empty — but when its hall is breathing. When crew is setting up the stage.",
    "prog.step.3.detail":
      "When music is being tried for the first time. When lights are being adjusted one by one by hands that have known every corner of that stage for years. All guided by insiders. All accompanied by stories behind every decision made. Access like this has never been opened to outsiders.",
    "prog.step.3.deliverable": "Exclusive IB access",
    "prog.step.4.title": "Behind the Scenes Access",
    "prog.step.4.duration": "Week 5–8",
    "prog.step.4.summary":
      "There is a world that no audience will ever see. A world where actors repeat their dialogue dozens of times until the line becomes part of who they are.",
    "prog.step.4.detail":
      "Where a director stands in the middle of an empty stage and says — Once more. Where a scene that finally looks easy on performance night was actually born from hours of hard work no one knows about. Your participants will be there. Seeing. Hearing. Understanding. And every moment can become your organization's CSR documentation.",
    "prog.step.4.deliverable": "Ready-to-use CSR content",
    "prog.step.5.title": "Direct Touch with Production Assets",
    "prog.step.5.duration": "Week 6–9",
    "prog.step.5.summary":
      "Royal attire whose songket fabric takes weeks to complete. Keris props carved by hands inheriting their grandfather's craftsmanship.",
    "prog.step.5.detail":
      "Holographic equipment that will bring otherworldly characters to life for the first time on the Istana Budaya stage. Participants don't see these in pictures. They touch them. They feel the weight of that fabric in their palms. They understand what it takes to bring a tale from paper to stage.",
    "prog.step.5.deliverable": "Touch real artifacts",
    "prog.step.6.title": "Performance Night",
    "prog.step.6.duration": "Oct 30 – Nov 1, 2026",
    "prog.step.6.summary":
      "Participants take their seats at Panggung Sari, Istana Budaya. Lights dim. Curtain opens.",
    "prog.step.6.detail":
      "And they know something other audience members don't — they know what's hidden behind every scene spread before them. Because they were there when that scene was still imperfect. This is not just watching a performance. This is completing a journey.",
    "prog.step.6.deliverable": "Immersion in bangsawan",
    "prog.step.7.title": "Production Closing",
    "prog.step.7.duration": "After show",
    "prog.step.7.summary":
      "From beginning to end. From the first light turned on to the last light extinguished.",
    "prog.step.7.detail":
      "That entire journey — from start to finish — your organization's name is there. Not on the wall. Inside the story itself.",
    "prog.step.7.deliverable": "Complete final report",
    "prog.hidden.eyebrow": "Often Overlooked Value",
    "prog.hidden.title.1": "This Cannot",
    "prog.hidden.title.2": "Be Bought.",
    "prog.hidden.intro":
      "Our actors and arts practitioners don't only live on stage. They are active on social media. They will share stories about training sessions. About the process behind the scenes. And in those stories — your program's name.",
    "prog.hidden.calculator_title":
      "If you wanted to buy equivalent reach through paid advertising...",
    "prog.hidden.organic_label": "Through This Program",
    "prog.hidden.paid_label": "If Purchased Separately",
    "prog.hidden.cost_label": "Estimated paid ad cost",
    "prog.hidden.savings_label": "You save",
    "prog.hidden.organic.1": "Organic stories from actors",
    "prog.hidden.organic.2": "Behind-the-scenes process sharing",
    "prog.hidden.organic.3": "Name in real stories",
    "prog.hidden.organic.4": "Natural social media reach",
    "prog.hidden.note":
      "All of that is obtained for free through this program. Because it doesn't come from a marketing budget — it comes from people sincerely sharing what they are going through.",
    "prog.board.eyebrow": "What You Bring to the Boardroom",
    "prog.board.title.1": "The Answer To:",
    "prog.board.title.2": "\"What Do We Get?\"",
    "prog.board.subtitle":
      "This is the part you put on the table when management asks.",
    "prog.board.1.title": "Official Named Cohort",
    "prog.board.1.tag": "Program Identity",
    "prog.board.1.desc":
      "Waris [Your Organization] Cohort 2026. A name that's in the records. In certificates. In reports. Can be retold — not just with words, but with evidence you can hold.",
    "prog.board.2.title": "Complete Program Report",
    "prog.board.2.tag": "Ready-to-Report Data",
    "prog.board.2.desc":
      "Number of participants. Training hours per element. Activity list. Official participation certificates for each participant. All in a format that can be directly presented to the board of directors. No additional work required from your side.",
    "prog.board.3.title": "Ready-to-Use Documentation",
    "prog.board.3.tag": "CSR Content",
    "prog.board.3.desc":
      "Photos and video recordings from every program element — from academy sessions to production closing. Can be used directly for annual reports, social media, and stakeholder presentations. These aren't stylized photos. This is documentation of a real journey.",
    "prog.board.4.title": "Permanent IP Credit",
    "prog.board.4.tag": "Lasting Heritage",
    "prog.board.4.desc":
      "Your organization's name on training modules that will continue to breathe long after the performance night passes. Performance arts facilitators across the country will open that module and see your name printed there. Not once. Repeatedly. For years.",
    "prog.board.5.title": "Media Coverage at No Extra Cost",
    "prog.board.5.tag": "Organic Publicity",
    "prog.board.5.desc":
      "Istana Budaya reopens. 500 Years of Perak Sultanate celebrated. First holographic in bangsawan at IB. These three things are news — mainstream media doesn't need to be invited. RTM, TV AlHijrah, Bernama, mainstream newspapers will attend on their own. And your logo is in every coverage.",
    "prog.scarcity.eyebrow": "Limitation",
    "prog.scarcity.title.1": "When Spots",
    "prog.scarcity.title.2": "Are Filled,",
    "prog.scarcity.title.3": "They Are Filled.",
    "prog.scarcity.body.1":
      "This program can only accommodate a limited number of sponsors. Not because we deliberately limit it. But because what we offer is real access — to a real stage, to a real crew, to a real process.",
    "prog.scarcity.body.2":
      "The 500 Years of Perak Sultanate celebration comes only once in a lifetime. Istana Budaya has just reopened its doors. Holographic technology in bangsawan at Istana Budaya — the first line of that history is written only once.",
    "prog.scarcity.first_mover":
      "The first to step in — that is who will be remembered as the first.",
    "prog.calc.eyebrow": "Calculation",
    "prog.calc.title.1": "What Is the Value",
    "prog.calc.title.2": "Really?",
    "prog.calc.intro":
      "If you wanted to build a program like this from scratch with a third party, here's the estimate. Move the slider to see the comparison.",
    "prog.calc.slider_label": "Sponsorship level being considered",
    "prog.calc.tier.1": "Saujana",
    "prog.calc.tier.2": "Sinar Warisan",
    "prog.calc.tier.3": "Wira Budaya",
    "prog.calc.cost_breakdown": "Cost Breakdown If Built Separately",
    "prog.calc.item.1": "NOSS-level industry facilitator (3 months)",
    "prog.calc.item.1.cost": "RM 8,000 – 15,000",
    "prog.calc.item.2": "Accredited module development",
    "prog.calc.item.2.cost": "RM 3,000 – 6,000",
    "prog.calc.item.3": "Professional documentation & content production",
    "prog.calc.item.3.cost": "RM 4,000 – 7,000",
    "prog.calc.item.4": "National-level venue access + approvals",
    "prog.calc.item.4.cost": "RM 2,000 – 3,000",
    "prog.calc.subtotal_label": "Gross total (before added value)",
    "prog.calc.extras_label": "Added value that cannot be purchased separately",
    "prog.calc.extra.1": "Organic mainstream media coverage",
    "prog.calc.extra.2": "Permanent intellectual property credit",
    "prog.calc.extra.3": "Official named cohort",
    "prog.calc.extra.4": "Night at Istana Budaya",
    "prog.calc.extra.5": "Strategic Partner of 500-Year Heritage title",
    "prog.calc.total_value": "Estimated total value",
    "prog.calc.your_investment": "Your investment (selected package)",
    "prog.calc.roi": "Value return on investment",
    "prog.calc.conclusion":
      "We don't need to answer that question. The numbers answer it themselves.",
    "prog.closing.eyebrow": "Closing",
    "prog.closing.title.1": "Two Types",
    "prog.closing.title.2": "of Corporate Organizations.",
    "prog.closing.option.1.label": "First Type",
    "prog.closing.option.1.text":
      "Reads to the end and says — Interesting. Let's see first.",
    "prog.closing.option.2.label": "Second Type",
    "prog.closing.option.2.text":
      "Reads to the end — then immediately contacts us.",
    "prog.closing.future":
      "We already know which one will be in Panggung Sari on the night of October 30, 2026. With their name written not on a banner — but in the history of this country's performing arts.",
    "prog.closing.urgency":
      "Our spots are limited. This offer will not reopen in the same form. One step is all that's asked. Contact. Discuss. No commitment at this stage.",
    "prog.closing.final_1": "Five hundred years of Perak Sultanate.",
    "prog.closing.final_2": "Istana Budaya reopens its doors.",
    "prog.closing.final_3": "First holographic in the bangsawan world.",
    "prog.closing.final_q": "Your organization's name — in all of that. Or not.",
    "prog.closing.final_q_sub": "That is the only choice available.",
    "legasi.cta.full": "View Full Briefing →",
    "legasi.cta.full.sub": "Dedicated page for CSR & management teams",
  },

};


type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Read saved language on first render (lazy initializer — no effect needed)
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") return "ms";
    const saved = localStorage.getItem("bbb-lang") as Language | null;
    return saved === "ms" || saved === "en" ? saved : "ms";
  });

  // Set <html lang> once on mount and whenever lang changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("bbb-lang", newLang);
    }
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return ctx;
}
