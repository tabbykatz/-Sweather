export const responseParser = (data) => {
  let newState = {};
  newState.location = `${data.city.name}, ${data.city.country}`;

  let tempsByDate = {};
  let dataByDate = {};

  for (let i = 0; i < data.list.length; i++) {
    let day = data.list[i].dt_txt.substring(0, 10);
    let icon, main;
    if (!tempsByDate[day]) {
      tempsByDate[day] = [data.list[i].main.temp];
    } else {
      tempsByDate[day].push(data.list[i].main.temp);
    }
    if (!dataByDate[day]) {
      dataByDate[day] = [
        data.list[i].weather[0].main,
        data.list[i].weather[0].icon,
      ];
    }
  }

  const keys = Object.keys(tempsByDate);

  keys.forEach((key, index) => {
    newState[key] = [
      tempsByDate[key].reduce((temp, sum) => temp + sum, 0) /
        tempsByDate[key].length,
      ...dataByDate[key],
    ];
  });
  return newState;
};
