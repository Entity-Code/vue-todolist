// todo list
var container = new Vue({ 
   el: "#app",

   data: {
      items: ["Cosa da fare"],
      newItem: ""
   },

   methods: {
      // aggiunta on click btn
      addItem: function() {
         if (this.newItem == "") {
            alert("Da come vedo non hai nulla da fare!");
         } else if(this.items.includes(this.newItem)){
            alert("L'hai già segnato!");
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
