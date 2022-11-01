<template class="flex items-center h-screen">
  <div
    class="mt-16 shadow-custom shadow-black bg-zinc-600 min-w-[560px] w-2/3 mx-auto flex flex-col items-center justify-center p-4"
  >
    <h1 class="text-4xl">Todo List</h1>
    <todo-form @todo-added="addTodo"></todo-form>
    <h2 class="mt-4" ref="listSummary" tabindex="-1">{{ listSummary }}</h2>
    <ul class="flex flex-col mt-8 gap-4 w-5/6">
      <li v-for="item in TodoItems" :key="item.id">
        <todo-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
          @checkbox-changed="updateDoneStatus(item.id)"
          @item-deleted="deleteTodo(item.id)"
          @item-edited="editTodo(item.id, $event)"
        ></todo-item>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import TodoForm from "./components/TodoForm.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    TodoItem,
    TodoForm,
  },
  data() {
    return {
      TodoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
  methods: {
    addTodo(toDoLabel) {
      this.TodoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
    },
    updateDoneStatus(todoId) {
      const todoToUpdate = this.TodoItems.find((item) => item.id === todoId);
      todoToUpdate.done = !todoToUpdate.done;
    },
    deleteTodo(todoId) {
      const itemIndex = this.TodoItems.findIndex((item) => item.id === todoId);
      this.TodoItems.splice(itemIndex, 1);
      this.$refs.listSummary.focus()
    },
    editTodo(todoId, newLabel) {
      const todoToEdit = this.TodoItems.find((item) => item.id === todoId);
      todoToEdit.label = newLabel;
    },
  },
  computed: {
    listSummary() {
      const numberFinishedItems = this.TodoItems.filter(
        (item) => item.done
      ).length;
      return `${numberFinishedItems} out of ${this.TodoItems.length} items completed`;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:500,600,700");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
