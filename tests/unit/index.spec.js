import store from "@/store/index";

jest.mock("vuex-persistedstate", () => jest.fn(() => (store) => {}));

describe("Vuex Store", () => {
  beforeEach(() => {
    store.state.products = [];
  });

  it("should adds a new product when the addNewProduct mutation is called", () => {
    const product = {
      id: 1,
      product: "Product A",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };

    store.commit("addNewProduct", product);
    expect(store.state.products).toContainEqual(product);
  });

  it("should removes a product when the removeProduct mutation is called", () => {
    const product = {
      id: 1,
      product: "Product A",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };

    store.commit("addNewProduct", product);
    store.commit("removeProduct", 0);
    expect(store.state.products).toEqual([]);
  });

  it("should updates a product when the updateProduct mutation is called", () => {
    const product = {
      id: 1,
      product: "Product A",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };

    store.commit("addNewProduct", product);
    
    const updatedProduct = {
      id: 1,
      product: "Product A Updated",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };
    
    store.commit("updateProduct", { index: 0, product: updatedProduct });
    expect(store.state.products[0]).toEqual(updatedProduct);
  });

  it("dispatches addProduct action", async () => {
    const product = {
      id: 1,
      product: "Product A",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };

    await store.dispatch("addProduct", product);
    expect(store.state.products).toContainEqual(product);
  });

  it("dispatches deleteProduct action", async () => {
    const product = {
      id: 1,
      product: "Product A",
      details: "Detalhes do Produto A",
      inventory: 2,
      unity_value: 45,
    };

    store.commit("addNewProduct", product);
    await store.dispatch("deleteProduct", 0);
    expect(store.state.products).toEqual([]);
  });
});
