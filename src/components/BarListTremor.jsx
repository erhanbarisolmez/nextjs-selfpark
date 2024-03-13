import { BarList } from '@tremor/react';
const data = [
  {
    name: 'Toplam Otopark Sayısı',
    value: 456,
    href: 'https://twitter.com/tremorlabs',
  
  },
  {
    name: 'Boş Otopark sayısı',
    value: 351,
    href: 'https://google.com',
  
  },
  {
    name: 'Dolu Otopark Sayısı',
    value: 271,
    href: 'https://github.com/tremorlabs/tremor',

  },
  {
    name: 'Bugünkü Giriş Sayısı',
    value: 191,
    href: 'https://reddit.com',

  },
  {
    name: 'Gelir İstatistikleri',
    value: "1500TL",
    href: 'https://www.youtube.com/@tremorlabs3079',

  },
];

export function BarListTremor() {
  return (
    <>
  
      <BarList data={data} className="mt-2" />
      </>
  );
}