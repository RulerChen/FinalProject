const Query = {
  card: async (parent, { id }, { CardModel }) => {
    let data = await CardModel.find({ id });
    return data;
  },
};
export default Query;
