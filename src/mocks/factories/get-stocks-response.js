export const STOCK_TYPE = {
  samsung: "samsung",
  hyundai: "hyundai",
  usa: "usa",
};
export const getStocksResponse = (type = STOCK_TYPE.samsung) => {
  switch (type) {
    case STOCK_TYPE.usa:
      return usaStocks;

    case STOCK_TYPE.hyundai:
      return motorStocks;

    default:
      return samsungStocks;
  }
};

const samsungStocks = [
  {
    id: 1,
    name: "삼성전자보통주",
    url: "https://cdn.banksalad.com/invest/kospi/005930.png",
  },
  {
    id: 2,
    name: "삼성SDI보통주",
    url: "https://cdn.banksalad.com/invest/kospi/006400.png",
  },
];

const motorStocks = [
  {
    id: 1,
    name: "현대차",
    url: "https://cdn.banksalad.com/invest/kospi/005380.png",
  },
  {
    id: 2,
    name: "기아차",
    url: "https://cdn.banksalad.com/invest/kospi/000270.png",
  },
];

const usaStocks = [
  {
    id: 1,
    name: "마이크론테크놀로지",
    url: "https://cdn.banksalad.com/graphic/color/logo/global/mu.png",
  },
  {
    id: 2,
    name: "알파벳ClassA",
    url: "https://cdn.banksalad.com/bpl/101-icon/logo/global/googl.png",
  },
];
