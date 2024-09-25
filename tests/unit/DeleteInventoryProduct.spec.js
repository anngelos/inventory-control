import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import DeleteInventoryProduct from "@/components/DeleteInventoryProduct.vue"; // Ajuste o caminho conforme necessário

const actions = {
  deleteProduct: jest.fn(),
};

const store = createStore({
  actions,
});

describe("DeleteInventoryProduct.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DeleteInventoryProduct, {
      global: {
        plugins: [store],
      },
      props: {
        productIndex: 1,
      },
    });
  });

  it("should call deleteProduct and close the modal when click on exclusion", async () => {
    await wrapper.find("button.bg-blue-500").trigger("click");
    expect(actions.deleteProduct).toHaveBeenCalledWith(expect.anything(), 1);
    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("should close the modal when clicked on Cancelar", async () => {
    await wrapper.find("button.bg-white").trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
