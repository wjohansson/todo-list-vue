<template>
  <div class="flex flex-col gap-2" v-if="!isEditing">
    <div class="flex gap-2">
      <input
        class="appearance-none w-6 h-6 rounded-md shadow-custom bg-zinc-600 border-2 border-gray-400 hover:cursor-pointer checked:bg-gray-800 checked:border-gray-800"
        type="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')"
      />
      <label class="flex items-center hover:cursor-pointer" :for="id">
        {{ label }}</label
      >
    </div>
    <div class="flex gap-4">
      <button class="w-full border-2 rounded-full border-gray-500 py-1 hover:bg-gray-500" type="button" ref="editButton" @click="toggleToItemEditForm">
        Edit <span class="hidden">{{ label }}</span>
      </button>
      <button class="w-full border-2 rounded-full border-gray-500 py-1 hover:bg-gray-500" type="button" @click="deleteTodo">
        Delete <span class="hidden">{{ label }}</span>
      </button>
    </div>
  </div>
  <todo-item-edit-form v-else :id="id" :label="label" @item-edited="itemEdited" @edit-cancelled="editCancelled"></todo-item-edit-form>
</template>

<script>
import TodoItemEditForm from "./TodoItemEditForm.vue"

export default {
  components: {
    TodoItemEditForm
  },
  props: {
    label: {
      required: true,
      type: String,
    },
    done: {
      default: false,
      type: Boolean,
    },
    id: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      isEditing: false,
    };
  },
  computed: {
    isDone() {
      return this.done
    }
  },
  methods: {
    deleteTodo() {
      this.$emit("item-deleted");
    },
    toggleToItemEditForm() {
      this.isEditing = true;
    },
    itemEdited(newLabel) {
      this.$emit('item-edited', newLabel)
      this.isEditing = false
      this.focusOnEditButton()
    },
    editCancelled() {
      this.isEditing = false
      this.focusOnEditButton()
    },
    focusOnEditButton() {
      this.$nextTick(() => {
        const editButtonRef = this.$refs.editButton
        editButtonRef.focus()
      })
    }
  },
};
</script>
