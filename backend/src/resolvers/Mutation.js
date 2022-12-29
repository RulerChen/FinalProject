const Mutation = {
    createCard: async (parent, { id,url, text, tag }, { CardModel }) => {
      const newData = await new CardModel({id,url,text,tag});
      return newData;
    },
  };
  export default Mutation;