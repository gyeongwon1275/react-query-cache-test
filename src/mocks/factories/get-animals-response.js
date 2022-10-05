export const ANIMAL_TYPE = {
  dog: "dog",
  cat: "cat",
  horse: "horse",
};

export const getAnimalsResponse = (type = ANIMAL_TYPE.dog) => {
  switch (type) {
    case ANIMAL_TYPE.cat:
      return cats;

    case ANIMAL_TYPE.horse:
      return horses;

    default:
      return dogs;
  }
};

const cats = [
  {
    id: "1",
    name: "scottishfold",
    url: "https://img.segye.com/content/image/2017/05/11/20170511514641.jpg",
  },
  {
    id: "2",
    name: "russianblue",
    url: "https://post-phinf.pstatic.net/MjAyMDAyMjFfMTU2/MDAxNTgyMjY3NzU5NjIz.A0pBp9nUk5Z5FcZB_nXuMKdYPVfAkL_QLH35EtLUBMMg.kuvs5BariiRKeAJTRX-2_lyLO5AA-p5gM5PO4a3Pqucg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4%ED%92%88%EC%A2%85_%EC%A2%85%EB%A5%98_%ED%8A%B9%EC%84%B1_%EB%9F%AC%EC%8B%9C%EC%95%88%EB%B8%94%EB%A3%A8_05.jpg?type=w1200",
  },
  {
    id: "3",
    name: "abyssinian",
    url: "https://images.mypetlife.co.kr/content/uploads/2019/06/09153715/Abyssinian-Cat-Wallpaper_02.jpg",
  },
];

const horses = [
  {
    id: "1",
    name: "thoroughbred",
    url: "https://mblogthumb-phinf.pstatic.net/20150129_33/kimdusl_1422528400745q8EXs_JPEG/%B8%BB%C0%C7_%C1%BE%B7%F9_%C7%B0%C1%BE_%BC%AD%B7%AF%BA%EA%B7%B9%B5%E5_%C1%BE.jpg?type=w2",
  },
  {
    id: "2",
    name: "arabian",
    url: "https://mblogthumb-phinf.pstatic.net/20150129_166/kimdusl_1422528399105Q3KKv_JPEG/%B8%BB%C0%C7_%C1%BE%B7%F9_%C7%B0%C1%BE_%BE%C6%B6%F8_%C1%BE.jpg?type=w2",
  },
  {
    id: "3",
    name: "abyssinian",
    url: "https://mblogthumb-phinf.pstatic.net/20150129_151/kimdusl_1422528402972VWPlQ_JPEG/%B8%BB%C0%C7_%C1%BE%B7%F9_%C7%B0%C1%BE_%BB%FE%C0%CC%BE%EE_%C1%BE.jpg?type=w2",
  },
];

const dogs = [
  {
    id: "1",
    name: "Retriever",
    url: "https://image.petmd.com/files/2022-06/golden-retriever.jpg",
  },
  {
    id: "2",
    name: "poodle",
    url: "http://image.dongascience.com/Photo/2017/07/14994185580021.jpg",
  },
  {
    id: "3",
    name: "Shiba Inu",
    url: "https://w.namu.la/s/02b021e2407842029ebeba959f14cf940d705e22a78be6ccedabd55b36a0b60aa319d82e1615ea60a3ef067edf72243f76029eb08b15b2ad7770663241f9bc05e554c9b705d07caf3dd1ec2ab29f2b521b329b7cfc8416a1114336b4f262059c",
  },
];
