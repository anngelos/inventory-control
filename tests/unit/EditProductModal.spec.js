import { shallowMount } from "@vue/test-utils";
import EditProductModal from "@/components/EditProductModal.vue";

describe("EditProductModal.vue", () => {
  let wrapper;

  const productMock = {
    product: "Produto A",
    details: "Detalhes do produto A",
    inventory: 10,
    unity_value: 100.0,
  };

  beforeEach(() => {
    wrapper = shallowMount(EditProductModal, {
      propsData: {
        product: productMock,
      },
    });
  });

  it("should initialize the edited product with product data", () => {
    expect(wrapper.vm.editedProduct).toEqual(productMock);
  });

  it("should show the modal with the filled fields with the product", () => {
    const inputProduct = wrapper.find('input[type="text"]');
    const textareaDetails = wrapper.find("textarea");
    const inputInventory = wrapper.findAll('input[type="number"]').at(0);
    const inputUnityValue = wrapper.findAll('input[type="number"]').at(1);

    expect(inputProduct.element.value).toBe(productMock.product);
    expect(textareaDetails.element.value).toBe(productMock.details);
    expect(inputInventory.element.value).toBe(String(productMock.inventory));
    expect(inputUnityValue.element.value).toBe(String(productMock.unity_value));
  });

  it("should trigger the event save with the edited product when clicked on Atualizar button", async () => {
    const updatedProduct = { ...productMock, product: "Produto B" };
    wrapper.setData({ editedProduct: updatedProduct });

    const saveButton = wrapper.find("button.bg-blue-500");
    await saveButton.trigger("click");

    expect(wrapper.emitted().save).toBeTruthy();
    expect(wrapper.emitted().save[0]).toEqual([updatedProduct]);
  });

  it("deve emitir o evento close ao clicar no botão Cancelar", async () => {
    const cancelButton = wrapper.find("button.bg-white");
    await cancelButton.trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });

  it("deve emitir o evento close após salvar as alterações", async () => {
    const saveButton = wrapper.find("button.bg-blue-500");
    await saveButton.trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });
});
