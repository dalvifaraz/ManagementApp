export const currentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
};
