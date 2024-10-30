window.addEventListener("DOMContentLoaded", inicio);

function inicio() {
  const contenedor = document.querySelector(".col-lg-12");
  const tabla = document.createElement("table");
  tabla.className = "table";
  const tbody = document.createElement("tbody");
  const thead = document.createElement("thead");
  thead.className = "thead-dark";

  contenedor.appendChild(tabla);
  tabla.appendChild(thead);

  tabla.appendChild(tbody);

  const url = "eleccionesUSA.csv";
  fetch(url)
    .then((Response) => Response.text())
    .then((data) => {
      mostrarDatos(data);
    });

  function mostrarDatos(data) {
    let cabecera = [];
    let separadorFilas = [];
    let separadorColumnas = [];

    separadorFilas = data.split("\n");
    cabecera = separadorFilas[0].split(";");
    cabecera.forEach((element) => {
      const th = document.createElement("th");
      th.innerHTML = element;
      thead.appendChild(th);
    });
    separadorFilas.forEach((element, i) => {
      separadorColumnas = element.split(";");
      const tr = document.createElement("tr");
      tbody.appendChild(tr);
      if (i > 0) {
        separadorColumnas.forEach((element) => {
          const td = document.createElement("td");
          td.innerHTML = element;
          tr.appendChild(td);
        });
        console.log(element);
        const td = document.querySelectorAll("td");
        if (Number(element[2]) > Number(element[3])) {
          td[2].style.backgroundColor = "blue";
          console.log("siuuu");
        } else {
          td[3].style.backgroundColor = "red";
        }
      }
    });
  }
}
