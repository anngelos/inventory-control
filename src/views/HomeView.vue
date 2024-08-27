<template>
  <div class="home mt-5">
    <add-product-modal v-if="addProductModal" @close="closeAddProductModal" />
    <delete-inventory-product v-if="showDeleteProductModal" @close="closeDeleteInventoryProduct" :productIndex="selectedProductIndex" />
    <edit-product-modal v-if="showEditProductModal" @close="closeEditProductModal" @save="handleSaveProduct" :product="selectedProduct" />
    <div class="flex justify-center gap-4">
      <button type="button" class="px-6 py-2 min-w-[120px] text-center text-[#3F83F8] border border-[#3F83F8]
        rounded hover:bg-[#3F83F8] hover:text-white active:bg-[#3F83F8] focus:outline-none focus:ring"
        @click="showAddProductModal">
        Cadastrar produto
      </button>
      <input type="text" class="px-6 py-2 min-w-[120px] text-black border border-[#3F83F8]
        rounded focus:outline-none focus:ring" placeholder="procurar no estoque">
    </div>

    <div v-if="!products.length" class="mt-20 mb-20 text-center">
      <p>Nenhum produto cadastrado no momento...</p>
      <p>Comece cadastrando seus produtos em estoque para que eles sejam visualizados aqui!</p>
    </div>

    <div v-else class="max-w-sm mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl mt-10">
      <p class="text-gray-500 mb-1">{{ products.length }} produtos cadastrados</p>
      <div v-for="(product, index) in products" :key="index" class="md:flex border rounded-lg border-black mb-5">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-blue-500 font-semibold">#{{ index + 1 }} - {{ product.product
            }}</div>
          <p class="block mt-1 text-lg leading-tight font-medium text-gray-500">{{ product.details }}</p>
          <p class="mt-2 text-black">{{ product.inventory }} unidades</p>
          <p class="mt-2 text-black">{{ convertToMoney(product.unity_value) }}</p>
          <div class="mt-4">
            <button @click="showEditModal(index)"
              class="bg-[#3F83F8] text-white px-4 py-2 rounded hover:bg-blue-400 focus:outline-none">Editar</button>
            <button @click="showDeleteModal(index)"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-red-500 hover:text-white focus:outline-none ml-2">
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProductModal from "../components/AddProductModal.vue";
import DeleteInventoryProduct from "@/components/DeleteInventoryProduct.vue";
import EditProductModal from "@/components/EditProductModal.vue"

export default {
  name: 'HomeView',
  components: { AddProductModal, DeleteInventoryProduct, EditProductModal },
  data() {
    return {
      addProductModal: false,
      showDeleteProductModal: false,
      showEditProductModal: false,
      selectedProductIndex: null,
    }
  },
  computed: {
    ...mapState(['products']),

    selectedProduct() {
      return this.selectedProductIndex !== null
        ? this.products[this.selectedProductIndex]
        : null;
    },
  },
  methods: {
    showDeleteModal(index) {
      this.selectedProductIndex = index;
      this.showDeleteProductModal = true;
    },

    closeEditProductModal() {
      this.showEditProductModal = false;
    },

    closeDeleteInventoryProduct() {
      this.showDeleteProductModal = false;
    },

    showEditModal(index) {
      this.selectedProductIndex = index;
      this.showEditProductModal = true;
    },

    convertToMoney(value) {
      const newValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      return newValue;
    },

    showAddProductModal() {
      this.addProductModal = true;
    },

    closeAddProductModal() {
      this.addProductModal = false;
    },

    handleSaveProduct(updatedProduct) {
      this.$store.commit('updateProduct', { index: this.selectedProductIndex, product: updatedProduct });
      this.closeEditProductModal();
    }
  }
}
</script>
