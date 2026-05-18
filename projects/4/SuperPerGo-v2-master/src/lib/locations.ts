export type City = "ankara" | "antalya";

export interface District {
  slug: string;
  name: string;
  city: City;
  cityName: string;
  premium?: boolean;
}

function slugify(s: string) {
  return s
    .toLocaleLowerCase("tr")
    .replaceAll("ç", "c")
    .replaceAll("ğ", "g")
    .replaceAll("ı", "i")
    .replaceAll("ö", "o")
    .replaceAll("ş", "s")
    .replaceAll("ü", "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const ankaraDistricts: District[] = [
  "Çankaya", "Çayyolu", "Ümitköy", "Yaşamkent", "Beysukent", "Konutkent",
  "Mutlukent", "İncek", "Gölbaşı", "Oran", "Kavaklıdere", "Gaziosmanpaşa",
  "Bahçelievler", "Yenimahalle", "Keçiören", "Etimesgut", "Eryaman",
  "Pursaklar", "Mamak", "Sincan", "Altındağ", "Polatlı", "Beypazarı",
].map((n) => ({
  slug: slugify(n),
  name: n,
  city: "ankara" as City,
  cityName: "Ankara",
  premium: ["Çankaya","Çayyolu","Ümitköy","Yaşamkent","Beysukent","Konutkent","İncek","Oran","Kavaklıdere","Gaziosmanpaşa"].includes(n),
}));

export const antalyaDistricts: District[] = [
  "Konyaaltı", "Lara", "Muratpaşa", "Kepez", "Döşemealtı", "Aksu",
  "Belek", "Kundu", "Kemer", "Göynük", "Tekirova", "Beldibi",
  "Side", "Manavgat", "Alanya", "Kaş", "Kalkan", "Demre",
  "Finike", "Kumluca", "Serik",
].map((n) => ({
  slug: slugify(n),
  name: n,
  city: "antalya" as City,
  cityName: "Antalya",
  premium: ["Konyaaltı","Lara","Belek","Kundu","Kemer","Kalkan","Kaş"].includes(n),
}));

export const allDistricts: District[] = [...ankaraDistricts, ...antalyaDistricts];

export function findDistrict(slug: string) {
  return allDistricts.find((d) => d.slug === slug);
}