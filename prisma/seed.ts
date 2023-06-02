import { Gender, Job, Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const main = async () => {
  // delete all data
  await prisma.work.deleteMany();
  await prisma.talentInterest.deleteMany();
  await prisma.rule.deleteMany();
  await prisma.user.deleteMany();

  // create admin
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
        password: await bcrypt.hash('123456', 10),
        gender: Gender.Wanita,
        job: Job.Mahasiswa,
      },
    ],
  });
  // const admin = [
  //   {
  //     email: 'muhammadzydane3@gmail.com',
  //     name: 'Zydane',
  //     password: 'asdddd',
  //     isAdmin: true,
  //     gender: Gender.Pria,
  //     job: Job.Lainnya,
  //   },
  // ];
  // for (const data of admin) {
  //   const existingAdmin = await prisma.user.findUnique({
  //     where: { email: data.email },
  //   });
  //   if (!existingAdmin) {
  //     await prisma.user.create({
  //       data: {
  //         email: data.email,
  //         name: data.name,
  //         password: data.password,
  //         isAdmin: data.isAdmin,
  //         gender: data.gender,
  //         job: data.job,
  //       },
  //     });
  //   }
  // }

  // seed work
  await prisma.work.createMany({
    data: [
      {
        code: 'P01',
        name: 'Pertanian, Kehutanan dan Perikanan',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P02',
        name: 'Perdagangan Besar Dan Eceran',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P03',
        name: 'Industri Pengolahan',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P04',
        name: 'Penyediaan Akomodasi dan Penyediaan Makan Minum',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P05',
        name: 'Konstruksi',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P06',
        name: 'Jasa Pendidikan',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P07',
        name: 'Transportasi dan Pergudangan',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P08',
        name: 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P09',
        name: 'Jasa Kesehatan dan Kegiatan Sosial',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P10',
        name: 'Jasa Perusahaan',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P11',
        name: 'Pertambangan dan Penggalian',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P12',
        name: 'Jasa Keuangan dan Asuransi',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P13',
        name: 'Informasi dan Komunikasi',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P14',
        name: 'Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P15',
        name: 'Real Estat',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
      },
      {
        code: 'P16',
        name: 'Artistik/kesenian',
        suggestion:
          'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.',
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
  ] = await prisma.talentInterest.findMany({
    orderBy: { code: 'asc' },
  });

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
  ] = await prisma.work.findMany({
    orderBy: { code: 'asc' },
  });

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
