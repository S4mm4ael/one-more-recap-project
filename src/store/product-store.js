const productsList = [
  {
    id: 1,
    title: "Nike Red",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/1.png"),
  },
  {
    id: 2,
    title: "Nike Yellow",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/4.png"),
  },
  {
    id: 3,
    title: "Nike Green",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/7.png"),
  },
  {
    id: 4,
    title: "Nike Multi",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/10.png"),
  },
];

export const productsStore = {
  state: {
    list: productsList,
  },
  getters: {
    getProductsList: (state) => state.list,
  },
  mutations: {},
  actions: {},
  modules: {},
};
