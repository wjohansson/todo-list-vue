<template>
  <form
    class="flex flex-row flex-wrap justify-center bg-zinc-500 shadow-2xl p-2"
    @submit.prevent="onSubmit"
  >
    <div class="flex flex-col items-center gap-2">
      <label
        >Edit Name for
        <span class="text-gray-800">&quot;{{ label }}&quot;</span></label
      >
      <input
        class="text-gray-800 outline-none border-[2px] focus:border-gray-900"
        :id="id"
        type="text"
        autocomplete="off"
        ref="labelInput"
        v-model.lazy.trim="newLabel"
      />
    </div>
    <div class="flex gap-4 mt-2 w-full">
      <button
        class="w-full border-2 rounded-full border-gray-400 py-1 hover:bg-gray-400"
        type="submit"
      >
        Save
        <span>edit</span>
      </button>
      <button
        class="w-full border-2 rounded-full border-gray-400 py-1 hover:bg-gray-400"
        type="button"
        @click="onCancel"
      >
        Cancel
        <span>edit</span>
      </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newLabel: this.label,
    };
  },
  methods: {
    onSubmit() {
      if (this.newLabel && this.newLabel !== this.label) {
        this.$emit("item-edited", this.newLabel);
      }
    },
    onCancel() {
      this.$emit("edit-cancelled");
    },
  },
  mounted() {
    const labelInputRef = this.$refs.labelInput;
    labelInputRef.focus();
  },
};
</script>
