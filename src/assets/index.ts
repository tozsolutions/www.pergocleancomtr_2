import avm1 from "./Referanslar/ref_avm_1.webp";
import avm2 from "./Referanslar/ref_avm_2.webp";
import avm3 from "./Referanslar/ref_avm_3.webp";
import avm5 from "./Referanslar/ref_avm_5.webp";
import cafes from "./Referanslar/ref_timefood.webp";
import bilkent from "./Referanslar/ref_bilkent.webp";
import cankaya from "./Referanslar/ref_cankaya.webp";
import cayyolu from "./Referanslar/ref_cayyolu.webp";
import etimesgut from "./Referanslar/ref_etimesgut.webp";
import golbasi from "./Referanslar/ref_golbasi.webp";
import kecioren from "./Referanslar/ref_kecioren.webp";
import kizilay from "./Referanslar/ref_kizilay.webp";
import mamak from "./Referanslar/ref_mamak.webp";
import pursaklar from "./Referanslar/ref_pursaklar.webp";
import sincan from "./Referanslar/ref_sincan.webp";
import umitkoy from "./Referanslar/ref_umitkoy.webp";
import incek from "./Referanslar/ref_incek.webp";

import sincanYeni from "./Referanslar/sincan_kepenk_yeni.jpg";
import antalyaKasYeni from "./Referanslar/antalya_kas_yeni.jpg";
import cankayaVillaImg from "./Referanslar/cankaya-luuq.jpg";

export const referencesData = [
  { img: avm1, location: "Antalya", brand: "Zincir Otel Grubu", service: "Tente Temizlik Bakım ve Restorasyonu" },
  { img: avm2, location: "Ankara · Çankaya", brand: "Konut Grubu", service: "Tente ve Güneş Paneli Bakım ve Restorasyonu" },
  { img: avm3, location: "Ankara · İncek", brand: "Kurumsal Grubu", service: "Toplu BioClimatic Bakım ve Restorasyonu" },
  { img: avm5, location: "Antalya · Kalkan", brand: "Konut Grubu", service: "Endüstriyel Bakım Restorasyon" },
  { img: cafes, location: "Ankara · Çayyolu", brand: "Çayyolu", service: "Pergola Bakım ve Restorasyonu" },
  { img: bilkent, location: "Ankara · İncek", brand: "Kurumsal Grup", service: "Tente Bakım ve Restorasyonu" },
  { img: sincanYeni, location: "Ankara · Çankaya", brand: "Ankara Villa", service: "Çankaya Cam Tavan Temizliği" },
  { img: antalyaKasYeni, location: "Antalya · Kaş", brand: "Deniz Kenarı", service: "Pergola Temizlik Bakım ve Restorasyonu" },
  { img: etimesgut, location: "Ankara · Etimesgut", brand: "Etimesgut", service: "Tente Bakımı" },
  { img: golbasi, location: "Ankara · Gölbaşı", brand: "Gölbaşı", service: "Havuzbaşı" },
  { img: kecioren, location: "Ankara · Keçiören", brand: "Keçiören", service: "Tente" },
  { img: kizilay, location: "Ankara · Kızılay", brand: "Kızılay", service: "Cephe Tente" },
  { img: mamak, location: "Ankara · Mamak", brand: "Mamak", service: "Pergola" },
  { img: pursaklar, location: "Ankara · Pursaklar", brand: "Pursaklar", service: "RollingRoof" },
  { img: sincan, location: "Ankara · Sincan", brand: "Sincan", service: "Kepenk" },
  { img: umitkoy, location: "Ankara · Ümitköy", brand: "Ümitköy", service: "Cafe" },
  { img: incek, location: "Ankara · Çankaya", brand: "İncek", service: "Pergola" },
];

import cankayaBaBefore from "./BA/cankaya_1_before.webp";
import cankayaBaAfter from "./BA/cankaya_2_after.webp";
import cayyoluBaBefore from "./BA/cayyolu_1_before.webp";
import cayyoluBaAfter from "./BA/cayyolu_2_after.webp";
import etimesgutBaBefore from "./BA/etimesgut_1_before.webp";
import etimesgutBaAfter from "./BA/etimesgut_2_after.webp";
import pursaklarBaBefore from "./BA/pursaklar_q_before.webp";
import pursaklarBaAfter from "./BA/pursaklar_2_after.webp";
import sincanBaBefore from "./BA/sincan_1_before.webp";
import sincanBaAfter from "./BA/sincan_2_after.webp";
import testBaBefore from "./BA/test_1_before.webp";
import testBaAfter from "./BA/test_1_after.webp";
import yenimahalleBaBefore from "./Referanslar/yenimahalle_1_before.webp";
import yenimahalleBaAfter from "./Referanslar/yenimahalle_2_after.webp";

export const beforeAfter = {
  cankaya: { before: cankayaBaBefore, after: cankayaBaAfter, label: "Çankaya — Pergola" },
  cayyolu: { before: cayyoluBaBefore, after: cayyoluBaAfter, label: "Çayyolu — Pergola" },
  etimesgut: { before: etimesgutBaBefore, after: etimesgutBaAfter, label: "Etimesgut — Tente" },
  pursaklar: { before: pursaklarBaBefore, after: pursaklarBaAfter, label: "Pursaklar — Zip Perde" },
  sincan: { before: sincanBaBefore, after: sincanBaAfter, label: "Sincan — Kepenk" },
  test: { before: testBaBefore, after: testBaAfter, label: "Yenimahalle — BioClimatic" },
  yenimahalle: { before: yenimahalleBaBefore, after: yenimahalleBaAfter, label: "Yenimahalle — Pergola" },
};

import bioclimaticImg from "./Blog/bioclimatic_rr_1.webp";
import pergolaImg from "./Blog/pergola_1.webp";
import zipImg from "./Blog/zip_1.webp";

export const blogImages = {
  bioclimatic: bioclimaticImg,
  pergola: pergolaImg,
  zipScreen: zipImg,
};

import logoImg from "./logo.webp";
export const logo = logoImg;
