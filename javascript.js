var linkProjetos = [
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/abwEpge",
		linkImg:
			"https://firebasestorage.googleapis.com/v0/b/wsremoto-1193d.appspot.com/o/smartmockups_ktx8gpup.jpg?alt=media&token=3d356564-0498-4ff0-8867-e0218497b280",
		span: "2021 - Atual",
		title: "Projeto AluraFlix",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/gORKpMW",
		linkImg:
			"https://firebasestorage.googleapis.com/v0/b/wsremoto-1193d.appspot.com/o/smartmockups_ktx8i27z.jpg?alt=media&token=546c7dca-74bc-4da6-a6bc-121bbbbb1567",
		span: "2021 - Atual",
		title: "Projeto Super Trunfo - YuGiDEV",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/MWoEpGy",
		linkImg:
			"https://firebasestorage.googleapis.com/v0/b/wsremoto-1193d.appspot.com/o/smartmockups_ktx8iy5e.jpg?alt=media&token=b6ad8360-d184-486c-a711-e0bc07e8e32b",
		span: "2021 - Atual",
		title: "Projeto Calculadora",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/BaZxKMG",
		linkImg:
			"https://firebasestorage.googleapis.com/v0/b/wsremoto-1193d.appspot.com/o/smartmockups_ktx8juur.jpg?alt=media&token=dd4328e9-f416-4556-b247-bf94cd6e4ff2",
		span: "2021 - Atual",
		title: "Projeto Tabela de Classificação",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	}
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	var elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "DARK MODE";
	} else {
		elementButton.innerHTML = "CLEAR MODE";
	}
}
