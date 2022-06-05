# &#9889; Atividades de Fixação & Exercícios | Bloco 06 - Dia 03

## &#9989; Atividade de Fixação 1 - Introdução, estrutura básica, flex-direction, flex-wrap, flex-flow e reverse

1. Teste as possibilidades para a propriedade `flex-direction`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* flex-direction: row; */
  /* flex-direction: column; */
  /* flex-direction: row-reverse; */
  /* flex-direction: column-reverse; */
}
```

2. Teste as possibilidades para a propriedade `flex-wrap`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* flex-wrap: wrap; */
  /* flex-wrap: nowrap; */
  /* flex-wrap: wrap-reverse; */
}
```

3. Teste as possibilidades para a propriedade `flex-flow`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* flex-flow: row wrap; */
  /* flex-flow: row nowrap; */
  /* flex-flow: row wrap-reverse; */
  /* flex-flow: column wrap; */
  /* flex-flow: column nowrap; */
  /* flex-flow: column wrap-reverse; */
  /* flex-flow: row-reverse wrap; */
  /* flex-flow: row-reverse nowrap; */
  /* flex-flow: row-reverse wrap-reverse; */
  /* flex-flow: column-reverse wrap; */
  /* flex-flow: column-reverse nowrap; */
  /* flex-flow: column-reverse wrap-reverse;*/
}
```

## &#9989; Atividade de Fixação 2 - justify-content, align-items e align-content

1. Teste as possibilidades para a propriedade `justify-content`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* justify-content: flex-start; */
  /* justify-content: flex-end; */
  /* justify-content: center; */
  /* justify-content: space-between; */
  /* justify-content: space-around; */
  /* justify-content: space-evenly; */
}
```

2. Teste as possibilidades para a propriedade `align-items`.
```
.box-container {
  background-color: #0fa36b;
  display: flex;
  /* ADICIONE AQUI SEUS TESTES */
  /* align-items:stretch; */
  /* align-items:flex-start; */
  /* align-items:flex-end; */
  /* align-items:center; */
  /* align-items:baseline; */
}
```

3. Teste as possibilidades para a propriedade `align-content`.
```
.box-container {
  /* ADICIONE AQUI SEUS TESTES */
  background-color: #0fa36b;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  /* align-content: stretch; */
  /* align-content: flex-start; */
  /* align-content: flex-end; */
  /* align-content: center; */
  /* align-content: space-between; */
  /* align-content: space-around; */
  /* align-content: space-evenly; */
}
```

## &#9989; Exercício do Dia - Trybe Tech Gallery
1. Reestruturação do `header`.
```
<!-- tech-gallery.html -->
<header>
  <img class="header-img" src="./images/trybe-logo.jpg" alt="Website logo" />
  <h1>TRYBE TECH-GALLERY</h1>
  <h3>SIGN-UP</h3>
</header>

<!-- style.css -->
header {
  align-items: center;
  background-color: #323433;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  margin-bottom: 20px;
  width: 100%;
}

header h1 {
  color: #FFFFFF;
  font-size: 20px;
}

header h3 {
  color: #C0BFC5;
  font-size: 14px;
  text-decoration: underline;
}
```

2. Reestruturação da primeira `section`, com a `id main-text`, a qual possui o texto principal da página.
```
<!-- tech-gallery.html -->
<section id="main-text">
  <p>Take a look at some of the technologies which you will learn in our fundamentals and front-end module!</p>
</section>

<!-- style.css -->
#main-text {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
}

#main-text p {
  font-size: 24px;
  text-align: center;
}
```

3. Reestruturação da `section` com a `id gallery`, a qual possui as imagens das stacks.
```
<!-- tech-gallery.html -->
<section id="gallery">
  <div class="gallery-card">
    <h4>HTML</h4>
    <img class="gallery-img" src="./images/html-logo.png" alt="HTML logo" />
  </div>
  <div class="gallery-card">
    <h4>CSS</h4>
    <img class="gallery-img" src="./images/css-logo.png" alt="CSS logo" />
  </div>
  <div class="gallery-card">
    <h4>JAVASCRIPT</h4>
    <img class="gallery-img" src="./images/javaScript-logo.png" alt="JavaScript logo" />
  </div>
  <div class="gallery-card">
    <h4>REACT</h4>
    <img class="gallery-img" src="./images/react-logo.png" alt="React logo" />
  </div>
  <div class="gallery-card">
    <h4>RTL</h4>
    <img class="gallery-img" src="./images/rtl-logo.png" alt="React Testing Library logo" />
  </div>
  <div class="gallery-card">
    <h4>REDUX</h4>
    <img class="gallery-img" src="./images/redux-logo.png" alt="Redux logo" />
  </div>
  <hr />
</section>

<!-- style.css -->
#gallery {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  width: 640px;
}

.gallery-card {
  align-items: center;
  background-color: rgb(231, 231, 231);
  border-radius: 20px;
  box-shadow: 2.5px 3.5px rgb(202, 202, 202);
  display: flex;
  flex-direction: column;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  padding-top: 20px;
  width: 200px;
}

.gallery-card h4 {
  color:  #606160;
}

.gallery-img {
  margin: 15px;
  width: 150px;
}

#gallery hr {
  margin-top: 20px;
  width: 25%;
}
```

4. Reestruturação do `footer`.
```
<!-- tech-gallery.html -->
<footer>
  <a href="https://www.instagram.com/betrybe/" target="_blank">
    <img class="social-img" src="./images/instagram-logo.png" alt="Instagram logo" />
  </a>
  <a href="https://www.linkedin.com/school/betrybe/" target="_blank">
    <img class="social-img" src="./images/linked-in-logo.png" alt="Linkedin logo" />
  </a>
</footer>

<!-- style.css -->
.social-img {
  margin-left: 10px;
  width: 25px;
}

footer {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 20px;
}
```
