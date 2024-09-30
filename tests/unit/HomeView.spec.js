import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";
import { createStore } from "vuex";

describe("HomeView.vue", () => {
  let store;
  let state;
  let mutations;

  beforeEach(() => {
    state = {
      products: [
        {
          product: "Produto A",
          details: "Detalhes do Produto A",
          inventory: 5,
          unity_value: 10,
        },
        {
          product: "Produto B",
          details: "Detalhes do Produto B",
          inventory: 10,
          unity_value: 20,
        },
      ],
    };

    mutations = {
      updateProduct: jest.fn(),
    };

    store = createStore({
      state,
      mutations,
    });
  });

  it("renders product list correctly", () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });
    const products = wrapper.findAll(".md\\:flex");

    expect(products.length).toBe(state.products.length);
    expect(products.at(0).text()).toContain("Produto A");
    expect(products.at(0).text()).toContain("Detalhes do Produto A");
    expect(products.at(0).text()).toContain("5 unidades");
    expect(products.at(0).text()).toContain("R$ 10,00");
  });

  it("displays the add product modal when button is clicked", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });
    const button = wrapper.find("button");

    await button.trigger("click");

    expect(wrapper.vm.addProductModal).toBe(true);
  });

  it("filters products correctly based on search query", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });

    expect(wrapper.vm.filteredProducts.length).toBe(2);

    wrapper.setData({ searchQuery: "Produto A" });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.filteredProducts.length).toBe(1);
    expect(wrapper.vm.filteredProducts[0].product).toBe("Produto A");
  });

  it("opens edit modal when edit button is clicked", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });
    const productWrappers = wrapper.findAll(".md\\:flex");
    const firstProduct = productWrappers.at(0);
    const editButton = firstProduct.findAll("button").at(0);

    await editButton.trigger("click");

    expect(wrapper.vm.showEditProductModal).toBe(true);
    expect(wrapper.vm.selectedProductIndex).toBe(0);
  });

  it("calls the correct mutation when saving edited product", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });

    wrapper.setData({ selectedProductIndex: 0, showEditProductModal: true });

    const updatedProduct = {
      product: "Produto A Atualizado",
      details: "Novos Detalhes",
      inventory: 8,
      unity_value: 15,
    };

    wrapper.vm.handleSaveProduct(updatedProduct);

    expect(mutations.updateProduct).toHaveBeenCalledWith(expect.anything(), {
      index: 0,
      product: updatedProduct,
    });
  });

  it("closes delete product modal when closeDeleteInventoryProduct is called", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });

    wrapper.setData({ showDeleteProductModal: true });
    wrapper.vm.closeDeleteInventoryProduct();

    expect(wrapper.vm.showDeleteProductModal).toBe(false);
  });

  it("should closes addProductModal when closeAddProductModal is called", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });

    wrapper.setData({ addProductModal: true });
    wrapper.vm.closeAddProductModal();

    expect(wrapper.vm.addProductModal).toBe(false);
  });

  it("opens delete product modal and sets selectedProductIndex when showDeleteModal is called", async () => {
    const wrapper = shallowMount(HomeView, { global: { plugins: [store] } });
    const productIndex = 1;
    
    wrapper.vm.showDeleteModal(productIndex);

    expect(wrapper.vm.selectedProductIndex).toBe(productIndex);
    expect(wrapper.vm.showDeleteProductModal).toBe(true);
  });
});
