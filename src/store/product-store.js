const productsList = [
  {
    id: 1,
    title: "Nike Red",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/1.png"),
    gallery: [
      {name: "Image 1", src: require("@/assets/png/1.png")},
      {name: "Image 2", src: require("@/assets/png/2.png")},
      {name: "Image 3", src: require("@/assets/png/3.png")},
    ],
  },
  {
    id: 2,
    title: "Nike Yellow",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/4.png"),
    gallery: [
      {name: "Image 1", src: require("@/assets/png/4.png")},
      {name: "Image 2", src: require("@/assets/png/5.png")},
      {name: "Image 3", src: require("@/assets/png/6.png")},
    ],
  },
  {
    id: 3,
    title: "Nike Green",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/7.png"),
    gallery: [
      {name: "Image 1", src: require("@/assets/png/7.png")},
      {name: "Image 2", src: require("@/assets/png/8.png")},
      {name: "Image 3", src: require("@/assets/png/9.png")},
    ],
  },
  {
    id: 4,
    title: "Nike Multi",
    price: 1.5,
    description: "New Nike Shoes",
    image: require("@/assets/png/10.png"),
    gallery: [
      {name: "Image 1", src: require("@/assets/png/10.png")},
      {name: "Image 2", src: require("@/assets/png/11.png")},
      {name: "Image 3", src: require("@/assets/png/12.png")},
    ],
  },
];

export const productsStore = {
  state: {
    list: productsList,
  },
  getters: {
    getProductsList: (state) => state.list,
    getProductById: (state) => (id) => {
      return state.list.find((product) => product.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
