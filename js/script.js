// todo list
var container = new Vue({
   el: "#app",

   data: {
      items: ["Cosa da fare n.1", "Cosa da fare n.2", "Cosa da fare n.3"],
      newItem: ""
   },

   methods: {
      // aggiunta on click btn
      addItem: function() {
         if (this.newItem == "") {
            alert("Da come vedo non hai nulla da fare!")
         } else {
            this.items.push(this.newItem);
         }
      },

      // rimozione on click x
      removeItem: function(index) {
         this.items.splice(index, 1);
      }
   }
});
