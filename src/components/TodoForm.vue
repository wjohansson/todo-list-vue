<template>
  <form class="flex flex-col mt-8 gap-2" @submit.prevent="onSubmit">
    <h2 class="text-xl text-center">
      <label for="new-todo-input"
        >What needs to be done?</label
      >
    </h2>
    <input
      class="self-center border-[2px] w-full focus:border-gray-800 outline-none text-gray-800"
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
    />
    <button
      class="rounded-full p-2 w-48 self-center bg-gray-900 hover:bg-gray-500"
      type="submit"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      if (this.label === "") {
        return;
      }
      this.$emit("todo-added", this.label);
      this.label = "";
    },
  },
  data() {
    return {
      label: "",
    };
  },
};
</script>
