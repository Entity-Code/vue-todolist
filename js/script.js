// todo list
var container = new Vue({
   el: "#app",

   data: {
      show: true,
      items: ["Cosa da fare n.1", "Cosa da fare n.2", "Cosa da fare n.3"],
      newItem: "",
   },

   methods: {
      addItem: function() {
         if (this.newItem == "") {
            alert("Da come vedo non hai nulla da fare!")
         } else {
            this.items.push(this.newItem);
         }
      },

      removeItem: function(index) {
         this.items.splice(index, 1);
      }
   }
});
