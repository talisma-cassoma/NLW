//procuar o botao
document.querySelector("#add-time")
//quando cliclar no botao
.addEventListener('click', cloneField)

//executar uma acao
function cloneField(){
	//duplicar os campos. que campos?
	const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//é uma func boolean
	
	//pegar os campos. que campos? 
	const fields = newFieldContainer.querySelectorAll('input')

	//para cada campo, limpar
	fields.forEach(function(field){
		//pega o field do mùomento e limpa ele
		field.value = ""
		})

//colocar na pagina . onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}