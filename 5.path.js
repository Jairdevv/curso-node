const path = require('node:path')

// Barra separadora de carpetas
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/jair-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/jair-secret-files/password.txt', '.txt')
console.log(filename)

const extension = path.extname('my.image.space.jpg')
console.log(extension)