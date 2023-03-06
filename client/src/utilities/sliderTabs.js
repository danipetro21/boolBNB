export const sliderTabs = () => {
	// una costante tagsBox e cerca un elemento nella pagina web che abbia la classe CSS tagsBox
	const tagsBox = document.querySelector('.tagsBox'),
		// cerca tutti gli elementi con la classe CSS tag all'interno dell'elemento tagsBox.
		allTags = tagsBox.querySelectorAll('.tag'),
		//  cerca tutti gli elementi che hanno la classe CSS arrow seguita da un elemento i.
		allArrows = document.querySelectorAll('.arrow i')

	// booleano false per trascinare le tag
	let isDragging = false

	//  una funzione handleArrows che prende in input il valore di scorrimento e controlla se gli elementi freccia devono essere visualizzati o nascosti in base alla posizione di scorrimento attuale
	const handleArrows = scrollVal => {
		let maxScrollableWidth = tagsBox.scrollWidth - tagsBox.clientWidth
		allArrows[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex'
		allArrows[1].parentElement.style.display =
			maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex'
	}
	// cicla attraverso tutti gli elementi freccia trovati e aggiunge un listener per l'evento di click su ogni freccia
	allArrows.forEach(arrow => {
		arrow.addEventListener('click', () => {
			// Quando l'utente fa clic su una freccia, la funzione associata a quell'evento di click viene eseguita e modifica il valore di scorrimento dell'elemento tagsBox a seconda della freccia su cui è stato fatto clic.
			let scrollWidth = (tagsBox.scrollLeft += arrow.id === 'left' ? -340 : 340)
			// La funzione handleArrows viene chiamata per controllare se le frecce devono essere visualizzate o nascoste.
			handleArrows(scrollWidth)
		})
	})

	// cicla attraverso tutti gli elementi tag trovati e aggiunge un listener per l'evento di click su ogni tag.
	allTags.forEach(tag => {
		tag.addEventListener('click', () => {
			//  rimuove la classe CSS active dall'elemento attuale
			tagsBox.querySelector('.active').classList.remove('active')
			// aggiunge la classe CSS active all'elemento tag su cui è stato fatto click.
			tag.classList.add('active')
		})
	})

	// funzione dragging che viene chiamata quando l'utente trascina il mouse all'interno dell'elemento tagsBox
	const dragging = e => {
		// controlla se la variabile isDragging è impostata su true,
		if (!isDragging) return
		tagsBox.classList.add('dragging')
		// se lo è, modifica il valore di scorrimento dell'elemento tagsBox in base allo spostamento del mouse
		tagsBox.scrollLeft -= e.movementX
		//la funzione handleArrows viene chiamata per controllare se le frecce devono essere visualizzate o nascoste.
		handleArrows(tagsBox.scrollLeft)
	}

	// funzione dragStop viene chiamata quando l'utente rilascia il mouse
	const dragStop = () => {
		// imposta la variabile isDragging su false
		isDragging = false
		//  rimuove la classe CSS dragging
		tagsBox.classList.remove('dragging')
	}
	// quando l'utente fa clic su una tag, questa funzione imposta la variabile isDragging su true.
	tagsBox.addEventListener('mousedown', () => (isDragging = true))
	// quando l'utente trascina il mouse viene eseguita la funzione dragging
	tagsBox.addEventListener('mousemove', dragging)
	// evento viene attivato quando l'utente rilascia il pulsante del mouse dopo aver fatto click
	document.addEventListener('mouseup', dragStop)
}

// array dei dati di tag mostrati
export const tags = [
	'Baite',
	'Minicase',
	'Campagna',
	'Spazi per giocare',
	'Luxe',
	'Vista mozzafiato',
	"Sul'acqua",
	'Wow!',
	'Piscine incredibili',
	'Isole',
	'Barche',
	'Di tendenza',
	'Design',
	"Case sull'albero",
	'Sulle piste',
	'Castelli',
	'Grotte',
	'Fronte lago',
	'Cupole',
	'Luoghi remoti',
	'Case cicladiche',
	'B&B',
	'Dimore storiche',
	'Case galleggianti',
	'Ville',
	'Fienili',
	'Agriturismi',
	'Tropicali',
]
