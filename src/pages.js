const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanages");

module.exports = {
	index(req,res){
		return res.render("index")
	},
	async orphanage(req,res){
		const id = req.query.id;
		try{
			const db = await Database;
			
			const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
			
			const orphanage = results[0]

			orphanage.images = orphanage.images.split(",");
			orphanage.firstImage = orphanage.images[0];

			
			if (orphanage.open_on_weekendes == "0") {
				orphanage.open_on_weekendes = false
			}else{orphanage.open_on_weekendes = true};
			
			return res.render('orphanage',{orphanage});
		} catch(erro){
			
			console.log("erro no orphanage");
			return res.send("Erro no banco de dados no orphanage");

		};
	},
	 async orphanages(req,res){
		//coloca orphanages pelo banco de dados
		try{
			const db = await Database;
			const orphanages = await db.all("SELECT * FROM orphanages");
			return res.render("orphanages",{orphanages})
		} catch(erro){
			console.log("erro");
			return res.send("Erro no banco de dados")
		}
		
	},
	createOrphanage(req,res){
		return res.render("create-orphanage")
	},
	 async saveOrphanage(req,res){
		const fields = req.body;
		console.log(fields)
		//validar todos os campos
		if(Object.values(fields).includes('')){
			return res.send("Todos os campos Devem ser prenchidos")
		}
		try{
			//SALVAR UM orphanage
			const db = await Database;
			await saveOrphanage(db,{
				lat: fields.lat,
				lng: fields.lng,
				name: fields.name,
				about: fields.about,
				whatsapp: fields.whatsapp,
				images: fields.images.toString(),
				instructions: fields.instructions,
				opening_hours: fields.opening_hours,
				open_on_weekendes: fields.open_on_weekendes,
			});

			// redirecionamento
			return res.redirect('/orphanages');
		}catch(erro){
			console(erro);
			return res.send("Erro no banco de dados");
		}
		
	}
}