let urlApi = "https://mindicador.cl/api";

function main() {
  let tableBody = document.querySelector("#datos .table tbody");
  fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => {
      let { uf, dolar, euro, utm } = datos;
      let array = [uf, dolar, euro, utm];
      let acumulador = "";
      array.forEach((indicador, index) => {
        acumulador += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${indicador.codigo}</td>
                    <td>${indicador.nombre}</td>
                    <td>${indicador.unidad_medida}</td>
                    <td><button class="btn btn-primary" 
                    onclick="mostrarModal('${indicador.codigo}', '${
          indicador.nombre
        }', '${indicador.unidad_medida}', '${
          indicador.valor
        }')">Detalle</button></td>
                </tr>
            `;
      });
      tableBody.innerHTML = acumulador;
    });
}

main();

function mostrarModal(codigo, nombre, unidadMedida, valor) {
  let staticBackdropLabel = document.getElementById("staticBackdropLabel");
  staticBackdropLabel.innerText = nombre;
  let modalCodigo = document.getElementById("modalCodigo");
  modalCodigo.innerText = codigo;
  let modalUnidadMedida = document.getElementById("modalUnidadMedida");
  modalUnidadMedida.innerText = unidadMedida;
  let modalValor = document.getElementById("modalValor");
  modalValor.innerText = valor;

  const myModal = new bootstrap.Modal("#staticBackdrop");
  myModal.show();
}
