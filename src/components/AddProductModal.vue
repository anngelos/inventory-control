<template>
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
      <div class="w-full">
        <div class="m-8 my-20 max-w-[400px] mx-auto">
          <div class="mb-8">
            <h1 class="mb-10 text-3xl font-extrabold">Cadastrar produto</h1>
            <div>
              <div class="flex items-center mb-5">
                <label class="inline-block w-20 mr-6 text-right font-bold text-black">Produto</label>
                <input type="text" v-model="newProduct.product" placeholder="breve nome do produto"
                  class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] text-black placeholder-gray-500 outline-none">
              </div>

              <div class="flex items-center mb-5">
                <label class="inline-block w-20 mr-6 text-right font-bold text-black">Detalhes</label>
                <textarea v-model="newProduct.details" placeholder="adicione mais informações sobre o produto" cols="50"
                  rows="4" class="pl-1 border border-gray-500 placeholder-gray-500"></textarea>
              </div>

              <div class="flex items-center mb-5">
                <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-black">Estoque</label>
                <input v-model="newProduct.inventory" type="number" placeholder="quantidade disponível em estoque"
                  class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] 
                text-gray-500 placeholder-gray-500 outline-none">
              </div>

              <div class="flex items-center mb-5">
                <label for="number" class="inline-block w-20 mr-6 text-right font-bold text-black">Valor
                  Unitário</label>
                <input v-model="newProduct.unity_value" type="number" placeholder="valor unitário do produto" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-[#3F83F8] 
                text-gray-500 placeholder-gray-500 outline-none">
              </div>

            </div>
          </div>
          <div class="space-y-4">
            <button class="p-3 bg-[#3F83F8] rounded-full text-white w-full" @click="addNewProduct">Cadastrar</button>
            <button class="p-3 bg-white border rounded-full w-full" @click="close">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddProductModal",
  data() {
    return {
      newProduct: {}
    }
  },
  methods: {
    ...mapActions(['addProduct']),

    addNewProduct() {
      this.addProduct(this.newProduct);
      this.close();
    },

    close() {
      this.$emit('close');
    }
  }
}
</script>