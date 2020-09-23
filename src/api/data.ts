import axios from 'axios';

// const w_url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${process.env.serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

export const korea = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 1);

  let startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  if (date.getHours() < 10) {
    startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' +
      (date.getDate() - 1)
    ).slice(-2)}`;
  }

  const k_url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${process.env.serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&  =json`;

  const data = await axios.get(k_url);
  const items = data.data.response.body.items.item;
  const info = {
    numbers: {
      DPN: 0,
      Death: 0,
      IPN: 0,
    },
    Date: '',
  };

  info.numbers.DPN = items.decideCnt;
  info.numbers.Death = items.deathCnt;
  info.numbers.IPN = items.careCnt;
  info.Date = items.createDt;

  return info;
};

export const today = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 1);

  let startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  if (date.getHours() < 10) {
    startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' +
      (date.getDate() - 1)
    ).slice(-2)}`;
  }

  const Kworld_url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

  const data = await axios.get(Kworld_url);

  const items = data.data.response.body.items.item;
  const info = {
    numbers: {
      DPN: 0,
      Local: 0,
      Rate: 0,
    },
    Date: '',
  };

  info.numbers.DPN = items[18].incDec;
  info.numbers.Rate = items[18].qurRate;
  info.numbers.Local = items[18].localOccCnt;
  info.Date = items[18].stdDay;
  return info;
};

export const k_city = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 1);

  let startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  if (date.getHours() < 10) {
    startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' +
      (date.getDate() - 1)
    ).slice(-2)}`;
  }

  const Kcity_url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${process.env.serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}&_type=json`;

  const data = await axios.get(Kcity_url);
  const items = data.data.response.body.items.item;

  const info = {
    k_city: [],
    cn_name: [],
    en_name: [],
    numbers: {
      DPN: [],
    },
    Date: [],
  };

  for (const keys in items) {
    (<any>info.k_city)[keys] = (<any>items)[keys].gubun;
    (<any>info.cn_name)[keys] = (<any>items)[keys].gubunCn;
    (<any>info.en_name)[keys] = (<any>items)[keys].gubunEn;
    (<any>info.numbers.DPN)[keys] = items[keys].incDec;
    (<any>info.Date)[keys] = items[keys].stdDay;
  }

  return info;
};

export const w_city = async () => {
  const date = new Date();
  date.setHours(date.getHours() - 1);

  let startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  let endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
    -2,
  )}${('0' + date.getDate()).slice(-2)}`;

  if (date.getHours() < 10) {
    startDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(
      -2,
    )}${('0' + (date.getDate() - 1)).slice(-2)}`;
    endDt = `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${(
      '0' +
      (date.getDate() - 1)
    ).slice(-2)}`;
  }

  const world_url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${process.env.serviceKey}&pageNo=1&numOfRows=10&startCreateDt=${startDt}&endCreateDt=${endDt}`;

  const data = await axios.get(world_url);
  const items = data.data.response.body.items.item;

  const info = {
    w_city: [],
    cn_name: [],
    en_name: [],
    numbers: {
      DPN: [],
    },
    Date: [],
  };

  for (const keys in items) {
    (<any>info.w_city)[keys] = (<any>items)[keys].nationNm;
    (<any>info.cn_name)[keys] = (<any>items)[keys].nationNmCn;
    (<any>info.en_name)[keys] = (<any>items)[keys].nationNmEn;
    (<any>info.numbers.DPN)[keys] = items[keys].natDefCnt;
    (<any>info.Date)[keys] = items[keys].stdDay;
  }

  return info;
}