let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #83e8b9;">Estudiante de Tecnologias de la informacion.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
