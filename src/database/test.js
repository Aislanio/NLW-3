const Database = require("./db");
const saveOrphanages = require('./saveOrphanages');

Database.then(async db =>{
	 //inseri dados na tabela
	await saveOrphanages(db,{
		lat:"-9.4252427",
		lng:"-40.525335",
		name:"lar dos meninos",
		about:"Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
		whatsapp:"749882632",
		images:[
			"https://images.unsplash.com/photo-1613244470172-ef0f5f7830fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk0ODAw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
			"https://images.unsplash.com/photo-1615758041379-de2ab50e6cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE5MDk0ODgx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
		].toString(),
		instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
		opening_hours:"Horário de visita Das 18h até 8h",
		open_on_weekendes:"0"

	})
	
	//consultar dados na tabela
	/*const selectedOrphanages = await db.all("SELECT * FROM orphanages");
	console.log(selectedOrphanages);	
	// //consultar somente  1 orfanato pelo id
	const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="4"`);
	console.log(orphanage)

	*/
	// //deletar dado da tabela 
	// console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
	// console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))

})