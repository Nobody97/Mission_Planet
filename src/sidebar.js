"use strict";

  import App from "./app.js";
  import stylesheet from "./sidebar.css";

   // Erst loslaufen, wenn das Document Object Modul bereit ist
   window.addEventListener("load", () => {
       // Anwendung starten
       let app = new App();
       app.start();
   });

   function hide() {
     document.getElementsById('sidebar').style.display='none';
   };

   function show() {
     document.getElementsById('sidebar').style.display='block';
   };
