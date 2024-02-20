<template>
  <div class="flex flex-col items-center ">

    <label class="input input-bordered flex items-center gap-2 mb-2 w-64">
      <i-ph-envelope></i-ph-envelope>
      <input type="text" class="grow" placeholder="Email" />
    </label>
    <label class="input input-bordered flex items-center gap-2 w-64 ">
      <i-ph-lock-key></i-ph-lock-key>
      <input type="password" class="grow" value="password" />
    </label>
    <div class="mb-2">
      <p class="">
        mot de passe oublié ?
      </p>
    </div>
    <button class="btn btn-active w-32 ">
      connexion
    </button>
  </div>
  <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700">
  <div class="flex flex-col items-center">
    <p>
      Pas encore de compte ?
    </p>
    <button class="btn btn-active"> Créer un compte</button>

  </div>
</template>