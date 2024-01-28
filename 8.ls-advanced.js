const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

// fs.readdir('.', (err, files) => {
// 	if (err){
// 		console.error('Error al leer el directorio', err)
// 		return;
// 	}

// 	files.forEach(file =>{
// 		console.log(file)
// 	})
// })


fs.readdir(folder)
  .then(files =>{
		files.forEach(file =>{
			console.log(file)
		})
	})
	.catch(err =>{
		if(err){
			console.error('Error al encontrar el directorio: ', err)
			return;
		}
	})
