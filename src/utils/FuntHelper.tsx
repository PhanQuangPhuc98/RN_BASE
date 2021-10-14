export const Add_Comma = (data: any) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
export default {
  Add_Comma,
};
