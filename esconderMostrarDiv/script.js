function esconderOuMostrarDivProfessorAluno() {
  let divLoginAlunoEProfessor = document.getElementById(
    "divLoginAlunoEProfessor"
  );

  divLoginAlunoEProfessor.classList.toggle("invisivel");
}

function esconderOuMostrarDivAssistenteAdm() {
  let divLoginAssistenteAdm = document.getElementById("divLoginAssistenteAdm");

  divLoginAssistenteAdm.classList.toggle("invisivel");
}

function esconderOuMostrarDivProprietario() {
  let divLoginProprietario = document.getElementById("divLoginProprietario");

  divLoginProprietario.classList.toggle("invisivel");
}
