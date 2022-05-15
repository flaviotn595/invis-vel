/**
 * Base Create By Dika Ardnt.
 * Updated by fnixdev
 " Updated by flaviojs
 * Follow https://github.com/GHOSTBOT69
**/


require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()


const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
	exec,
	spawn,
	execSync
} = require("child_process")

const axios = require('axios')

const {
	fromBuffer
} = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const moment = require("moment-timezone")
const yts = require('yt-search')

// const afk = require("./lib/afk");

// SRC

const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))

// LIB

const {
  hostname,
  totalmem,
  freemem,
  platform
} = require('os');

const {
	performance
} = require('perf_hooks')

const {
	UploadFileUgu,
	webp2mp4File,
	TelegraPh
} = require('./lib/uploader')

const {
	smsg,
	getGroupAdmins,
	formatp,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	delay,
	format,
	logic,
	generateProfilePicture,
	parseMention,
	getRandom
} = require('./lib/myfunc')

const { yta, ytv } = require('./lib/y2mate')
moment.tz.setDefault("America/Sao_Paulo").locale("pt");
module.exports = kurumi = async (kurumi, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')

		// Comandos

		const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
		const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''

		//

		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await kurumi.decodeJid(kurumi.user.id)
		const isCreator = [kurumi.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

		const itsMe = m.sender == kurumi.user.id ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    
		// Group
		const groupMetadata = m.isGroup ? await kurumi.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

		// NSFW
		const isNsfw = m.isGroup ? nsfw.includes(groupMetadata.id) : false
		
		

		// AFK
		// const isAfkOn = afk.checkAfkUser(m.sender, _afk)

		// Bot Status
		const used = process.memoryUsage()
		const cpus = os.cpus().map(cpu => {
			cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
		})
		const cpu = cpus.reduce((last, cpu, _, {
			length
		}) => {
			last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
		}, {
			speed: 0,
			total: 0,
			times: {
				user: 0,
				nice: 0,
				sys: 0,
				idle: 0,
				irq: 0
			}
		})


		///////////////////////////////////////////////////////////
		//                                                       //
		//                   Public/Self                         //
		//                                                       //
		///////////////////////////////////////////////////////////
		

		if (!kurumi.public) {
			if (!m.key.fromMe) return
		}
		
		        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'O jogo terminou',
	    '-2': 'Inválido',
	    '-1': 'Posição inválida',
	    0: 'Posição inválida',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `ID do quarto: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Vencer!` : isTie ? `Fim de jogo` : `É sua vez ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Tipo *desistir* render-se e admitir a derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await kurumi.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await kurumi.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

	
        
		///////////////////////////////////////////////////////////
		//                                                       //
		//           Lida com as mensagens no console            //
		//                                                       //
		///////////////////////////////////////////////////////////

		if (isCmd) {
			console.log(chalk.black(chalk.bgCyanBright('[ CMD ]')), chalk.black(chalk.cyan.bold(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.magenta('=> Em'), chalk.green(m.isGroup ? groupName : groupName))
		} else {
			console.log(chalk.black(chalk.bgWhiteBright('[ MSG ]')), chalk.black(chalk.white.bold(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.magenta('=> Em'), chalk.green(m.isGroup ? groupName : groupName))
		}
		
		

		///////////////////////////////////////////////////////////
		//                                                       //
		//                Comandos de Dono                       //
		//                                                       //
		///////////////////////////////////////////////////////////

		switch (command) {
		  case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Você ainda está no jogo'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Parceiros encontrados!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `ID do quarto: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Esperando @${room.game.currentTurn.split('@')[0]}

Tipo *desistir* render-se e admitir a derrota`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await kurumi.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Esperando o parceiro' + (text ? ` digite o comando abaixo ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            kurumi.sendText(m.chat, `Excluir com sucesso a sessão TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Sessão TicTacToe🎮 não existe`)
            } else throw '?'
            } catch (e) {
            m.reply('estragado')
            }
            }
            break
            case 'setexif': {
          if (!isCreator) return m.reply(`${mess.owner}`)
               if (!text) return m.reply(`Exemplo : ${prefix + command} kurumi|Bot`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif foi alterado com sucesso para\n\n🐶 Packname : ${global.packname}\n🐶 Author : ${global.author}`)
            }
            break
            case 'reacao': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                kurumi.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'deleta': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'A mensagem não foi enviada por um bot!'
                kurumi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
			case 'chat': {
				if (!isCreator) throw mess.owner
				if (!q) throw '_Opções_ :\n1 - mute\n2 - unmute'
				if (args[0] === 'mute') {
					kurumi.chatModify({
						mute: 'Infinity'
					}, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unmute') {
					kurumi.chatModify({
						mute: null
					}, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
			}
			break
		case 'join': {
			if (!isCreator) throw mess.owner
			if (!text) throw 'Insira o link do grupo!'
			if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
			m.reply(mess.wait)
			let result = args[0].split('https://chat.whatsapp.com/')[1]
			await kurumi.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
		}
		break
		
				case 'wallpaper': {
                if (!text) throw 'Insira um título de consulta'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Próxima imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Titulo : ${result.title}\n⭔ Categoria : ${result.type}\n⭔ Detalhe : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: kurumi.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                kurumi.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
            case 'leave': {
                if (!isCreator) return reply(`${mess.owner}`)
                await kurumi.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kurumi.sendMessage(m.chat, { image: { url: result }, caption: 'aqui esta' }, { quoted: m })
            }
            break
            
            case 'google': {
                if (!text) throw `exemplo : ${prefix + command} kurumi`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Pesquisa do Google de : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Título* : ${g.title}\n`
                teks += `⭔ *Descrição* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
				
		case 'isowner': {
			if (!m.isGroup) throw mess.group
			if (!isGroupAdmins) throw mess.admin
			if (!isBotAdmins) throw mess.botAdmin
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			if (users == isCreator) { throw mess.isowner }
			 else {
				await m.reply('Não é dono')
			}
		}
		break
		case 'public': {
			if (!isCreator) throw mess.owner
			kurumi.public = true
			m.reply('Bot agora esta no modo público.')
		}
		break
		case 'self': {
			if (!isCreator) throw mess.owner
			kurumi.public = false
			m.reply('Bot agora esta no modo privado')
		}
		break
		case 'ping':
		case 'botstatus':
		case 'statusbot': {
			if (!isCreator) throw mess.owner
			let timestamp = speed()
			let latensi = speed() - timestamp
			neww = performance.now()
			oldd = performance.now()
			respon = `*Ping*: ${latensi.toFixed(4)}ms\n*Uptime*: ${runtime(process.uptime())}\n*RAM*: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n*NodeJS Usage*\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
                `.trim()
			m.reply(respon)
		}
		break
		case 'block': {
			if (!isCreator) throw mess.owner
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await kurumi.updateBlockStatus(users, 'block').then((res) => m.reply('_Usuario bloquedo_')).catch((err) => m.reply(jsonformat(err)))
		}
		break
		case 'unblock': {
			if (!isCreator) throw mess.owner
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await kurumi.updateBlockStatus(users, 'unblock').then((res) => m.reply('_Usuario desbloqueado_')).catch((err) => m.reply(jsonformat(err)))
		}
		break
        case 'update': {
			if (!isCreator) throw mess.owner
			stdout = execSync('git remote set-url origin https://github.com/flaviotn595/invis-vel.git && git pull')
			m.reply(stdout.toString())
		}
		break
		case 'setprefix': {
			if (!isCreator) throw mess.owner
			if (!text) return m.reply('_Eu preciso que você informe um prefixo._')
			global.prefix = text[0]
			m.reply(`_Prefixo alterado para ${text[0]}_`)
		}
		break
		case 'restart': {
			if (!isCreator) throw mess.owner
			await m.reply('Reiniciando...')
			process.send('reset')
		}
		break

		///////////////////////////////////////////////////////////
		//                                                       //
		//                   Comandos de ADM                     //
		//                                                       //
		///////////////////////////////////////////////////////////

		case 'tagall':
			if (!m.isGroup) throw mess.group
			if (!isGroupAdmins) throw mess.admin
			if (!text) throw mess.text
			kurumi.sendMessage(m.chat, {
				text: q ? q : '',
				mentions: participants.map(a => a.id)
			})
			break
			case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurumi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	   case 'kick': {
	if (!m.isGroup) return m.reply(`${mess.group}`)
  if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
  if (!isAdmins) return m.reply(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurumi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	 case 'listpv': {
   let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
   let teks = `⬣ *LISTA DE BATE-PAPO PESSOAL*\n\nTotal Chat : ${anu.length} Chat\n\n`
    for (let i of anu) {
    let nama = store.messages[i].array[0].pushName
    teks += `⬡ *Nome:* ${nama}\n⬡ *Do utilizador :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kurumi.sendTextWithMentions(m.chat, teks, m)
             }
             break
                
		case 'promote': {
			if (!m.isGroup) throw mess.group
			if (!isGroupAdmins) throw mess.admin
			if (!isBotAdmins) throw mess.botAdmin
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await kurumi.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('_Usuario Promovido_')).catch((err) => m.reply(jsonformat(err)))
		}
		break
		case 'listgp': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LISTA GRUPO DE BATE-PAPO*\n\nTotal de Grupo : ${anu.length} Grupo\n\n`
                 for (let i of anu) {
                     let metadata = await kurumi.groupMetadata(i)
                     teks += `⬡ *Nome :* ${metadata.subject}\n⬡ *Proprietário :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Não conhecido'}\n⬡ *ID :* ${metadata.id}\n⬡ *Criado :* ${moment(metadata.creation * 1000).tz('merica/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Membro :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kurumi.sendTextWithMentions(m.chat, teks, m)
             }
             break
		case 'demote': {
			if (!m.isGroup) throw mess.group
			if (!isGroupAdmins) throw mess.admin
			if (!isBotAdmins) throw mess.botAdmin
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await kurumi.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('_Usuario foi rebaixado a membro comum_')).catch((err) => m.reply(jsonformat(err)))
		}
		break
case 'attp': case 'ttp': {
           if (!text) throw `Exemplo : ${prefix + command} text`
           await kurumi.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'kurumi', 'Bot', m, {asSticker: true})

         }
         break
    case 'emoji2': {
	    if (!text) throw `Exemplo : ${prefix + command} 🥹`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await kurumi.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
		case 'nsfw':
			if (!m.isGroup) throw mess.group
			if (!isGroupAdmins) throw mess.admin
			if (!text) throw mess.text
			if (Number(text[0]) === 1) {
				if (isNsfw) return m.reply('_A putaria ja esta liberada._')
				nsfw.push(groupMetadata.id)
				fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
				m.reply('_A putaria foi liberada 😈_')
			} else if (Number(args[0]) === 0) {
				nsfw.splice(groupMetadata.id, 1)
				fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
				m.reply('_Nsfw foi desativado no grupo_')
			} else {
				m.reply('_Digite 1 para ativar ou 0 para desativar._')
			}
			break

			///////////////////////////////////////////////////////////
			//                                                       //
			//                   Comandos Gerais                     //
			//                                                       //
			///////////////////////////////////////////////////////////

/*		case 'bater':
		case 'slap': {
			if (!m.isGroup) throw mess.group
			let user2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			const rjogar = getRandom(slap.throw)
			const rhit = getRandom(slap.hit)
			const ritens = getRandom(slap.itens)
			const rtemplate = getRandom(slap.template)
			m.reply(rtemplate)
		}
		break*/
		  /*case 'antilink':{
	  
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Anteriormente ativo`)
                db.data.chats[m.chat].antilink = true
                m.reply(`antellink ativo !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Anteriormente inativo`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink inativo!`)
                } else {
                 let buttons = [
                        { buttonId: `/antilink on`, buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: `/antilink off`, buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kurumi.sendButtonText(m.chat, buttons, `Modo Antilink`, kurumi.user.name, m)
                }
             }
             break*/
		case 'linkgrupo':
		case 'link': {
			if (!m.isGroup) throw mess.group
			let response = await kurumi.groupInviteCode(m.chat)
			kurumi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink do grupo : ${groupMetadata.subject}`, m, {
				detectLink: true
			})
		}
		break
  case 'grupo': case 'grup': {
    if (!m.isGroup) return m.reply(`${mess.group}`)
    if (!isBotAdmins) return m.reply(`${mess.botAdmin}`)
    if (!isAdmins) return m.reply(`${mess.admin}`)
                if (args[0] === 'fechar'){
                    await kurumi.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Fechando Grupo com sucesso`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'abrir'){
                    await kurumi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Abrindo grupo com sucesso`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: `/grupo abrir`, buttonText: { displayText: 'Abrir Grupo' }, type: 1 },
                        { buttonId: `/grupo fechar`, buttonText: { displayText: 'Fechar Grupo' }, type: 1 }
                    ]
                    await kurumi.sendButtonText(m.chat, buttons, `ABRIR OU FECHAR GRUPO`, kurumi.user.name, m)

             }
            }
            break 
		case 'kurumi': {
			if (!text) throw '_Acho que você tem Q.I baixo._'
			let res = await axios.get(`https://sim.vuiz.net/?text=${text}&lang=pt&cf=false`)
			let simitext = res.data.success
			await m.reply(`_${simitext}_`)
		}
		break

		case 'sourcne.': {
			const fnix = 'https://telegra.ph/file/d7d397bcc9208d6407818.jpg'
			anu = `┌──⭓ *kurumi Bot* ✨\n│\n*├✎* _Bot com intuito de aprender_\n│  _programação em JavaScript_\n│\n*├✎* *Dono*: fnixdev\nAtulizacao GhostDev\n*├✎* https://github.com/flaviotn595/invis-vel\n│\n└───────⭓\n`
			kurumi.sendMessage(m.chat, {
				image: {
					url: fnix
				},
				caption: anu
			}, {
				quoted: m
			})
		}
		break
		     case 'emoji': {
	        if (!text) throw `Exemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kurumi.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
		 case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kurumi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('limite e 10 segundos!')
                let media = await quoted.download()
                let encmedia = await kurumi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `maque uma foto ou viode ${prefix + command}\nDuracao de 1-9 segundos`
                }
            }
            break
            
            case 'togif': {
                if (!quoted) return m.reply(`Imagem de resposta`)
                if (!/webp/.test(mime)) return m.reply(`Responder adesivo com legenda *${prefix + command}*`)
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kurumi.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kurumi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

		case 'toge': case 'toimg': {
    if (!quoted) return m.reply(`Imagem de resposta`)
    if (!/webp/.test(mime)) m.reply(`Responder adesivo com legenda *${prefix + command}*`)
     m.reply(mess.wait)
    let media = await kurumi.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    kurumi.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
		case 'toigif':
		case 'tovideo': {
			if (!m.isGroup) throw mess.group
			if (!quoted) throw 'Reply Image'
			if (!/webp/.test(mime)) throw `Responda a um sticker animado *${prefix + command}*`
			m.reply(mess.wait)
			let media = await kurumi.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await kurumi.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'tourl': {
			if (!m.isGroup) throw mess.group
			m.reply(mess.wait)
			let media = await kurumi.downloadAndSaveMediaMessage(quoted)
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media)
				m.reply(util.format(anu))
			} else if (!/image/.test(mime)) {
				let anu = await UploadFileUgu(media)
				m.reply(util.format(anu))
			}
			await fs.unlinkSync(media)
		}
		break
		case 'owner':
		case 'creator':
		case 'dono': {
			let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
				+
				'VERSION:3.0\n' +
				'N:;flavio.;;;' +
				'FN: Flávio N.\n' +
				'ORG:flavioJs (GhostDev);\n' +
				'TEL;type=CELL;type=VOICE;waid=558181718175:+55 81 81718175\n' +
				'END:VCARD'
			kurumi.sendMessage(m.chat, {
				contacts: {
					displayName: 'flavio.',
					contacts: [{
						vcard
					}]
				}
			}, {
				quoted: m
			})
		}
		break
		case 'menu': {
		  anu =`┌─⚜
│「 Ola 👋 」
└┬⚜ 「 ${pushname} 」
┌┤✑ *Eu sou a KurumiBot*🤗
│└───────────────┈ ⳹
│      「 BOT INFO 」
├✎ Biblioteca : Baileys-MD
├✎ Prefix : ( ${prefix} )
├✎ Uptime : ${runtime(process.uptime())}
├✎ Número do Dono : ${global.owner}
├✎ Plataforma : ${os.platform()}
└┬──────────────┈ ⳹
   │✑ *Selecione o botão abaixo*
   └───────────────┈ ⳹`
            let message = await prepareWAMessageMedia({
				image: fs.readFileSync('./src/kurumi.jpg')
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
                                    displayText: 'Github',
                                    url: 'https://github.com/GHOSTBOT69'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Numero Do Dono',
                                    phoneNumber: '+55 81 98171-8175'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu Primeiro',
                                    id: '/helpppp'
                                    }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Menu Anime',
                                    id: '/menuanime'
                                }
                            }]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'helpppp': {
		capt =`╭──⚜ *Menu de Grupo*
│
*├✎* ${prefix}link
*├✎* ${prefix}grupo
*├✎* ${prefix}add @user
*├✎* ${prefix}kick @user
*├✎* ${prefix}promote @user
*├✎* ${prefix}demote @user
│
╰───────⚜

╭──⚜ *Play & Convert & pesqu*
│
*├✎* ${prefix}play 🎶
*├✎* ${prefix}tomp3 📁
*├✎* ${prefix}sticker 📄
*├✎* ${prefix}toimg 🖼️
*├✎* ${prefix}toigif 📹
*├✎* ${prefix}google 🌐
*├✎* ${prefix}pinterest 🖼️
*├✎* ${prefix}wllpaper 🖼️
*├✎* ${prefix}emoji 🤗 
*├✎* ${prefix}emoji2 🤗
│
╰───────⚜

╭──⚜ *Menu Dono*
│
*├✎* ${prefix}ping
*├✎* ${prefix}chat [opção]
*├✎* ${prefix}join [link]
*├✎* ${prefix}leave
*├✎* ${prefix}setexif
*├✎* ${prefix}block @user
*├✎* ${prefix}unblock @user
│
╰───────⚜`	
                let animeMessage = {
				image: {
					url: './src/kurumi.jpg'
				},
				caption: capt,
			}
			kurumi.sendMessage(m.chat, animeMessage, {
				quoted: m
			})
		}
break
		case 'sk2.1': {
			const min = 'https://telegra.ph/file/df0aca18c37be0bbea032.jpg'
			anu = `SK-Experience v2.1 | Stock

📱 Modelo: Moto G7 Play
📟 Codinome: Channel
⏳ Data: 2022/01/04
📜 Android Versão: 10
🛡️ SELinux: Enforcing
📁 Firmware: RetBR
💾 Gapps: Incluído
📢 Desenvolvedor : @SKILlXinn
📢 Logo, Wallpaper : @emyli18
📢 Icone Ui : @PavlovaUI

Changes 📃

- Instalação via Fastboot.
- Aplicativos desnecessários removidos.
- Fonte de cores novas, Novo estilo SystemUi, novos ícone status bar
- Versão enraizada, magisk 23.0
- Adicionado Lawnchair 10 v2.1, Mi Music.
- Apps motorola atualizado.
- Versão de firmware usada, QPYS30.52-22-14/RetBR.

@SKG7Play`
			let message = await prepareWAMessageMedia({
				image: {
					url: min
				}
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
								displayText: 'SK STOCK V2.1',
								url: 'https://drive.google.com/file/d/1k1M_sElLe8cc-OLqQvpwAY5Pbyvn2gqp/view'
							}
						}]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
	break
	break
		case 'skui': {
			const sk = 'https://i.ibb.co/ZJDyJhD/IMG-20220405-144850-595.jpg'
			anu = `• 𝙎𝙆 𝙐𝙄 1.0 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙍𝙚𝙡𝙚𝙖𝙨𝙚: 

• 𝘿𝙚𝙫𝙞𝙘𝙚: 𝙈𝙤𝙩𝙤 𝙂⁷ 𝙋𝙡𝙖𝙮 
• 𝘿𝙖𝙩𝙚: 2022/02/26 
• 𝘼𝙣𝙙𝙧𝙤𝙞𝙙 𝙫𝙚𝙧𝙨𝙞𝙤𝙣: 10

• 𝙉𝙚𝙬 𝙘𝙝𝙖𝙣𝙜𝙚𝙡𝙤𝙜: 
 - 𝙈𝙄𝙐𝙄 12 𝘼𝙣𝙙𝙧𝙤𝙞𝙙 10 
- 𝙈𝙖𝙜𝙞𝙨𝙠 𝙫24.1 
- 𝙋𝙧𝙤𝙙𝙞𝙜𝙮𝙆𝙚𝙧𝙣𝙚𝙡 𝙊𝙬𝙣𝙚𝙧 @DarkzinSSH - 𝙀𝙭𝙘𝙝𝙖𝙣𝙜𝙚𝙙 𝙜𝙖𝙥𝙥𝙨, 𝙡𝙞𝙜𝙝𝙩𝙬𝙚𝙞𝙜𝙝𝙩 𝙖𝙥𝙥𝙨.

• 𝘽𝙪𝙜𝙨 𝙁𝙞𝙭𝙚𝙙:  
- 𝙎𝙄𝙈 𝙘𝙖𝙧𝙙 (𝙨𝙡𝙤𝙩 1) (𝙨𝙡𝙤𝙩2)
- 𝙡𝙤𝙬 𝙗𝙧𝙞𝙜𝙝𝙩𝙣𝙚𝙨𝙨. 
- 𝙨𝙡𝙞𝙙𝙞𝙣𝙜 𝙗𝙧𝙞𝙜𝙝𝙩𝙣𝙚𝙨𝙨. 
- 𝙨𝙘𝙧𝙚𝙚𝙣 𝙖𝙩 𝙖𝙗𝙨𝙤𝙡𝙪𝙩𝙚 0. 
- 𝙘𝙤𝙣𝙩𝙧𝙤𝙡 𝙘𝙚𝙣𝙩𝙚𝙧 𝙛𝙡𝙖𝙨𝙝𝙞𝙣𝙜. 
- 𝙘𝙤𝙣𝙣𝙚𝙘𝙩𝙞𝙤 𝙨𝙚 𝙣𝙤𝙩 𝙬𝙤𝙧𝙠𝙞𝙣𝙜. 
- 𝙜𝙥𝙪 𝙖𝙩 0% 𝙘𝙤𝙣𝙨𝙩𝙖𝙣𝙩 𝙘𝙖𝙪𝙨𝙞𝙣𝙜 𝙘𝙧𝙖𝙨𝙝𝙚𝙨 𝙞𝙣 𝙩𝙝𝙚 𝙞𝙣𝙩𝙚𝙧𝙛𝙖𝙘𝙚. 
- 𝙂𝙤𝙤𝙜𝙡𝙚 𝙥𝙡𝙖𝙮 𝙨𝙚𝙧𝙫𝙞𝙘𝙚 𝙣𝙤𝙩 𝙬𝙤𝙧𝙠𝙞𝙣𝙜.
- 𝙁𝙡𝙖𝙨𝙝𝙡𝙞𝙜𝙝𝙩 𝙣𝙤𝙩 𝙬𝙤𝙧𝙠𝙞𝙣𝙜. 

• 𝘽𝙪𝙜𝙨 𝙩𝙝𝙖𝙩 𝙚𝙭𝙞𝙨𝙩𝙨: 
- 𝘽𝙡𝙪𝙚𝙩𝙤𝙤𝙩𝙝 𝙙𝙤𝙚𝙨𝙣'𝙩 𝙬𝙤𝙧𝙠, 𝙟𝙪𝙨𝙩 𝙘𝙧𝙮.
- 𝙜𝙘𝙖𝙢 𝙙𝙤𝙚𝙨𝙣'𝙩 𝙬𝙤𝙧𝙠, 𝙟𝙪𝙨𝙩 𝙜𝙘𝙖𝙢 𝙜𝙤'`
			let message = await prepareWAMessageMedia({
				image: {
					url: sk
				}
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
								displayText: 'SK UI 1.0 OFFICIAL',
								url: 'https://drive.google.com/file/d/1-08eejX6adwextJUR6wU7L_G-wPFriH-/view'
							}
						}]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'fe': {
			const fe = 'https://i.ibb.co/Q84s0zN/IMG-20220405-WA0056.jpg'
			anu = `• 𝙇𝙞𝙣𝙚𝙖𝙜𝙚𝙊𝙎 𝙁𝙖𝙣 𝙀𝙙𝙞𝙩𝙞𝙤𝙣  𝙫2

• 𝘿𝙚𝙫𝙞𝙘𝙚: 𝙈𝙤𝙩𝙤 𝙂⁷ 𝙋𝙡𝙖𝙮 
• 𝘿𝙖𝙩𝙚: 2022/02/26 
• 𝘼𝙣𝙙𝙧𝙤𝙞𝙙 𝙫𝙚𝙧𝙨𝙞𝙤𝙣: 10

• 𝙉𝙚𝙬 𝙘𝙝𝙖𝙣𝙜𝙚𝙡𝙤𝙜: 
- 𝘼𝙙𝙙 𝙡𝙖𝙬𝙣𝙘𝙝𝙖𝙞𝙧. 
- 𝙈𝙖𝙜𝙞𝙨𝙠 24.1. 
- 𝙍𝙚𝙬𝙤𝙧𝙠𝙚𝙙 𝙨𝙮𝙨𝙩𝙚𝙢, 𝙡𝙞𝙜𝙝𝙩𝙬𝙚𝙞𝙜𝙝𝙩 𝙜𝙖𝙥𝙥𝙨. 
- 𝙃𝙞𝙙𝙙𝙚𝙣 𝙜𝙚𝙨𝙩𝙪𝙧𝙚 𝙣𝙖𝙫𝙞𝙜𝙖𝙩𝙞𝙤𝙣 𝙗𝙖𝙧 𝙛𝙤𝙧 𝙢𝙤𝙧𝙚 𝙨𝙘𝙧𝙚𝙚𝙣 𝙨𝙥𝙖𝙘𝙚. 
- 𝙉𝙚𝙬 𝙬𝙞𝙛𝙞, 𝙙𝙖𝙩𝙖, 𝙗𝙖𝙩𝙩𝙚𝙧𝙮 𝙞𝙘𝙤𝙣𝙨.
- 𝘼𝙙𝙙𝙚𝙙 𝙨𝙘𝙧𝙞𝙥𝙩 𝙛𝙤𝙧 𝙗𝙚𝙩𝙩𝙚𝙧 𝙗𝙖𝙩𝙩𝙚𝙧𝙮 𝙪𝙨𝙖𝙜𝙚, 𝙥𝙚𝙧𝙛𝙤𝙧𝙢𝙖𝙣𝙘𝙚  

• 𝙏𝙝𝙖𝙣𝙠𝙨 @BaianoPamper @cool_modules`
			let message = await prepareWAMessageMedia({
				image: {
					url: fe
				}
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
								displayText: 'LINEAGE FA EDITION V2',
								url: 'https://drive.google.com/file/d/1-13KND6g5ZM2M4l_gMF2AUyIm77YJjU0/view'
							}
						}]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'mieu': {
			const miui = 'https://i.ibb.co/DL4sPdF/IMG-20220405-WA0057.jpg'
			anu = `• MIUI EU | V11

📱 Device: Moto G⁷ Play
📟 Codename: Channel
📅 Date: 2022/01/04
🔄 Android: 10
🔐 SELinux: Enforcing
📀 GApps: Included
📁 Architecture: ARM64 (64-bit)
🔒 Security Patch: December 2021
👨‍💻 Maintainer: @BaianoPamper

 Changes⬇️

• most bugs fixed.
• unlikely stability.

#MIUI #Q #Channel`
			let message = await prepareWAMessageMedia({
				image: {
					url: miui
				}
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
								displayText: 'MIUI EU V11',
								url: 'https://drive.google.com/file/d/1VbELMqCm6drLUaQk91YESEP8kvqR-5vL/view'
							}
						}]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'discord': {
			const disc = 'https://telegra.ph/file/5202907a4419530e0848d.jpg'
			anu = `_Clique no botão abaixo para baixar entrar no nosso servidor do Discord_`
			let message = await prepareWAMessageMedia({
				image: {
					url: disc
				}
			}, {
				upload: kurumi.waUploadToServer
			})
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						imageMessage: message.imageMessage,
						hydratedContentText: anu,
						hydratedButtons: [{
							urlButton: {
								displayText: 'Entrar no Discord',
								url: 'https://discord.gg/PQncrzqHmb'
							}
						}]
					}
				}
			}), {
				userJid: m.chat,
				quoted: m
			})
			kurumi.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break

		///////////////////////////////////////////////////////////
		//                                                       //
		//                      Anime                            //
		//                                                       //
		///////////////////////////////////////////////////////////

		case 'menuanime':
		case 'animemenu': {
			capt = `╭──⚜ *Procurar Anime*
│
*├✎* ${prefix}anime [Nome]
*├✎* ${prefix}manga (indisponível)
│
╰───────⚜

╭──⚜ *Anime Fotos/Gifs*
│
*├✎* ${prefix}neko
*├✎* ${prefix}waifu
│
╰───────⚜`
			let animeMessage = {
				image: {
					url: './src/kurumi.jpg'
				},
				caption: capt,
			}
			kurumi.sendMessage(m.chat, animeMessage, {
				quoted: m
			})
		}
		break
		case 'anime': {
			if (!text) throw mess.text
			m.reply(mess.wait)
			const res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${text}`)
			animeinfo = `✨️ *Título:* ${res.data.results[0].title}\n🎆️ *Episódios:* ${res.data.results[0].episodes}\n💌️ *Avaliação:* ${res.data.results[0].rated}\n❤️ *Score:* ${res.data.results[0].score}\n💚️ *Descrição:* ${res.data.results[0].synopsis}\n`
			kurumi.sendMessage(m.chat, {
				image: {
					url: res.data.results[0].image_url
				},
				caption: animeinfo
			}, {
				quoted: m
			})
		}
		break
		case 'manga': {
			m.reply('_Funcão ainda em desenvolvimento._')
		}
		break
		case 'nhentai': {
			if (!text) return m.reply('_Eu preciso que você digite o id de um hentai do nhentai_')
			let res = await axios.get(`http://hadi-api.herokuapp.com/api/nhentai?id=${text}`)
			if (res.data.status === true) {
				let result = `• Nome: ${res.data.result.name}\n\n• Tags: ${res.data.result.tags}\n• Idioma: ${res.data.result.language}\n• Paginas: ${res.data.result.pages}\n• Categoria: ${res.data.result.catefories}\n\n_Fazendo download aguarde..._`
				m.reply(result)
				kurumi.sendMessage(m.chat, {
					document: {
						url: res.data.result.download_pdf
					}
				}, {
					quoted: m
				})
			} else {
				return m.reply(`_Não foi possível encontrar o hentai, verifique que o ID digitado esta correto_`)
			}
		}
		break
		case 'neko': {
			let neko = await axios.get('https://nekos.life/api/v2/img/neko')
			kurumi.sendMessage(m.chat, {
				image: {
					url: neko.data.url
				}
			}, {
				quoted: m
			})
		}
		break
		case 'wallpaper': {
			let neko = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			kurumi.sendMessage(m.chat, {
				image: neko.data.url
			}, {
				quoted: m
			})
		}
		break
		case 'waifu': {
			let neko = await axios.get('https://api.waifu.pics/sfw/waifu')
			kurumi.sendMessage(m.chat, {
				image: {
					url: neko.data.url
				},
			}, {
				quoted: m
			})
		}
		break

		// NSFW CMDS

		case 'anal': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/anal')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
	/*	case 'hentai': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/hentai')
			
			kurumi.sendMessage(m.chat, {
				image: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._'
			}, {
				quoted: m
			})
		}
		break*/
		case 'boobs': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/boobs')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'pussy': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/pussy')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'cum': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/cum')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'blowjob': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/bj')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'hentaineko': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurumi.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'desbloquear': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurumi.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
		case 'hentaigif': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/Random_hentai_gif')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'feet': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/feetg')
			 
			kurumi.sendMessage(m.chat, {
				video: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._',
				gifPlayback: true,
			}, {
				quoted: m
			})
		}
		break
		case 'yuri': {
			if (!m.isGroup) return m.reply(mess.group)
			let neko = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			 
			kurumi.sendMessage(m.chat, {
				image: {
					url: neko.data.url
				},
				caption: '_Vai bater pra 2d né safado._'
			}, {
				quoted: m
			})
		}
		break
		case 'casal': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let proximo1 = member[Math.floor(Math.random() * member.length)]
            let proximo2 = member[Math.floor(Math.random() * member.length)]
            let cupido = `Casal Do ano vai para 
            @${proximo1.split('@')[0]} ❤️ @${proximo2.split('@')[0]}`
            let menst = [proximo1, proximo2]
            let buttons = [
                        { buttonId: 'casal', buttonText: { displayText: 'Proximo Casal' }, type: 1 }
                    ]
                    await kurumi.sendButtonText(m.chat, buttons, cupido, kurumi.user.name, m, {mentions: menst})
            }
            break
                        case 'trial': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let proximo1 = member[Math.floor(Math.random() * member.length)]
            let proximo2 = member[Math.floor(Math.random() * member.length)]
            let proximo3 = member[Math.floor(Math.random() * member.length)]
            let cupido2 = `Trial vai da bom ne hummmmmmm
@${proximo1.split('@')[0]} 😈️ @${proximo2.split('@')[0]} 🥵 @${proximo3.split('@')[0]}`
            let menst = [proximo1, proximo2, proximo3]
            let buttons = [
                        { buttonId: '/trial', buttonText: { displayText: 'Proximo Trial' }, type: 1 }
                    ]
                    await kurumi.sendButtonText(m.chat, buttons, cupido2, kurumi.user.name, m, {mentions: menst})
            }
            break
		           case 'signo': case 'signos': {
                if (!text) throw `Exemplo : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricórnio", new Date(1970, 0, 1)],
                    ["Aquário", new Date(1970, 0, 20)],
                    ["Peixes", new Date(1970, 1, 19)],
                    ["Áries", new Date(1970, 2, 21)],
                    ["Touro", new Date(1970, 3, 21)],
                    ["Gêmeos", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leão", new Date(1970, 6, 23)],
                    ["Virgem", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["Escorpião", new Date(1970, 9, 23)],
                    ["Sagitário", new Date(1970, 10, 22)],
                    ["Capricórnio", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                kurumi.sendText(m.chat, `⭔ *Signos :* ${anu.message.zodiak}\n⭔ *Número :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planeta :* ${anu.message.planet_yang_mengitari}\n⭔ *Flor :* ${anu.message.bunga_keberuntungan}\n⭔ *Cor :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemento :* ${anu.message.elemen_keberuntungan}\n⭔ *Casal do Zodíaco :* ${anu.message.pasangan_zodiak}\n⭔ *Notas :* ${anu.message.catatan}`, m)
            }
            break

		///////////////////////////////////////////////////////////
		//                                                       //
		//                      Youtube                          //
		//                                                       //
		///////////////////////////////////////////////////////////
		
		case 'tomp3': {
  if (/document/.test(mime)) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
   if (!quoted) return reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kurumi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${kurumi.user.name}.mp3`}, { quoted : m })
            }
            break
            		   case 'bass':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await kurumi.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                kurumi.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda ao áudio que deseja alterar com uma legenda *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break

			case 'play': case 'yt': {
				if (!text) throw '_Eu preciso que você digite algo para pesquisar!_'
				m.reply('_Tudo bem querido eu vou procurar pra você._')
				const search = await yts(`${text}`).catch(e => { m.reply('_[ ! ] Não consegui encontrar oque você queria 😔_')})
				anu = await yts( { videoId: `${search.all[0].videoId}` } )
				let buttons = [
					{buttonId: `${prefix}mp3 ${anu.url}`, buttonText: {displayText: '🎶 Audio'}, type: 1},
					{buttonId: `${prefix}mp4 ${anu.url}`, buttonText: {displayText: '🎥 Video'}, type: 1}
				]
				let buttonMessage = {
					image: { url: anu.thumbnail },
					caption: `*RESULTADO DA PESQUISA*
⭔ Titulo : ${anu.title}
⭔ Views : ${anu.views}`,
					footer: kurumi.user.name,
					buttons: buttons,
					headerType: 4
				}
				kurumi.sendMessage(m.chat, buttonMessage, { quoted: m })
			} 
			break

			case 'mp3':{
				let { yta } = require('./lib/y2mate')
				let quality = args[1] ? args[1] : '128kbps'
				let media = await yta(text, quality)
				if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
				kurumi.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg'}, { quoted: m })
			}
			break
			case 'mp4':{
				let { ytv } = require('./lib/y2mate')
				let quality = args[1] ? args[1] : '480p'
				let media = await ytv(text, quality)
				if (media.filesize >= 100000) return m.reply('Arquivo acima do limite '+util.format(media))
				kurumi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, { quoted: m })
			}
			break

		case 'tiktok': {
			//m.reply('_Função desativada temporáriamente._')
			if (!text) throw 'Eu preciso que você insira um link!'
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw 'Link Invalido!'
			m.reply(mess.wait)
			capt = '_Send by kurumiBot_'
			res = await axios.get(`http://hadi-api.herokuapp.com/api/tiktok?url=${text}`)
			let vid = res.data.result.video.nowm
			kurumi.sendMessage(m.chat, {
				video: {
					url: vid
				},
				caption: capt,
				mimetype: 'video/mp4',
				fileName: 'video.mp4'
			}, { 
				quoted: m 
			})
		}
		break
		default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return m.reply(mess.owner)

				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					return m.reply(bang)
				}
				try {
					m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					m.reply(String(e))
				}
			}
			if (budy.startsWith('>')) {
				if (!isCreator) return m.reply(mess.owner)
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					m = String(err)
					await m.reply(m)
				}
			}
			
			
			

			if (budy.startsWith('$')) {
				if (!isCreator) return reply(mess.owner)
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(err)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		m.reply(util.format(err))
	}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
