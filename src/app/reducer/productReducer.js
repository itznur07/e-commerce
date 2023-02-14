import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [
      {
        id: 1,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-ad-background_52683-42900.jpg?w=1060&t=st=1675829917~exp=1675830517~hmac=8001ad7afb3468fc5db81bd1cb34e44ef67ae76eceb0901fa52e2943852f834f",
        heading: "Realistic glossy plastic ice cram",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 60
      },
      {
        id: 2,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-ad_23-2148974826.jpg?w=1060&t=st=1675829957~exp=1675830557~hmac=20b4051dbb32d6b1facd2a6010c3328d869ae817cf1781405e658068dac130f9",
        heading: "Coll flavour ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 35
      },
      {
        id: 3,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/coconut-ice-cream-vector-realistic-product-placement-healthy-delicious-desserts_1268-18067.jpg?w=1060&t=st=1675820606~exp=1675821206~hmac=1450329c22bd30958a9aeaab6d36e9864693b3011e94ff1ee47bfdd1f5d94f76",
        heading: "Coconut icr cream with many colors",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 50
      },
      {
        id: 4,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-ad-template_52683-63815.jpg?w=1060&t=st=1675820689~exp=1675821289~hmac=92a400afee5e580dad39e8d6d4d32a2262987cfcf55706b672a219fced4fe080",
        heading: "Realistic vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 65
      },
      {
        id: 5,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/realistic-ice-cream-promo-template_23-2148980953.jpg?w=1060&t=st=1675820781~exp=1675821381~hmac=2d2ff1327b9f95a05548af9a0f399280a4c7eb37a43cff779c5a441e22e545e3",
        heading: "Defferent test vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 40
      },
      {
        id: 6,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/realistic-fresh-organic-ice-cream_52683-65513.jpg?w=1060&t=st=1675820877~exp=1675821477~hmac=8aee19475083dfcf4fd4f0fe82cb195f6fa31d0cd8289d26e90b4c69ae7becae",
        heading: "Realistice fresh organic ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 85
      },
      {
        id: 7,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/premium-quality-realistic-ice-cream-ad_23-2148984339.jpg?w=1060&t=st=1675820950~exp=1675821550~hmac=379d5d3f02c9f3819f2f90df5412a2d9c687fca3990ea3c5342e3b4e4fd1bb21",
        heading: "Premium quality vanila ice cream",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 25
      },
      {
        id: 8,
        qty: 1,
        img:
          "https://img.freepik.com/free-vector/vanilla-ice-cream-naturally-flavored-product-advertising-poster-with-plant-flower-aromatic-seed-pods-realistic_1284-31945.jpg?w=1380&t=st=1675821014~exp=1675821614~hmac=858b0d0807cc50d87e9602ae320a42f2dd59583aa95dbf700aac916fc19e90be",
        heading: "Vanilla ice cream naturally flavored",
        description:
          "Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",
        price: 75
      }
    ],
    filterProduct: [],
    cartItem: [],
    wishItem: []
  },
  reducers: {
    filterProducts: (state, action) => {
      state.product = state.filterProduct.filter((item) =>
        item.heading.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    addToWishList: (state, action) => {
      const existingItem = state.wishItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.wishItem.push(action.payload);
      }
    },
    increaseQty: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      item.qty -= 1;
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    removeFromWishList: (state, action) => {
      state.wishItem = state.wishItem.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const {
  filterProducts,
  addToCart,
  addToWishList,
  increaseQty,
  decreaseQty,
  removeFromCart,
  removeFromWishList,
  addProductToCompare,
  removeProductFromCompare
} = productSlice.actions;
export default productSlice.reducer;
