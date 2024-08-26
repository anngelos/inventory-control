<template>
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
    <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
      <div class="w-full">
        <div class="m-8 my-20 max-w-[400px] mx-auto">
          <div class="mb-8">
            <h1 class="mb-4 text-3xl font-extrabold">Editar produto</h1>
            <p class="text-gray-600">... campos para edição do produto selecionado ...</p>
          </div>
          <div class="space-y-4">
            <button class="p-3 bg-blue-500 rounded-full text-white w-full">Atualizar</button>
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
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>