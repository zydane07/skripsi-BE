import { Gender, Job, Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const main = async () => {
  // delete all data
  await prisma.work.deleteMany();
  await prisma.talentInterest.deleteMany();
  await prisma.rule.deleteMany();
  await prisma.user.deleteMany();

  // create user
  await prisma.user.createMany({
    data: [
      {
        email: 'muhammadzydane3@gmail.com',
        name: 'Zydane',
        password: await bcrypt.hash('asdddd', 10),
        isAdmin: true,
        gender: Gender.Pria,
        job: Job.Lainnya,
      },
      {
        email: 'muhammadzydan3@gmail.com',
        name: 'Rina',
        password: await bcrypt.hash('asdddd', 10),
        gender: Gender.Wanita,
        job: Job.Mahasiswa,
      },
    ],
  });

  // seed work
  await prisma.work.createMany({
    data: [
      {
        code: 'P01',
        name: 'Pertanian, Kehutanan dan Perikanan',
        suggestion:
          'Saran pada bidang pekerjaan Pertanian, Kehutanan, dan Perikanan diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang pekerjaan  Pertanian, Kehutanan, dan Perikanan, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti kemampuan beradaptasi untuk kemajuan proses pertanian dan keinginan pasar atau distributor yang terus berubah dan berkembang, kemampuan manajemen waktu dan organisasi, literasi teknologi untuk mengetahui perkembangan teknologi yang dapat diterapkan dalam bidang pekerjaan ini, teamwork untuk dapat mencapai tujuan bersama, mampu memecahkan masalah, fleksibilitas, dan memiliki sifat kepemimpinan. Dalam bidang pekerjaan ini, pengguna dapat memilih prospek pekerjaan seperti Spesialis Operasi Pertanian, Marketing Agricultural, Konsultan Pertanian, Ahli Bioteknologi, System Analysis, Surveyor Tanah, Quality Assurance dan Quality Control, Ahli peternakan dan Pengembangan Hewan, Compliance Officer, Ahli Genetika, Teknisi Konservasi Lingkungan, Konsultan Perikanan, Peneliti, Pengembang Komoditi, Jurnalistik Agriculture, dan lain sebagainya. Tentu diperlukan pengembangan pengalaman yang sesuai bagi pengguna untuk mendapatkan pekerjaan yang sesuai pula dengan bidang pekerjaan Pertanian, Kehutanan, dan Perikanan.',
        competence: [
          'Menerapkan Keselamatan dan Kesehatan Kerja (K3)',
          'Mengorganisasikan Pekerjaan',
          'Melakukan Komunikasi Efektif',
          'Menyusun Laporan Hasil Pengukuran Perpetaan Hutan',
          'Menyusun Laporan Hasil Inventarisasi Tegakan Hutan',
        ],
      },
      {
        code: 'P02',
        name: 'Perdagangan Besar Dan Eceran',
        suggestion:
          'Saran pada bidang Perdagangan Besar Dan Eceran diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang pekerjaan Perdagangan Besar Dan Eceran, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti sikap ramah dengan pelanggan, keinginan untuk belajar, keterampilan dalam manajemen waktu yang baik, kemampuan untuk melakukan banyak tugas, kemauan untuk beradaptasi dalam pengelolaan perdagangan, ketahanan dalam menangani semua jenis pelanggan, kemudahan dalam persuasi dan keterampilan dalam bercerita. Selain hal itu, adapula beberapa hardskill yang diperlukan seperti pengetahuan produk yang mendalam, mendengarkan secara aktif, keterampilan komunikasi yang kuat, layanan pelanggan dan keterampilan penjualan ritel, keterampilan, dan pengalaman teknologi perdagangan. Tentu diperlukan rasa ingin tahu yang mendalam terhadap pengembangan pengelolaan perdagangan dalam skala besar maupun eceran agar tetap dapat bersaing dengan kompetitor.',
        competence: [
          'Melakukan Riset Pasar Ekspor',
          'Melaksanakan Promosi Ekspor',
          'Melakukan Korespondensi Ekspor',
          'Menerapkan Persyaratan Akses Pasar di Negara Tujuan Ekspor',
          'Melakukan Identifikasi Komoditi Ekspor',
        ],
      },
      {
        code: 'P03',
        name: 'Industri Pengolahan',
        suggestion:
          'Saran pada bidang pekerjaan industri pengolahan diberikan dengan mempertimbangkan minat dan bakat pengguna. Dalam meraih bidang pekerjaan industri pengolahan, pengguna perlu memperhatikan softskill maupun hardskill seperti etika dan kepatuhan, kemampuan menyelesaikan masalah, kemampuan berpikir kritis, cepat dan tanggap, dan lain sebaginya. Pengguna dalam meraih bidang ini perlu mengembangkan potensi diri sendiri dan memiliki keinginan untuk dapat mempelajari hal baru demi penunjang karir di bidang ini.',
        competence: [
          'Melakukan Pemasangan Komponen Papan Utama, Sub-papan, dan Penutup Atas',
          'Memasang Modul Pemindai Sidik Jari',
          'Memasang Konektor Antena',
        ],
      },
      {
        code: 'P04',
        name: 'Penyediaan Akomodasi dan Penyediaan Makan Minum',
        suggestion:
          'Saran pada bidang pekerjaan Penyediaan Akomodasi dan Penyediaan Makan Minum diberikan dengan mempertimbangkan minat dan bakat pengguna. Dalam meraih bidang pekerjaan ini, pengguna perlu memiliki softskill maupun hardskill seperti kemampuan komunikasi, kemampuan analisa pasar, kemampuan berhitung, manajemen waktu, kemampuan persuasi, dan lain sebagainya. Dalam hal ini, pengguna perlu mengembangkan diri untuk dapat meraih bidang pekerjaan ini dan mampu bersaing secara kompeten dengan bidang serupa.',
        competence: [
          'Memproses Pemesanan',
          'Memberikan Layanan Resepsionis Akomodasi',
          'Menyimpan Catatan Keuangan',
        ],
      },
      {
        code: 'P05',
        name: 'Konstruksi',
        suggestion:
          'Saran pada bidang pekerjaan Konstruksi diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang pekerjaan Konstruksi, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti Fisik dan mental yang kuat, Sanggup menghadapi tekanan, Kemampuan berhitung yang kuat, Keterampilan komputer yang baik, Mampu menggambar atau desain, dan Manajemen waktu yang teratur.    Prospek pekerjaan dalam bidang konstruksi juga sangat beragam seperti Insinyur situs pembangunan, Insinyur struktural atau air, Surveyor pengendalian bangunan, Konsultan konstruksi bangunan, kontraktor insinyur sipil, Pengacara hak paten, dan lain sebagainya. Tentu pengguna harus memiliki usaha untuk mengembangkan diri dalam mencapai pekerjaan dibidang konstruksi.',
        competence: [
          'Melaksanakan Kebijakan Keselamatan dan Kesehatan Kerja dan Lingkungan (K3L) di Tempat Kerja',
          'Berkomunikasi di Lingkungan Kerja',
          'Melakukan Persiapan, Pembuatan Fondasi, Struktur, dan Arsitektur',
        ],
      },
      {
        code: 'P06',
        name: 'Jasa Pendidikan',
        suggestion:
          'Saran pada bidang pekerjaan Jasa Pendidikan diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang pekerjaan Jasa Pendidikan, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti keinginan belajar dan rasa ingin tahu yang tinggi, komunikasi yang baik, rasa percaya diri yang tinggi, kesabaran, kreativitas, dan dedikasi dalam dunia pendidikan.    Prospek pekerjaan dalam bidang jasa pendidikan juga sangat beragam seperti tenaga pengajar, koodinator pembelajaran, konselor edukasi, administrasi pendidikan, dan lain sebagainya. Tentu pengguna harus memiliki usaha untuk mengembangkan diri dalam mencapai pekerjaan dibidang jasa pendidikan.',
        competence: [
          'Merumuskan Standar Keterampilan',
          'Mengidentifikasi Kebutuhan Pelatihan Secara Makro dan Mikro',
          'Menentukan Kebutuhan Pelatihan Individu',
        ],
      },
      {
        code: 'P07',
        name: 'Transportasi dan Pergudangan',
        suggestion:
          'Saran pada bidang pekerjaan Transportasi dan Pergudangan diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Transportasi dan Pergudangan, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti perencanaan dan eksekusi, penyelesaian perselisihan, pengembangan proses kerja, pemodelan transportasi, penguasaan warehouse, fisik dan mental yang kuat, dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang Transportasi dan Pergudangan.',
        competence: [
          'Melakukan Pemeliharaan Kebersihan',
          'Menerapkan Prosedur Keselamatan Kerja di Tempat Kerja',
          'Mencatat Data Barang',
        ],
      },
      {
        code: 'P08',
        name: 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib',
        suggestion:
          'Saran pada bidang pekerjaan Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib dengan mempertimbangkan minat dan bakat pengguna. Bidang ini mencakup kegiatan yang sifatnya pemerintahan, yang umumnya dilakukan oleh administrasi dan mencakup perundang-undangan dan penerjemahan hukum yang berkaitan dengan pengadilan, seperti halnya administrasi program berdasarkan peraturan perundangan-undangan, kegiatan legislatif, perpajakan, pertahanan negara, keamanan dan keselatan negara, pelayanan imigrasi, hubungan luar negeri dan administrasi program pemerintah. Pengguna perlu memperhatikan aspek-aspek yang dibutuhkan apabila ingin memilih bidang pekerjaan ini',
        competence: [
          'Menyusun Rencana Kerja Individu dan Operasional',
          'Membuat Program Keamanan',
          'Menyusun Rancangan Kebijakan dan Strategi Keamanan',
        ],
      },
      {
        code: 'P09',
        name: 'Jasa Kesehatan dan Kegiatan Sosial',
        suggestion:
          'Saran pada bidang pekerjaan Jasa Kesehatan dan Kegiatan Sosial diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Jasa Kesehatan dan Kegiatan Sosial, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti memperhatikan etika profesi, kemampuan berpikir taktis dan organisasional,keterampilan berkomunikasi yang baik, integritas yang tinggi, dan lain sebagainya. Adapun beberapa prospek kerja dalam bidang ini seperti tenaga medis, psikologi klinis, keperawatan, kebidanan, kefarmasian, kesehatan masyarakat, kesehatan lingkungan, gizi, dokter dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang ini.',
        competence: [
          'Melaksanakan Program Pemeriksaan Kesehatan Tenaga Kerja',
          'Melaksanakan Program Promosi Kesehatan bagi Pekerja',
          'Melaksanakan Program Keselamatan Kerja',
        ],
      },
      {
        code: 'P10',
        name: 'Jasa Perusahaan',
        suggestion:
          'Saran pada bidang pekerjaan Jasa Perusahaan diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Jasa Perusahaan, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti kemampuan analisa yang baik, manajemen waktu dan organisasi, penyelesaian masalah, cekatan dan cepat, kemampuan negosiasi yang baik, dan lain sebagainya. Adapun beberapa prospek kerja dalam bidang ini seperti Penyedia service layanan. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang Jasa Perusahaan.',
        competence: [
          'Menganalisis Lingkungan Pengadaan Jasa',
          'Mengembangkan Organisasi Pengadaan Jasa',
          'Menyusun Kebutuhan dan Anggaran untuk Pengadaan Jasa',
        ],
      },
      {
        code: 'P11',
        name: 'Pertambangan dan Penggalian',
        suggestion:
          'Saran pada bidang pekerjaan Pertambangan dan Penggalian diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Pertambangan dan Penggalian, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti kemampuan observasi dan ketelitian yang tinggi, kerjasama tim yang baik, mampu memecahkan permasalahan, kemampuan analisa, berpikir kritis dan lain sebagainya. Adapun beberapa prospek kerja seperti Teknisi atau operator, insinyur pertambangan, ahli lingkungan, dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang Pertambangan dan Penggalian.',
        competence: [
          'Melakukan Tinjauan Rencana Tambang Terbuka Jangka Panjang',
          'Melakukan Tinjauan Geologi, Hidrologi, Hidrogeologi, Geokimia, dan Geoteknik Tambang',
          'Membuat Rencana Tambang Jangka Pendek',
        ],
      },
      {
        code: 'P12',
        name: 'Jasa Keuangan dan Asuransi',
        suggestion:
          'Saran pada bidang pekerjaan Jasa Keuangan dan Asuransi diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Jasa Keuangan dan Asuransi, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti komunikasi yang baik, pemecahan masalah, layanan pelanggan yang baik, kecerdasan emosional, kemampuan berhitung yang baik, kerjasama tim, manajemen waktu yang baik, dan lain sebagainya. Adapun beberapa prospek kerja seperti spesialis di fintech, akuntan publik, perencana keuangan, konsultan keuangan, banker dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang Jasa keuangan dan Asuransi.',
        competence: [
          'Mengembangkan Produk Asuransi dan Reasuransi',
          'Memasarkan Produk Asuransi dan Reasuransi',
          'Mengelola Portofolio Tertanggung/Peserta',
        ],
      },
      {
        code: 'P13',
        name: 'Informasi dan Komunikasi',
        suggestion:
          'Saran pada bidang pekerjaan Informasi dan Komunikasi diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Informasi dan Komunikasi, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti komunikasi, bahasa pengkodean, kerjasama tim yang baik, jaringan komputer, analisis data, virtualisasi, kreativitas, penyelesaian masalah, berpikir kritis, dan lain sebagainya. Adapun beberapa prospek kerja seperti information security analyst, Machine Learning Engineer, Data Scientist, Web Developer, Software Development Engineer, Computer Hardware Engineer, Cloud Architect, dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang Informasi dan Komunikasi.',
        competence: [
          'Melaksanakan Pekerjaan dalam Tim',
          'Merancang Algoritma Pemrograman',
          'Menggunakan Spesifikasi Program',
        ],
      },
      {
        code: 'P14',
        name: 'Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah',
        suggestion:
          'Saran pada bidang pekerjaan Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah, pengguna perlu memperhatikan aspek-aspek seperti kepedulian terhadap lingkungan, pengetahuan mendalam terkait pengelolaan limbah, keinginan untuk belajar hal baru, berpikir kritis, pemecahan permasalahan dan lain sebagainya. Tentu pengguna harus memerhatikan aspek-aspek yang dibutuhkan apabila ingin mendapatkan pekerjaan dibidang Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah.',
        competence: [
          'Memonitor Kualitas Air Permukaan dan Tanah',
          'Mengolah Air Permukaan, Air Payau, atau Air Laut',
          'Merencanakan Pengawasan Kualitas Air',
        ],
      },
      {
        code: 'P15',
        name: 'Real Estat',
        suggestion:
          'Saran pada bidang pekerjaan Real Estat diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Real Estat, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti kemampuan berkomunikasi, keterampilan memecahkan masalah, keterampilan teknologi, pengetahuan mengenai industri real estat,keterampilan negosiasi, etika dan integritas, pengetahuan hukum real estat, pemasaran dan lain sebagainya.Adapun cara meningkatkan keterampilan dalam bidang real estat bisa dilakukan dengan beberapa cara seperti mengikuti kursus pra-lisesnsi, sertifikasi, bergabung dengan organisasi profesional, membaca dan meneliti, menyelesaikan pendidikan berkelanjutan dan lain sebagainya.',
        competence: [
          'Memberikan Saran Legal dan Non-legal dalam Transaksi Properti',
          'Melakukan Negosiasi dengan Pemilik Properti untuk Mendapatkan Daftar Properti',
          'Mengadakan Pertemuan Bisnis dengan Pemilik/Penjual',
        ],
      },
      {
        code: 'P16',
        name: 'Artistik/kesenian',
        suggestion:
          'Saran pada bidang pekerjaan Artistik/kesenian diberikan dengan mempertimbangkan minat dan bakat yang dimiliki pengguna. Dalam meraih bidang Artistik/kesenian, pengguna perlu memperhatikan soft-skill dan hard-skill yang dibutuhkan seperti kreativitas yang tinggi, berpikir secara kritis, penyelesaian masalah, detail dan terstruktur, berwawasan luas, tekun, dan lain sebagainya. Adapun beberapa prospek kerja seperti Kurator, Kritikus, konservator seni, seniman, graphic designer, entrepreneur, industri periklanan, dan lain sebagainya. Tentu pengguna harus memiliki kemampuan-kemampuan yang diperlukan dalam mencapai pekerjaan dibidang artistik/kesenian',
        competence: [
          'Mengimplementasikan Desain Panggung',
          'Menentukan Spesifikasi, Bahan, dan Komponen Properti Pertunjukan',
          'Merancang dan Melaksanakan Aspek Teknis Pertunjukan',
        ],
      },
    ],
  });

  // seed talent interest
  await prisma.talentInterest.createMany({
    data: [
      {
        code: 'M01',
        name: 'Outdoor',
        description:
          'Minat yang berhubungan dengan pekerjaan di lapangan/luar kantor',
        example: ['Petani', 'Pemain Bola', 'Nelayan'],
      },
      {
        code: 'M02',
        name: 'Mechanical',
        description:
          'Minat yang berhubungan dengan pekerjaan yang berhubungan dengan mekanik/Teknik',
        example: ['Insinyur', 'Montir', 'Teknisi'],
      },
      {
        code: 'M03',
        name: 'Computational',
        description:
          'Minat yang berhubungan dengan pekerjaan yang membutuhkan kemampuan berhitung',
        example: ['Ahli statistik', 'Auditor', 'Akuntan'],
      },
      {
        code: 'M04',
        name: 'Scientific',
        description:
          'minat yang berhubungan dengan pekerjaan dilaboratorium atau meneliti',
        example: ['Ilmuwan', 'Peneliti'],
      },
      {
        code: 'M05',
        name: 'Persuasive',
        description:
          'minat yang berhubungan dengan pekerjaan yang menggunakan kemampuan persuasi',
        example: ['Konselor', 'Sales', 'Penyiar'],
      },
      {
        code: 'M06',
        name: 'Aesthetic ',
        description:
          'minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni dan kreasi',
        example: ['Arsitek', 'Pekerja seni', 'Desainer'],
      },
      {
        code: 'M07',
        name: 'Literary',
        description:
          'merupakan minat yang berhubungan dengan pekerjaan yang berkaitan dengan membaca atau menulis',
        example: ['Wartawan', 'Penulis', 'Penyair'],
      },
      {
        code: 'M08',
        name: 'Musical',
        description:
          'minat yang berhubungan dengan pekerjaan yang berkaitan dengan seni musik',
        example: ['Pianis', 'Arranger lagu', 'Gitaris'],
      },
      {
        code: 'M09',
        name: 'Social Service',
        description:
          'minat yang berhubungan dengan pekerjaan yang berkaitan dengan pelayanan sosial',
        example: ['Dosen', 'Penyuluh lapangan'],
      },
      {
        code: 'M10',
        name: 'Clerical',
        description:
          'minat yang berhubungan dengan pekerjaan yang memerlukan ketelitian dan ketekunan',
        example: ['Sekretaris', 'Manager bank'],
      },
      {
        code: 'M11',
        name: 'Practical',
        description:
          'minat yang berhubungan dengan pekerjaan yang praktis dan memerlukan keterampilan',
        example: ['Ahli bangunan', 'Karya petukangan'],
      },
      {
        code: 'M12',
        name: 'Medical ',
        description:
          'minat yang berhubungan dengan pekerjaan yang berhubungan dengan pelayanan medis',
        example: ['Dokter', 'Fisioterapi', 'Apoteker', 'bidan'],
      },
      {
        code: 'B01',
        name: 'Kecerdasan Umum',
        description:
          'Bakat yang berhubungan dengan kemampaun Inteligensi secara menyeluruh yang dimiliki individu untuk menyelesaikan beberapa tugas yang bervariasi',
        example: [],
      },
      {
        code: 'B02',
        name: 'Penalaran Verbal',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami informasi yang disampaikan dalam bentuk Bahasa, baik lisan maupun tulisan',
        example: [],
      },
      {
        code: 'B03',
        name: 'Penalaran Non-Verbal',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami symbol, bentuk dan bangun ruang',
        example: [],
      },
      {
        code: 'B04',
        name: 'Penalaran Numerik',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat meamhami dan mengolah berbagai data berupa angka melalui proses berhitung',
        example: [],
      },
      {
        code: 'B05',
        name: 'Pengetahuan Umum',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat menyerap informasi dari lingkungan dan memanfaatkannya dalam pemecahan masalah keseharian',
        example: [],
      },
      {
        code: 'B06',
        name: 'Kemampuan Ruang Bidang',
        description:
          'Bakat yang berhubungan dengan kemampuan memahami dan mengolah bentuk tiga dimensi',
        example: [],
      },
      {
        code: 'B07',
        name: 'Kemampuan Dasar Administrasi',
        description:
          'Bakat yang berhubungan dengan kemampuan untuk mengelompokkan data berdasarkan kriteria tertentu',
        example: [],
      },
      {
        code: 'B08',
        name: 'Daya Ingat',
        description:
          'Bakat yang berhubungan dengan kemampuan untuk menyimpan informasi jangka pendek dan jangka panjang',
        example: [],
      },
    ],
  });

  // seed rule
  const [
    M01,
    M02,
    M03,
    M04,
    M05,
    M06,
    M07,
    M08,
    M09,
    M10,
    M11,
    M12,
    B01,
    B02,
    B03,
    B04,
    B05,
    B06,
    B07,
    B08,
  ] = await prisma.talentInterest.findMany({});

  const [
    P01,
    P02,
    P03,
    P04,
    P05,
    P06,
    P07,
    P08,
    P09,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
    P16,
  ] = await prisma.work.findMany({});

  await prisma.rule.createMany({
    data: [
      // RULE 1
      {
        code: 'R01',
        talentInterestCode: M02.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: M04.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: M07.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: M11.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: M12.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: B02.code,
        workCode: P01.code,
      },
      {
        code: 'R01',
        talentInterestCode: B04.code,
        workCode: P01.code,
      },
      // RULE 2
      {
        code: 'R02',
        talentInterestCode: M02.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: M04.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: M05.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: M07.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: M12.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: B01.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: B02.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: B07.code,
        workCode: P02.code,
      },
      {
        code: 'R02',
        talentInterestCode: B08.code,
        workCode: P02.code,
      },
      // RULE 3
      {
        code: 'R03',
        talentInterestCode: M01.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: M02.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: M11.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: M12.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: B01.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: B02.code,
        workCode: P03.code,
      },
      {
        code: 'R03',
        talentInterestCode: B06.code,
        workCode: P03.code,
      },
      // RULE 4
      {
        code: 'R04',
        talentInterestCode: M02.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: M04.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: M07.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: M09.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: M12.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: B01.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: B03.code,
        workCode: P04.code,
      },
      {
        code: 'R04',
        talentInterestCode: B07.code,
        workCode: P04.code,
      },
      // RULE 5
      {
        code: 'R05',
        talentInterestCode: M01.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: M02.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: M04.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: M06.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: M11.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: M12.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: B02.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: B05.code,
        workCode: P05.code,
      },
      {
        code: 'R05',
        talentInterestCode: B06.code,
        workCode: P05.code,
      },
      // RULE 6
      {
        code: 'R06',
        talentInterestCode: M02.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M06.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M07.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M08.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M09.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M10.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M11.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: M12.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: B01.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: B02.code,
        workCode: P06.code,
      },
      {
        code: 'R06',
        talentInterestCode: B08.code,
        workCode: P06.code,
      },

      // RULE 7
      {
        code: 'R07',
        talentInterestCode: M02.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: M04.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: M07.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: M09.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: M12.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: B01.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: B02.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: B05.code,
        workCode: P07.code,
      },
      {
        code: 'R07',
        talentInterestCode: B07.code,
        workCode: P07.code,
      },
      // RULE 8
      {
        code: 'R08',
        talentInterestCode: M05.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: M09.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: M12.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: B01.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: B02.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: B07.code,
        workCode: P08.code,
      },
      {
        code: 'R08',
        talentInterestCode: B08.code,
        workCode: P08.code,
      },
      // RULE 9
      {
        code: 'R09',
        talentInterestCode: M03.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: M04.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: M07.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: M09.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: M11.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: M12.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: B01.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: B02.code,
        workCode: P09.code,
      },
      {
        code: 'R09',
        talentInterestCode: B04.code,
        workCode: P09.code,
      },
      // RULE 10
      {
        code: 'R10',
        talentInterestCode: M02.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M04.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M05.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M06.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M07.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M09.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: M12.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: B07.code,
        workCode: P10.code,
      },
      {
        code: 'R10',
        talentInterestCode: B08.code,
        workCode: P10.code,
      },
      // RULE 11
      {
        code: 'R11',
        talentInterestCode: M01.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: M02.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: M04.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: M11.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: M12.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: B01.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: B02.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: B05.code,
        workCode: P11.code,
      },
      {
        code: 'R11',
        talentInterestCode: B06.code,
        workCode: P11.code,
      },
      // RULE 12
      {
        code: 'R12',
        talentInterestCode: M04.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: M05.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: M07.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: M09.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: M12.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: B01.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: B02.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: B07.code,
        workCode: P12.code,
      },
      {
        code: 'R12',
        talentInterestCode: B08.code,
        workCode: P12.code,
      },
      // RULE 13
      {
        code: 'R13',
        talentInterestCode: M02.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M04.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M06.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M07.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M08.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M09.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M11.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: M12.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: B01.code,
        workCode: P13.code,
      },
      {
        code: 'R13',
        talentInterestCode: B02.code,
        workCode: P13.code,
      },
      // RULE 14
      {
        code: 'R14',
        talentInterestCode: M01.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M02.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M04.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M06.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M07.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M09.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M11.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: M12.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: B01.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: B02.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: B03.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: B05.code,
        workCode: P14.code,
      },
      {
        code: 'R14',
        talentInterestCode: B06.code,
        workCode: P14.code,
      },
      // RULE 15
      {
        code: 'R15',
        talentInterestCode: M02.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M04.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M06.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M07.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M09.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M11.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: M12.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: B01.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: B02.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: B04.code,
        workCode: P15.code,
      },
      {
        code: 'R15',
        talentInterestCode: B05.code,
        workCode: P15.code,
      },
      // RULE 16
      {
        code: 'R16',
        talentInterestCode: M02.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M04.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M06.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M07.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M08.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M09.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M10.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: M12.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: B01.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: B04.code,
        workCode: P16.code,
      },
      {
        code: 'R16',
        talentInterestCode: B08.code,
        workCode: P16.code,
      },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
