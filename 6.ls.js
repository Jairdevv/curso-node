const fs = require('node:fs/promises')

// fs.readdir('.', (err, files) => {
// 	if (err){
// 		console.error('Error al leer el directorio', err)
// 		return;
// 	}

// 	files.forEach(file =>{
// 		console.log(file)
// 	})
// })


fs.readdir('.')
	.then(files =>{
		files.forEach(file =>{
			console.log(file)
		})
	})
	.catch(err =>{
		if(err){
			console.log('Error al encontrar el directorio', err)
			return;
		}
	})
