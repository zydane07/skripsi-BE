import { Gender, Job, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // delete all data
  await prisma.work.deleteMany();
  await prisma.interest.deleteMany();
  await prisma.talent.deleteMany();
  // create admin
  const admin = [
    {
      email: 'muhammadzydane3@gmail.com',
      name: 'Zydane',
      password: 'asdd',
      isAdmin: true,
      gender: Gender.Pria,
      job: Job.Lainnya,
    },
  ];
  for (const data of admin) {
    const existingAdmin = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!existingAdmin) {
      await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: data.password,
          isAdmin: data.isAdmin,
          gender: data.gender,
          job: data.job,
        },
      });
    }
  }

  // seed work
  await prisma.work.createMany({
    data: [
      {
        code: 'P01',
        name: 'Pertanian, Kehutanan dan Perikanan',
        suggestion: '',
      },
      {
        code: 'P02',
        name: 'Perdagangan Besar Dan Eceran',
        suggestion: '',
      },
      {
        code: 'P03',
        name: 'Industri Pengolahan',
        suggestion: '',
      },
      {
        code: 'P04',
        name: 'Penyediaan Akomodasi dan Penyediaan Makan Minum',
        suggestion: '',
      },
      {
        code: 'P05',
        name: 'Konstruksi',
        suggestion: '',
      },
      {
        code: 'P06',
        name: 'Jasa Pendidikan',
        suggestion: '',
      },
      {
        code: 'P07',
        name: 'Transportasi dan Pergudangan',
        suggestion: '',
      },
      {
        code: 'P08',
        name: 'Administrasi Pemerintahan, Pertahanan dan Jaminan Sosial Wajib',
        suggestion: '',
      },
      {
        code: 'P09',
        name: 'Jasa Kesehatan dan Kegiatan Sosial',
        suggestion: '',
      },
      {
        code: 'P10',
        name: 'Jasa Perusahaan',
        suggestion: '',
      },
      {
        code: 'P11',
        name: 'Pertambangan dan Penggalian',
        suggestion: '',
      },
      {
        code: 'P12',
        name: 'Jasa Keuangan dan Asuransi',
        suggestion: '',
      },
      {
        code: 'P13',
        name: 'Informasi dan Komunikasi',
        suggestion: '',
      },
      {
        code: 'P14',
        name: 'Pengadaan Air, Pengelolaan Sampah dan Daur Ulang, Pembuangan dan Pembersihan Limbah dan Sampah',
        suggestion: '',
      },
      {
        code: 'P15',
        name: 'Real Estat',
        suggestion: '',
      },
      {
        code: 'P16',
        name: 'Artistik/kesenian',
        suggestion: '',
      },
    ],
  });

  // seed interest
  await prisma.interest.createMany({
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
    ],
  });

  // seed talent
  await prisma.talent.createMany({
    data: [
      {
        code: 'B01',
        name: 'Kecerdasan Umum',
        description:
          'Bakat yang berhubungan dengan kemampaun Inteligensi secara menyeluruh yang dimiliki individu untuk menyelesaikan beberapa tugas yang bervariasi',
      },
      {
        code: 'B02',
        name: 'Penalaran Verbal',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami informasi yang disampaikan dalam bentuk Bahasa, baik lisan maupun tulisan',
      },
      {
        code: 'B03',
        name: 'Penalaran Non-Verbal',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat memahami symbol, bentuk dan bangun ruang',
      },
      {
        code: 'B04',
        name: 'Penalaran Numerik',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat meamhami dan mengolah berbagai data berupa angka melalui proses berhitung',
      },
      {
        code: 'B05',
        name: 'Pengetahuan Umum',
        description:
          'Bakat yang berhubungan dengan kemampuan individu untuk dapat menyerap informasi dari lingkungan dan memanfaatkannya dalam pemecahan masalah keseharian',
      },
      {
        code: 'B06',
        name: 'Kemampuan Ruang Bidang',
        description:
          'Bakat yang berhubungan dengan kemampuan memahami dan mengolah bentuk tiga dimensi',
      },
      {
        code: 'B07',
        name: 'Kemampuan Dasar Administrasi',
        description:
          'Bakat yang berhubungan dengan kemampuan untuk mengelompokkan data berdasarkan kriteria tertentu',
      },
      {
        code: 'B08',
        name: 'Daya Ingat',
        description:
          'Bakat yang berhubungan dengan kemampuan untuk menyimpan informasi jangka pendek dan jangka panjang',
      },
    ],
  });

  // seed rule

  const [
    work_1,
    work_2,
    work_3,
    work_4,
    work_5,
    work_6,
    work_7,
    work_8,
    work_9,
    work_10,
    work_11,
    work_12,
    work_13,
    work_14,
    work_15,
    work_16,
  ] = await prisma.work.findMany();

  const [
    interest_1,
    interest_2,
    interest_3,
    interest_4,
    interest_5,
    interest_6,
    interest_7,
    interest_8,
    interest_9,
    interest_10,
    interest_11,
    interest_12,
  ] = await prisma.interest.findMany();

  const [
    talent_1,
    talent_2,
    talent_3,
    talent_4,
    talent_5,
    talent_6,
    talent_7,
    talent_8,
  ] = await prisma.talent.findMany();

  // console.log('code: ', interest_1.code, '\nname: ', interest_1.name);
  // console.log('code: ', interest_2.code, '\nname: ', interest_2.name);
  // console.log('code: ', interest_12.code, '\nname: ', interest_12.name);

  const rulesData = [
    {
      talentCodes: [talent_2.code, talent_4.code],
      interestCodes: [
        interest_2.code,
        interest_4.code,
        interest_7.code,
        interest_11.code,
        interest_12.code,
      ],
      workCode: work_1.code,
    },
    {
      talentCodes: [talent_1.code, talent_2.code, talent_7.code, talent_8.code],
      interestCodes: [
        interest_2.code,
        interest_4.code,
        interest_5.code,
        interest_7.code,
        interest_12.code,
      ],
      workCode: work_2.code,
    },
  ];

  console.log(rulesData);
  for (const ruleData of rulesData) {
    const talents = await prisma.talent.findMany({
      where: {
        code: { in: ruleData.talentCodes },
      },
    });

    if (talents.length !== ruleData.talentCodes.length) {
      const missingCodes = ruleData.talentCodes.filter(
        (code) => !talents.some((talent) => talent.code === code),
      );
      throw new Error(
        `Talents with codes [${missingCodes.join(', ')}] not found.`,
      );
    }

    const interests = await prisma.interest.findMany({
      where: { code: { in: ruleData.interestCodes } },
    });

    if (interests.length !== ruleData.interestCodes.length) {
      const missingCodes = ruleData.interestCodes.filter(
        (code) => !interests.some((interest) => interest.code === code),
      );
      throw new Error(
        `Interests with codes [${missingCodes.join(', ')}] not found.`,
      );
    }

    const work = await prisma.work.findUnique({
      where: { code: ruleData.workCode },
    });

    if (!work) {
      throw new Error(`Work with code '${ruleData.workCode}' not found.`);
    }

    for (const talent of talents) {
      for (const interest of interests) {
        await prisma.rule.create({
          data: {
            talentId: talent.id,
            interestId: interest.id,
            workId: work.id,
          },
        });
      }
    }
  }
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
