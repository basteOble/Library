import App from "./App";
import Dom from "./Dom";

window.addEventListener('DOMContentLoaded', function() {
    Dom.loadBooks()
    App.addBook();
})