/**
   * Base Create By Dika Ardnt.
   * Updated by fnixdev
   * Follow https://github.com/fnixdev
*/


const fs = require('fs')
const chalk = require('chalk')


// Outros
global.owner = ['558181718175']
global.prefix = ['/']
global.packname = 'Kurumi Bot'
global.author = 'https://github.com/GHOSTBOT69'
global.sp = '›'
global.mess = {
    admin: 'Apenas administradores podem usar esse comando!',
    botAdmin: 'Eu preciso ser administrador pra fazer isso!',
    owner: 'Apenas meu dono pode usar isso!',
    isowner: 'Lol ele é meu dono.',
    isAdmins: 'Apenas admin',
    group: 'Isso só pode ser usado em um grupo!',
    private: 'Isso só pode ser usado no privado',
    bot: 'Recursos especial do bot',
    wait: 'Carregando...',
    text: 'Eu preciso que você digite algo',
}
global.thumb = fs.readFileSync('./src/kurumi.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
