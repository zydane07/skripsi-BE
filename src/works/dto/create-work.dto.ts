import { IsOptional, IsString, Matches, MinLength } from 'class-validator';

export class CreateWorkDto {
  @Matches(/P\d{2}/)
  code: string;

  @MinLength(5)
  @IsString()
  name: string;

  @IsOptional()
  suggestion: string =
    'Saran ini diberikan dengan mempertimbangkan minat, dan bakat yang dimiliki oleh pengguna, sifatnya tidak mutlak. Masih perlu dukungan oleh usaha, doa, kegigihan, serta pencarian informasi terkait dengan bidang yang ingin dituju. Dalam meraih bidang pekerjaan tersebut pengguna harus berusaha dengan maksimal seperti mengikuti pelatihan-pelatihan baik softskill maupun hardskill, memperbanyak informasi, memperluas koneksi, memperbanyak pengalaman dalam bidang yang dituju supaya bisa menjadi profesional.';
}
