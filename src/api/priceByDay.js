import fakePrices from './fakePricesByDay.json';

function GetPriceByDay(month) {
  // return axios.get('/get-prices-by-day', {
  //   month: month,
  // });

  return fakePrices;
}

export { GetPriceByDay };
