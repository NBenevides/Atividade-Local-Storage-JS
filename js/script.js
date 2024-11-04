let chave = "Nome 1";
let chave2 = "Curso 1";
let chave3 = "Conclusao 1";
let i = 0;

// function ArmazenaDados()
// {
//     localStorage.setItem(chave, document.getElementById("nome").value);
//     localStorage.setItem(chave2, document.getElementById("curso").value);
//     localStorage.setItem(chave3, document.getElementById("conclusao").value);
    
// }

// function ConsultaDados()
// {
//     document.getElementById("resultado").innerHTML = localStorage.getItem(chave) + " - " + localStorage.getItem(chave2) + " - " + localStorage.getItem(chave3);
// }

function LimparCampos() // 1, 3
{
    document.getElementById("nome").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("conclusao").value = "";
}
 
function AtualizaDados() // 3
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("curso").value);
    localStorage.setItem(chave3, document.getElementById("conclusao").value);
    LimparCampos();
}

function InsertData()  //  1
{
    i = i + 1;
    localStorage.setItem("Nome " + i, document.getElementById("nome").value);
    localStorage.setItem("Curso " + i, document.getElementById("curso").value);
    localStorage.setItem("Conclusao " + i, document.getElementById("conclusao").value);
    LimparCampos();
}

function ViewAllData() // 2
{
    let resultado = "";
    for(let indice = 1; indice <= i; indice++)
    {
        resultado += localStorage.getItem("Nome " + indice) + " - " + localStorage.getItem("Curso " + indice) + " - " + localStorage.getItem("Conclusao " + indice) + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function DeleteData() // 4
{
    localStorage.removeItem("Nome " + document.getElementById("indice").value);
    localStorage.removeItem("Curso " + document.getElementById("indice").value);
    localStorage.removeItem("Conclusao " + document.getElementById("indice").value);
    document.getElementById("indice").value = "";
}