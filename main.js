const createNavbar = () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const logo = document.createElement("a");
  logo.href = "#";
  logo.textContent = "Árbol de los Deseos";
  navbar.appendChild(logo);

  const links = document.createElement("ul");
  links.classList.add("navbar-links");

  const homeLink = document.createElement("li");
  const homeLinkAnchor = document.createElement("a");
  homeLinkAnchor.href = "#";
  homeLinkAnchor.textContent = "Inicio";
  homeLink.appendChild(homeLinkAnchor);
  links.appendChild(homeLink);

  const aboutLink = document.createElement("li");
  const aboutLinkAnchor = document.createElement("a");
  aboutLinkAnchor.href = "#about";
  aboutLinkAnchor.textContent = "Sobre mí";
  aboutLink.appendChild(aboutLinkAnchor);
  links.appendChild(aboutLink);

  const galleryLink = document.createElement("li");
  const galleryLinkAnchor = document.createElement("a");
  galleryLinkAnchor.href = "#gallery";
  galleryLinkAnchor.textContent = "Galería";
  galleryLink.appendChild(galleryLinkAnchor);
  links.appendChild(galleryLink);

  navbar.appendChild(links);

  document.body.prepend(navbar);
};

const createHeader = () => {
  var header = document.createElement("header");
  header.id = "Inicio";

  var title = document.createElement("h1");
  title.textContent = "Bienvenido al Árbo l de los Deseos";
  header.appendChild(title);

  var text = document.createElement("p");
  text.textContent = "Aquí hacemos tus sueños realidad";
  header.appendChild(text);

  document.body.appendChild(header);
};

const createMainContent = () => {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.id = "about";

  const aboutMeSection = document.createElement("section");
  aboutMeSection.classList.add("about-me");

  const heading = document.createElement("h2");
  heading.textContent = "Sobre mí";

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `
    <p>Había una vez, en un pequeño pueblo rodeado de montañas y ríos, un árbol muy especial conocido como el Árbol de los Deseos. Este árbol, de tronco grueso y hojas perennes, tenía la peculiaridad de que cada vez que alguien le contaba un deseo con el corazón puro, este se cumplía.</p>de manera sorprendente. Cada línea de código que escribía parecía tener vida propia, cada sitio web que creaba era más interactivo y atractivo que el anterior.\n\nFinalmente, Mario creó un sitio web que no solo era hermoso e interactivo, sino que también ayudaba a las personas a aprender a programar de una manera fácil y divertida. El sitio web fue un éxito rotundo y cambió la vida de muchas personas, ayudándolas a encontrar una nueva carrera y pasión en el desarrollo web.\n\nMario agradeció al Árbol de los Deseos por ayudarlo a cumplir su deseo. Pero en su corazón, sabía que el verdadero poder no estaba en el árbol, sino en su pasión, dedicación y amor por lo que hacía. Desde entonces, Mario continuó 
    <p>Un día, un joven llamado Mario Hernández, apasionado desarrollador web, decidió visitar el Árbol de los Deseos. Mario era conocido en su pueblo por su dedicación y amor por la programación. Siempre estaba aprendiendo nuevas tecnologías y contribuyendo a proyectos de código abierto.</p>creando, aprendiendo y contribuyendo al mundo del desarrollo web, siempre recordando el día que visitó el Árbol de los Deseos.";
    <p>Mario se acercó al árbol con respeto y susurró su deseo: 'Quiero crear un sitio web que sea tan interactivo y atractivo que pueda cambiar la vida de las personas para mejor'. Al terminar de expresar su deseo, una suave brisa sopló, haciendo que las hojas del árbol susurraran y se movieran.</p>
    <p>Días después, Mario comenzó a trabajar en su proyecto. A medida que pasaba el tiempo, se dio cuenta de que sus habilidades mejoraban de manera sorprendente. Cada línea de código que escribía parecía tener vida propia, cada sitio web que creaba era más interactivo y atractivo que el anterior.</p>
    <p>Finalmente, Mario creó un sitio web que no solo era hermoso e interactivo, sino que también ayudaba a las personas a aprender a programar de una manera fácil y divertida. El sitio web fue un éxito rotundo y cambió la vida de muchas personas, ayudándolas a encontrar una nueva carrera y pasión en el desarrollo web.</p>
    <p>Mario agradeció al Árbol de los Deseos por ayudarlo a cumplir su deseo. Pero en su corazón, sabía que el verdadero poder no estaba en el árbol, sino en su pasión, dedicación y amor por lo que hacía. Desde entonces, Mario continuó creando, aprendiendo y contribuyendo al mundo del desarrollo web, siempre recordando el día que visitó el Árbol de los Deseos.</p>
  `;

  aboutMeSection.appendChild(heading);
  aboutMeSection.appendChild(paragraph);

  mainContent.appendChild(aboutMeSection);

  document.body.appendChild(mainContent);
};

const createGallerySection = () => {
  const gallerySection = document.createElement("section");
  gallerySection.classList.add("gallery");
  gallerySection.id = "gallery";

  const heading = document.createElement("h2");
  heading.textContent = "Galería";

  const image1 = document.createElement("img");
  image1.src =
    "https://img.freepik.com/premium-photo/rising-resilience-concept-with-tree_841543-3466.jpg";
  gallerySection.appendChild(image1);

  const image2 = document.createElement("img");
  image2.src =
    "https://img.freepik.com/premium-photo/digital-painting-tree-floating-island_889227-2594.jpg";
  gallerySection.appendChild(image2);

  const image3 = document.createElement("img");
  image3.src =
    "https://img.freepik.com/fotos-premium/conceito-dos-principais-problemas-mundiais-da-populacao-mundial_540381-4800.jpg";
  gallerySection.appendChild(image3);

  const image4 = document.createElement("img");
  image4.src =
    "https://images.nightcafe.studio/jobs/d7Pd3XsxEwhZNJnpYudb/d7Pd3XsxEwhZNJnpYudb--1--v1yh6.jpg?tr=w-1080";
  gallerySection.appendChild(image4);

  const image5 = document.createElement("img");
  image5.src =
    "https://azbyka.com.ua/wp-content/uploads/tseli-lichnostnogo-rosta1.jpg";
  gallerySection.appendChild(image5);

  const image6 = document.createElement("img");
  image6.src =
    "https://th.bing.com/th/id/OIP.cApKDVSz4ZVdvzHuOm52WAAAAA?w=417&h=626&rs=1&pid=ImgDetMain";
  gallerySection.appendChild(image6);

  document.body.appendChild(gallerySection);
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.textContent = "Todos los derechos reservados © 2024";

  document.body.appendChild(footer);
};

createNavbar();
createHeader();
createMainContent();
createGallerySection();
createFooter();
