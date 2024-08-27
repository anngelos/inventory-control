<template>
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
      <div class="w-full">
        <div class="m-8 my-20 max-w-[400px] mx-auto">
          <div class="mb-8">
            <h1 class="mb-4 text-3xl font-extrabold">Editar produto</h1>
            <div>
              <div class="flex items-center mb-5">
                <label class="inline-block w-20 mr-6 text-right font-bold text-black">Produto</label>
                <input v-model="editedProduct.product" type="text" placeholder="breve nome do produto"
                  class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] text-black placeholder-gray-500 outline-none">
              </div>
              <div class="flex items-center mb-5">
                <label class="inline-block w-20 mr-6 text-right font-bold text-black">Detalhes</label>
                <textarea v-model="editedProduct.details" placeholder="adicione mais informações sobre o produto" cols="50"
                  rows="4" class="pl-1 border border-gray-500 placeholder-gray-500"></textarea>
              </div>
              <div class="flex items-center mb-5">
                <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-black">Estoque</label>
                <input v-model="editedProduct.inventory" type="number" placeholder="quantidade disponível em estoque"
                  class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] 
                text-gray-500 placeholder-gray-500 outline-none">
              </div>
              <div class="flex items-center mb-5">
                <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-black">Valor Unitário</label>
                <input v-model="editedProduct.unity_value" type="number" placeholder="valor unitário do produto" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] 
                text-gray-500 placeholder-gray-500 outline-none">
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <button @click="saveChanges" class="p-3 bg-blue-500 rounded-full text-white w-full">Atualizar</button>
            <button @click="close" class="p-3 bg-white border rounded-full w-full">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProductModal",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedProduct: { ...this.product },
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },

    saveChanges() {
      this.$emit('save', this.editedProduct);
      this.$emit('close');
    },
  }
}
</script>