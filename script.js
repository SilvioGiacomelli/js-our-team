const output = document.querySelector(".output")
const membriTeam = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "ASocial Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  }
];

 console.log (membriTeam);

 for(let membro of membriTeam){
  console.log(membro);
  output.innerHTML += `
  <div class="col">
        <div class="card">
          <div class="card-body">
            <img src="img/${membro.foto}" class= "card-img-top" >
            <h5 class="card-title text-center mx-1">${membro.nome}</h5>
            <h6 class="card-subtitle text-body-secondary text-center">${membro.ruolo}</h6> 
          </div>
        </div>
  </div>
  `
 }