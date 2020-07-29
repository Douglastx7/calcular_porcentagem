function calcular()
{
    var jantar = document.getElementById("valorJantar").value;
    var taxa = document.getElementById("taxaGarcom").value;
    var calcularTaxa = Number(taxa)*(jantar/0,10);
    var valorTotal = Number(jantar) + Number(calcularTaxa);
    document.getElementById("jantar").textContent = `O preço do jantar ficou: R$ ${jantar}`;
    document.getElementById("taxa").textContent = `taxa do garçom é de ${taxa}%`;
    document.getElementById("resultado").textContent = `e o preço total do jantar é de: R$ ${valorTotal}`;
}

