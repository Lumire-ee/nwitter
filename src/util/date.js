export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
  // let year = date.getFullYear();
  // let month = date.getMonth() + 1;
  // let day = date.getDate();

  // if (month < 10) {
  //   month = `0${month}`;
  // }
  // if (day < 10) {
  //   day = `0${day}`;
  // }

  // return `${year}-${month}-${day}`;
};

// 확인 필요
