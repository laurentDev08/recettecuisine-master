import { defineStore } from 'pinia'

export const useRecette = defineStore("cuisine", {
  state: () => ({
    recettes: [],
    users: [],
  }),
  getters: {
    favs() {
      return this.recettes.filter(t => t.Like);
    },
  },
  actions: {
    async getAll() {
      const res = await fetch("http://localhost:3000/recette");
      const data = await res.json();
      this.recettes = data;
    },
    async getUsers() {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      this.users = data;
    },
    async getById(id) {
      const res = await fetch(`http://localhost:3000/recette/${id}`);
      const data = await res.json();
      this.recettes = data;
    },
    async deleteByiD(id) {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
    },
    async toogleFav(id) {
      const recette = this.recettes.find(t => t.id === id);
      recette.Like = !recette.Like

      const res = await fetch(`http://localhost:3000/recette/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ Like: recette.Like }),
        headers: { "Content-Type": "application/json" },
      });
    },
  }
});
