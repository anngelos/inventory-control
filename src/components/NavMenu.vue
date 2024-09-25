<template>
  <nav class="bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/inventory.png" class="h-8" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Controle de Estoque</span>
      </div>
      <div class="w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
          <li>
            <router-link to="/" class="block py-2 px-3 text-white rounded md:p-0">Estoque</router-link>
          </li>
          <li>
            <router-link to="/about" class="block py-2 px-3 text-white rounded md:p-0">Sobre</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>