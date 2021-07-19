/*
    Nun erstellen wir in der JS Datei uns, mit .innerHtml eine <figure> Gallery.
*/
let gallery = document.getElementById("gallery");
gallery.innerHTML = '<figure style="display:inline-block"><img src="https://unsplash.it/200/"><figcaption>Fig. 1</figcaption></figure>';
gallery.innerHTML += '<figure style="display:inline-block"><img src="https://unsplash.it/200/"><figcaption>Fig. 2</figcaption></figure>';
gallery.innerHTML += '<figure style="display:inline-block"><img src="https://unsplash.it/200/"><figcaption>Fig. 3</figcaption></figure>';

