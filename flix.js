var listaImagens = []

listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e7n55C4027aRPHNmjE8XIk8nKvZ.jpg")
listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tkc7AVyUoG9VEeDvukN0TVqa24C.jpg")
listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnaznOwdOiMnGJ87zsQwEO1rV6w.jpg")
listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg")
listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2THBDjAqQ5NAtE5vSUWPcA5SdvL.jpg")
listaImagens.push("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hxZzwNI70C5hHyfXE25piCXuc3o.jpg")

var listaNomes = []

listaNomes.push("E se..?", "Cavaleiro da Lua", "Mulher Hulk", "Falcão", "Loki", "Ms Marvel")

var genero = []

genero.push("Use Adblock!", "Use Adblock!", "Use Adblock!", "Use Adblock!", "Use Adblock!", "Use Adblock!")


var ids = []

ids.push("1", "2", "3", "4", "5", "6")

var trailers = []

trailers.push("https://embed.warezcdn.net/serie/tt10168312",              "https://embed.warezcdn.net/serie/tt10234724", "https://embed.warezcdn.net/serie/tt10857160", "https://embed.warezcdn.net/serie/tt9208876", "https://embed.warezcdn.net/serie/tt9140554", "https://embed.warezcdn.net/serie/tt10857164")

var hora = []

hora.push("Aqui", "Aqui", "Aqui", "Aqui", "Aqui", "Aqui")

var desde = []

desde.push("<b>2022</b>", "<b>2022</b>", "<b>2022</b>", "<b>2022</b>", "<b>2022</b>", "<b>2022</b>")

var img = document.querySelector("#filmes");
for (var i = 0; i < listaImagens.length; i++){
    document.write("<div class='base' id='filmes'><div class='filme'><img data-toggle='modal' data-target='#"+ids[i]+"' src=" + listaImagens[i]+ "><p class='nome'>"+ listaNomes[i] + "</p><p class='data'>Desde de " + desde[i]+ "<div class='imghover'><div class='info'><span>"+ genero[i] + "</span><span>Clique: "+ hora[i] + "</span></div></div></div></div><div class='modal fade' id='"+ids[i]+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><iframe style='border-radius: 10px;' width='100%' height='320' src="+ trailers[i] +" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div></div></div>")
}
