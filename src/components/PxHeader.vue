<template>
  <header class="w-full shadow-2xl">
    <nav>
      <nav class="flex items-center justify-between  bg-blue-300 rounded-b-lg p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          
          <img
            src="@/assets/Bitcoins.png"
            class="mr-2"
            width="50px"
            height="50px"
          />
          <span class="font-semibold text-xl tracking-tight"
            >CriptoMonedas</span
          >
        </div>
        
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
        <div class="btn">
          <router-link to="/"><button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Home</button></router-link>
          <router-link to="/about"><button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 mx-2 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">About</button></router-link>
          <router-link to="/chat"><button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">ChatRoom</button></router-link>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PxHeader"
};
</script>
