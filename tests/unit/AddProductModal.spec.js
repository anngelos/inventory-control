import { mount } from "@vue/test-utils";
import AddProductModal from "@/components/AddProductModal.vue";

describe("AddProductModal.vue", () => {
  let wrapper;

  beforeEach(() => {
    const actions = {
      addProduct: jest.fn(),
    };

    wrapper = mount(AddProductModal, {
      global: {
        mocks: {
          $store: {
            dispatch: actions.addProduct,
          },
        },
      },
    });
  });

  it("should renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("Cadastrar produto");
  });

  it("should upgrade the product fields in v-model correctly - deve atualizar os campos de produto no v-model corretamente", async () => {
    const productInput = wrapper.find('input[type="text"]');
    const detailsTextarea = wrapper.find("textarea");
    const inventoryInput = wrapper.find('input[type="number"]');

    await productInput.setValue("Produto Teste");
    await detailsTextarea.setValue("Detalhes do produto");
    await inventoryInput.setValue(100);

    expect(wrapper.vm.newProduct.product).toBe("Produto Teste");
    expect(wrapper.vm.newProduct.details).toBe("Detalhes do produto");
    expect(wrapper.vm.newProduct.inventory).toBe(100);
  });

  it("should trigger addProduct action and close when click on Cadastrar", async () => {
    wrapper.setData({
      newProduct: {
        product: "Produto Teste",
        details: "Detalhes Teste",
        inventory: 50,
        unity_value: 10.5,
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("addProduct", {
      product: "Produto Teste",
      details: "Detalhes Teste",
      inventory: 50,
      unity_value: 10.5,
    });

    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("should close the modal when click on cancel", async () => {
    await wrapper.findAll("button")[1].trigger("click");
    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
