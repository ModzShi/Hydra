//{uma base aprimorada}👻..

//se quiser comprar um bot com mais de 1k de comandos com botões, me chama no pv 5531972595934

//Lembre-se bot via termux e lento mesmo kkkkk

//os plays estão sem requets se quiser que os plays compre requets 553172595934

//KIRITO-BOT\\
const {
default:
makeWASocket,
DisconnectReason,
Browsers,BufferJSON, 
useMultiFileAuthState,
delay,
makeInMemoryStore,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion
} = require ('@WhiskeySockets/baileys')
const fs = require('fs');
const axios = require('axios');
let pino = require('pino')
const infoSystem = require('os')
const linkfy = require('linkifyjs');
const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk');
const FormData = require("form-data");
const readline = require('readline')
const cfonts = require('cfonts')
const NodeCache = require('node-cache')
const fetch = require('node-fetch');
const { randomBytes } = require("crypto");
const premium = JSON.parse(fs.readFileSync('./arquivos/vip/premium.json'));
const autop = JSON.parse(fs.readFileSync('./arquivos/autop.json'))
const countMessage = JSON.parse(fs.readFileSync('./arquivos/grupos/countmsg.json'));
const { fetchJson } = require('./arquivos/functions.js');
const nescessario = JSON.parse(fs.readFileSync('./arquivos/nescessario.json'));
const antipv = JSON.parse(fs.readFileSync('./arquivos/antipv.json'))
const muted = JSON.parse(fs.readFileSync('./arquivos/muted.json'))
const { getMembros } = require('./arquivos/functions.js');
const { getBuffer } = require("./arquivos/functions.js")
const startkirito = require("./connection/connection.js")

require("./dono/dono.js")
const { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./arquivos/links_img.json");
const { writeFile } = require('fs/promises')
const { exec, spawn } = require("child_process")
const imagens = JSON.parse(fs.readFileSync('./dono/logo.json'))
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const totalcmd = "195"
async function StartBot() { 
let md = await startkirito()

function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}
//api

//os comandos de plays só irão funcionar com a key, entre em contato cmg para adquirir a Key.

const API_SANDRO_MD = "suakey"

const SANDRO_API = "suakey"

const marcadagua  =  "𝐊𝐈𝐑𝐈𝐓𝐎 𝐁𝐎𝐓"

global.pp_bot = ("https://telegra.ph/file/692535d451712509dc63d.jpg") //FOTO BOT

global.fakelink = "https://chat.whatsapp.com/ExCKNRkLlFgKZkCZDX2nIA" // LINK DO SEU GRUPO
//
global.link = "https://whatsapp.com/channel/0029VaGTuH1EQIafHui0kU1d"

global.linkcanal = "https://youtube.com/@sandro_mg1?si=RxEyRbfrQdoIqy_8"

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

const { 
getExtension, Random, 
getFileBuffer,
} = require("./arquivos/browser/get.js")

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// Cores Dos consoles
gren = chalk.hex("#10b911").italic
rose = chalk.hex("#a519c8").italic
rosa = chalk.hex("#ec3185").italic
azul = chalk.hex("#23ddf1").italic
verde = chalk.hex("#36f972").italic
branco = chalk.hex("#ffffff").italic

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

md.ev.on('messages.upsert', async m => {

const info = m.messages[0]
if(!info.key.fromMe);
if(!info.message) return; 
if(!'status@broadcast') return;
const type = Object.keys(info.message)[0]
// ======[ JS-MENUS/INFORMAÇÕES ]====== \\
const content = JSON.stringify(info.message);

const { menu } = require('./dono/menus.js');
const { menucompleto } = require('./dono/menus.js');
const { donoo } = require('./dono/menus.js');
const { menualternadores } = require('./dono/menus.js');
const { criadorr } = require('./dono/criador.js');
const { menujogos } = require('./dono/menus.js')
const { menulogos } = require('./dono/menus.js')
const { alternadores } = require('./dono/menus.js');;
const { menudono } = require('./dono/menus.js');
const { menufigu } = require('./dono/menus.js');
const { comunidade } = require('./dono/menus.js');
const { menudownload } = require('./dono/menus.js');
const { menuwallpaper } = require('./dono/menus.js');
const { menuadm } = require('./dono/menus.js');

const body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

const budy =
(type === 'conversation') ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""               

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const dualNumber = "27691145788"
const isBot = info.key.fromMe ? true : false;
const from = info.key.remoteJid 
const isCmd = body.startsWith(prefix)
const bot2 = `${dualNumber}@s.whatsapp.net`
const criador = `${donoNumber}@s.whatsapp.net`
const isGroup = from.endsWith("@g.us")
const sender = isGroup ? info.key.participant: from
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const botNumber = await md.user.id.split(':')[0]+'@s.whatsapp.net';
const pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await md.groupMetadata(from): ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const args = body.trim().split(/ +/).splice(1)
const q = args.join(' ')
const participants = isGroup ? await groupMetadata.participants : ''
const numeroBot = md.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const IsFoto = info.message.imageMessage? true: false
const IsQuoted = info.message.extendedTextMessage? info.message.extendedTextMessage.matchedText? false : info.message.extendedTextMessage.contextInfo.quotedMessage? true : false : false 
const IsVideo = info.message.videoMessage? true: false
mQuotedMsg = IsQuoted? info.message.extendedTextMessage.contextInfo.quotedMessage : null
const IsQuotedImg = IsQuoted?  mQuotedMsg.imageMessage? true : false : false
const IsQuotedVid = IsQuoted?  mQuotedMsg.videoMessage? true : false : false
const isGroupAdmins = groupAdmins.includes(sender) || false || donoNumber
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false	
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAutop = (autop.indexOf('Ativado') >= 0) ? true : false	
const isPremium = premium.includes(sender)
const IS_DELETE = nescessario.Odelete
const somembros = isGroup ? getMembros(groupMembers) : ''


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? md.sendMessage(from, {text: teks.trim(), mentions: memberr}) : md.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
md.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: info}) 
}

const sendPoll = (sabrina, id, name = '', values = [], selectableCount = 1) => { 
return sabrina.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: sabrina?.user?.id}}).catch(() => {
return console.log(console.error);
});
}

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

///////////////////
//=================> Funções de Grupo 🥋

const dirGroup = `./arquivos/grupos/activation_gp/${from}.json`

const nescj = "./arquivos/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
    name: groupName,
    groupId: from, 
    x9: false, 
    antiimg: false, 
    antivideo: false,
    antiaudio: false, 
    antisticker: false,
    antidoc: false,
    antictt: false,
    antiloc: false, 
    antilinkgp: false,
    antilinkhard: false, 
    antifake: false, 
    antiporn: false,
    Odelete: false, 
    antispam: false, 
    antinotas: false, 
    anticatalogo: false, 
    visuUnica: false, 
    registrarFIGUS: false, 
    soadm: false, 
    listanegra: [], 
    advertir: [], 
    advertir2: [], 
    legenda_estrangeiro: "0",
    legenda_documento: "0", 
    legenda_video: "0",
    legenda_imagem: "0", 
    multiprefix: false, 
    forca_ofc: [{
        acertos: 0, 
        erros: 0, 
        palavra: [], 
        escreveu: [], 
        palavra_ofc: 0, 
        dica: 0, 
        tema: 0
      }], 
    ausentes: [], 
    forca_inc: false,  
    antipalavrao: {
        active: false,
        palavras: []
     },
     limitec: {
        active: false,
        quantidade: null
     },
    wellcome: [{
        bemvindo1: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
      },
      {
        bemvindo2: false,
        legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
        legendasaiu: 0
      }],
    simi1: false, 
    simi2: false,
    autosticker: false, 
    autoresposta: false,
    jogos: false, 
    level: false,
    bangp: false, 
    nsfw: false,
    aluguel: true
}]
    fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//////////////////////////////////////////
const So_Adm = isGroup ? dataGp[0].soadm : undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined
//////////////////////////////////////////

const isBotao = true

//============(VERIFICADOS)============\\

const sabLive = {key: {participant: '0@s.whatsapp.net'}, message: {liveLocationMessage: {caption: `Usuário: ${pushname}`}}} 

const sabPhoto = {key: {participant : '0@s.whatsapp.net'}, message: {imageMessage: {caption: pushname}}}

const sabVideo = {key: {participant : '0@s.whatsapp.net'},message: {videoMessage: {caption: pushname}}}

const sabContact = {key: {participant : '0@s.whatsapp.net'},message: {contactMessage: {displayName: `${pushname}`}}}

const sabDocument = {key: {participant : '0@s.whatsapp.net'}, message: {documentMessage: {caption: pushname}}} 


//============================

const sender_ou_n = q.includes("@") ? menc_jid : sender

md.readMessages([info.key])
const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return md.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Hm erro...");
})
}

const getFileDownload = async(mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const getRandom =  (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const {default: makeWASocket,DisconnectReason,useSingleFileAuthState,downloadContentFromMessage } = require ('@adiwajshing/baileys')

// ENVIA GIFS
const enviargif = (videoDir, caption) => {
md.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption, 
gifPlayback: true
})
}
// ENVIA IMAGENS
const enviarImg = (imageDir, caption) => {
md.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}
// ENVIAR FIGURINHAS 
const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
md.sendMessage(from, {sticker: bla}, {quoted: info})
}
// PARA CASE DE FIGURINHA 
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

donoName = global.donoName
botName = global.botName
donoNumber = global.donoNumber
prefix = global.prefix


const moment = require('moment-timezone');
// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'ʙᴏᴀ ᴍᴀᴅʀᴜɢᴀᴅᴀ 🌒'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'ʙᴏᴀ ᴅɪᴀ 🌕'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'ʙᴏᴀ ᴛᴀʀᴅᴇ 🌗'
} if(time2 > "18:00:00"){
var tempo = 'ʙᴏᴀ ɴᴏɪᴛᴇ 🌑'
}


var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

//////
if(isGroup && isCmd && So_Adm && !isGroupAdmins) return
//////

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");


//=========(isQuoted/consts)=============\\
const isSender = sender
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
reply(`🐤😡 *Você deu um piu?* - Agora prepare-se para o seu julgamento!`)
setTimeout(async () => {
    md.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
return
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
md.sendMessage(idgp, reactionMessage)
}         

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

//====(CONTADOR-DE-MENSAGENS)=======\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./arquivos/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//========CONSOLE========\\
const { color, bgcolor } = require('./database/impor/color')

const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'

if(!isGroup && isCmd)
console.log(`
${branco(`[ ❗️ COMANDO NO PRIVADO️ ❗ ]`)}
${branco(`[ 👤 ] NOME:`,rose(`${pushname}`))}
${branco(`[ 🤖 ] COMANDO:`,branco(`${command}`))}`)

if(isGroup && isCmd)
console.log(`
${branco(`[ ️❗️ COMANDO EM GRUPO ❗️️ ]`)}
${branco(`[ 👥️ ] GRUPO:`,branco(`${groupName}`))}
${branco(`[ 👤 ] NOME:`,branco(`${pushname}`))}
${branco(`[ 🤖 ] COMANDO:`,branco(`${command}`))}`)

if(!isCmd && !isGroup)
console.log(`
${branco(`[ 💬 MENSAGEM NO PRIVADO 💬 ]`)}
${branco(`[ 👤 ] NOME:`,branco(`${pushname}`))}
${branco(`[ 💭 ] MENSAGEM:`,branco(`${budy}`))}`)

if(isGroup && !isCmd) 
console.log(`
${branco(`[ 💬 MENSAGEM EM GRUPO 💬 ]`)}
${branco(`[ 👥️ ] GRUPO:`,branco(`${groupName}`))}
${branco(`[ 👤 ] NOME:`,branco(`${pushname}`))}
${branco(`[ 💭 ] MENSAGEM:`,branco(`${budy}`))}`)

const waMenu2 = async (johnzixs, linkimgwas, tewas, lkwas) =>{
try{
mimis = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
md.sendMessage(johnzixs, {document: fs.readFileSync('./database/documento/gilli.pptx'),fileName: ` ᴡᴀɴᴅɪɴʜᴀ`,
mimetype: mimis,
fileLength: 999999 * 999999, 
caption: tewas,
contextInfo: {
externalAdReply: {
title: ` ᴡᴀɴᴅɪɴʜᴀ ᴅᴏᴍɪɴᴀ`,
body: "",
mediaType: 1,
renderLargerThumbnail: false,
showAdAttribution: true,
thumbnail: await getBuffer(logo), // SE QUISER COLOCAR SO PUSHA UM fs.readFileSync
body: `ᴡᴀɴᴅɪɴʜᴀ﹣ᴍᴅ ᴄʟɪᴄᴋ ɴᴀ ↦🌴`,
sourceUrl: lkwas 
}}},{quoted: info})
}catch(e){
  reply("deu erro aqui" + e)
}
}
//============================
msg = {
espera: "_agurde um momento por favor_",
}

//
msg = {
registro: "_[❗] Para ver o menu você precisa se registrar use /login_",
botadm: "[❗] bot precisa ser adm",
aguarde: "[❗] aguarde uns minutinho estou processado👨‍🦯",
dono: "[❗] este comando so podera ser usado pelo meu dono💣",
grupo: "[❗] este comando so pode ser usado em grupo🫂",
private: "[❗] este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*",
adm: "este comando so pode ser usado por um adm",
botadm: "[❗] bot precisa ser adm pra executar esse comando",
erro: "[❗] ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "[❗] Esse comando so pode ser usado pelo meu dono!!!",
abrindomenu: "_[❗]Carregando menu aguarde..._",
}

try {
switch(command) {

//dono

case 'hydra': {
if(!isPremium) return reply("apenas usuários que o nazax permite podem usar esses comandos")
let teks = `\n\nOlá Membros da Hydra o ${pushname} chama vocês\n\n${q ? q : '*VAMOS CAÇAR!!*'}*\n\n`
for (let mem of groupMembers) {
teks += ` @${mem.id.split('@')[0]}\n`
}
md.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}
break

case 'revz': {
if(!isPremium) return reply("apenas usuários que o nazax permite podem usar esses comandos")
let teks = `\n\nOlá randons o ${pushname} chama vocês\n\n${q ? q : '*ajoelhe-se perante a hydra!*'}*\n\n`
for (let mem of groupMembers) {
teks += ` @${mem.id.split('@')[0]}\n`
}
md.sendMessage(from, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: info })
}
break

case 'add':
await md.groupParticipantsUpdate(from, [bot2], "add")
reply("adicionei uiui")
break

case 'blockspam':
if (!isBot && !isCreator) return reply("apenas nazax")
if (!id) return md.sendMessage(from, {
text: '\n\n qual a quantidade de block ? \n      exemplo: .blockspam 5 \n\n'})
for (let i = `${q}`; i !== 0; i -= 1) {
md.updateBlockStatus(from, 'block')
md.updateBlockStatus(from, 'unblock')}
break

case 'reiniciar':
if(!isCreator) return reply("esse comando e exclusivo para meu dono")
reply("Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!")
setTimeout(async() => {process.exit()}, 1200)
break

case 'varredura':
reply("Pronto nazax coletei o número de todos os membros desse grupo, estarei enviando ao seu pv")

case 'promover': 
if(!isGroupAdmins) return reply("você não e adm")
if(!isBotGroupAdmins) return reply("bot precisa ser adm")
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
md.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
md.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply("você não e adm")
if(!isBotGroupAdmins) return reply("bot precisa ser adm")
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
md.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
md.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'nuke':
if(!isBotGroupAdmins) return reply("sem adm?")
if(!isPremium) return reply("apenas usuários que o nazax permite podem usar esses comandos")

if(!isModobn) return reply(`nuke não está permitido nesse grupo, peça para que meu mestre nazax ative`) 
md.groupUpdateSubject(from, `ARQUIVADO: BY PODEROSA HYDRA!`) 
    md.groupUpdateDescription(from, `Hydra é o Fim:

 HYDRA tem tolerância zero a grupo random, esse grupo quebra as leis da HYDRA, por isso sera eliminado da existência.
 
*[ JULGAMENTO DIVINO]*`)                        

await sleep(200)

reply(`vocês serão jugados pela *HYDRA*, esse grupo sera arquivado por competência dos adm, e vontade da *HYDRA* migrem pra um verdadeiro grupo`)

reply("`Chat - Hydra:` [https://chat.whatsapp.com/BvIH71pX7dzF8sRv9RskeI]")

await sleep(1000)


    array_fake = [];
    for (let a of groupMembers) {
        if (a.id !== numeroBot) {
            array_fake.push(a.id);
        }
    }
    if (array_fake.length === 0) return reply("Todos os seres inúteis foram removido. ");
    
    for (let a of array_fake) {
        await sleep(100);
        md.groupParticipantsUpdate(from, [a], 'remove');
    }
  
  dataGp[0].antilinkgp = false
setGp(dataGp)

    teks = `quem perdoa é deus, eu sou uma divindade mas não sinto nenhuma vontade de lês da perdão.`;
    md.sendMessage(from, {
        text: teks, mentions: array_fake
    });
break;

case 'idgp': case 'id':
if (!isCreator) return enviar(`Apenas nazax`)
reply(`id ${from}`)
break                 

case 'bam': 
md.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply("so em grupo")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação Do Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação Do Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do Adm: ${sender.split("@")[0]}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
md.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'ban': 
case 'banir': 
case 'kick': 
case 'avadakedavra':
if(!isGroupAdmins) return reply("você não e adm")
if(!isBotGroupAdmins) return reply("bot precisa ser adm")
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('tem problema?')
if(JSON.stringify(donoNumber).indexOf(menc_os2) >= 0) return reply('acha mesmo que eu vou remover meu criador?')
md.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
md.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

 case 'autop': case 'autoadm':
            if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAutop) return reply('Ja esta ativo')
              autop.push('Ativado')
              fs.writeFileSync('./arquivos/autop.json', JSON.stringify(autop))
              reply('Ativou com sucesso o recurso de auto adm')
            } else if (Number(args[0]) === 0) {
              if (!isAutop) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = autop.indexOf(pesquisar)
              while (processo >= 0) {
                autop.splice(processo, 1)
                processo = autop.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/autop.json', JSON.stringify(autop))
              reply('Desativou com sucesso o recurso auto adm')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break
            

case 'deletar': 
case 'delete': 
case 'del':  
case 'd':
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.")
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'sairgp':
if (!isCreator) return
reply ("af queria brincar mais um pouco")
await delay(3000)
try {
md.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case '🎀':
if(args.length < 1) return reply('1 / 0')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('ja foi')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('`>🎀ATIVADO🎀<`')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('`>🎀DESATIVADO🎀<`')
} else {
reply('1 para ativar, 0 para desativar')
}
break


//========COMANDOS COM PREFIXO


          case 'antipv':
            if (!isCreator) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAntiPv) return reply('Ja esta ativo')
              antipv.push('Ativado')
              fs.writeFileSync('./arquivos/antipv.json', JSON.stringify(antipv))
              reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
            } else if (Number(args[0]) === 0) {
              if (!isAntiPv) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = antipv.indexOf(pesquisar)
              while (processo >= 0) {
                antipv.splice(processo, 1)
                processo = antipv.indexOf(pesquisar)
              }
              fs.writeFileSync('./arquivos/antipv.json', JSON.stringify(antipv))
              reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break

case 'mudarbio': {
     if (!isCreator) return reply(`Apenas dono jumento!`)
    if (!q) return reply('Por favor, forneça a nova bio.');
    try {
        // Muda a bio do número do bot
        await md.updateProfileStatus(q);
        reply(`Bio atualizada com sucesso para: ${q}`);
    } catch (error) {
        console.error(error);
        reply('Houve um erro ao tentar atualizar a bio.');
    }
    break;
}

//apis plays

case 'idgp':
if (!isCreator) return enviar(`Apenas dono`)
reply(`ID DO GRUPO E ${from}`)
break

case 'mudarbio': {
     if (!isCreator) return enviar(`Apenas dono`)
    if (!q) return reply('Por favor, forneça a nova bio.');
    try {
        // Muda a bio do número do bot
        await md.updateProfileStatus(q);
        reply(`Bio atualizada com sucesso para: ${q}`);
    } catch (error) {
        console.error(error);
        reply('Houve um erro ao tentar atualizar a bio.');
    }
    break;
}


case "grupo":
if(!isGroupAdmins) return reply("você não e adm")
if(!isBotGroupAdmins) return reply("bot precisa ser adm")
try {
if (q == "a") {
await md.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await md.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break


//===========(CMD-FIGURINHAS)=========\\

break;

case 's':

{
(async function () {
var legenda = q ? q?.split("/")[0] : `╼⊳⊰ Solicitado Por:
╼⊳⊰ Bot:
╼⊳⊰ Dono:`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${botName}
${donoName}`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
md.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
md.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

//alternadores

case 'listavip': case 'deuses': case 'godlist':
if(!isCreator) return reply(msg.dono)   
if(!isPremium) return reply(msg.premium)   
tkks = '╭────*「 _DEUSES_ 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 _${botName}_ 」*────`
reply(tkks.trim())
break

case 'nazax':  
if (!isBot && !isCreator) return reply("obedeço apenas ao mestre nazax, você acha que um ser insignificante como você é capaz de me da ordens?")
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('Grupo ja pode ser eliminado.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('Grupo ja está protegido')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso.')
reply('Esse grupo não pode ser nukado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'deus':
if (!isBot && !isCreator) return
if(args.length < 1) return
if(Number(args[0]) === 1) {
if(isModobn) return
dataGp[0].jogos = true
setGp(dataGp)
} else if(Number(args[0]) === 0) {
if(!isModobn) return
dataGp[0].jogos = false
setGp(dataGp)
} else {
}
break

//alternadores

case 'adddeus': case 'addvip': case 'permision': 
if (!isBot && !isCreator) return reply("obedeço apenas ao mestre nazax, você acha que um ser insignificante como você é capaz de me da ordens?")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./arquivos/vip/premium.json', JSON.stringify(premium))
susp = ` Permissão concedida, agora o @${mentioned[0].split('@')[0]} pode usar o nuke"`
mentions(`${susp}`, mentioned, true)   
break 

case 'serdeus': case 'servip':
if (!isBot && !isCreator) return reply("obedeço apenas ao mestre nazax, você acha que um ser insignificante como você é capaz de me da ordens?")
premium.push(`${donoNumber}@s.whatsapp.net`)
fs.writeFileSync('./arquivos/vip/premium.json', JSON.stringify(premium))
reply(`Pronto Nazax você agora se tornou-se Deus.`)
break

          case 'limpar':
if (!isBot && !isCreator) return reply("obedeço apenas ao mestre nazax, você acha que um ser insignificante como você é capaz de me da ordens?")

reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')

await sleep(2000)
reply("toda a inveja foi limpa mestre nazax.")
            break

case 'verificar':
if(!isPremium) return reply("você não é um deus, não se ache alguém randola")
reply("Oque deseja minha divindade?")
break

case 'ant': case 'negar': case 'antjudas':
if (!isBot && !isCreator) return reply("obedeço apenas ao mestre nazax, você acha que um ser insignificante como você é capaz de me da ordens?")
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("mas nazax esse cara aí não ta incluso")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/vip/premium.json', JSON.stringify(premium))
md.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("mas nazax esse cara aí não ta incluso")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/vip/premium.json', JSON.stringify(premium))
md.sendMessage(from, {text: ` @${mentioned.split("@")[0]} você foi removido dos céus e não é mais um Deus, não é mas capaz de me da ordens.`}, {quoted: info})
}
break

case "ppt":
if(!isModobn) return reply(`o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`)  
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n-\n${tes}`)
break

case 'calcular':  
if(!q.trim()) return reply(`- Exemplo: ${prefix}calcular 1+1`)
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

          case "imgpralink":
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage: info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, {
                    filename: 'image.jpg'
                  });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
            
          case 'videopralink':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, {
                    filename: 'media'
                  });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
 

default:


//cmd sem prefixo



//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !isCreator){
reply(`_Ola Sandro nao estou autorizado a responder mensagem no privado, por tanto irei te bloquear, caso queira usar o bot entra no GP

https://chat.whatsapp.com/ExCKNRkLlFgKZkCZDX2nIA`)
setTimeout(async () => {
md.updateBlockStatus(sender, 'block')
}, 1000)
return
}
//======================================\\

//====

//if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins)


if(isAntilinkgp && isGroup) {
if(Procurar_String.includes("chat.whatsapp.com/")){
link_dgp = await md.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
md.groupParticipantsUpdate(from, [sender], 'remove')
}
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return md.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
md.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
md.groupParticipantsUpdate(from, [sender], 'remove')
}

////
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return md.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
md.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
md.groupParticipantsUpdate(from, [sender], 'remove')
}
//+++
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return md.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
md.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
} else {
md.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
md.groupParticipantsUpdate(from, [sender], 'remove')
}
//+++
if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return md.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
md.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
md.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return md.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
md.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
md.groupParticipantsUpdate(from, [sender], 'remove')
}

//==

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
md.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
md.sendMessage(from,px)
}}}
//++

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await md.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
md.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
md.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
md.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
md.groupParticipantsUpdate(from, [sender], 'remove')
}

///
if(isAutorepo) {
setTimeout(async () => {
md.sendMessage(from, {react: {text: `🎀`, key: info.key}})
}, 1000)
return
}

if(isAutop){
setTimeout(async () => {
md.groupParticipantsUpdate(from, [criador], "promote")
md.groupParticipantsUpdate(from, [bot2], "promote")
}, 1000)
return
}

///
if(isCmd) {
reply("Que?")
}

if (budy.includes('prefixo') || (budy.includes('Prefixo'))){
reply(`"${prefix}"`)
}

if(isAutorepo) {
if (budy.includes("Kirito") || (budy.includes("kirito"))){
reply("Eaii mn tranquilo?")
}

if (budy.includes("Link do grupo") || (budy.includes("link do grupo"))){
reply("GP OFICIAL DO BOT https://chat.whatsapp.com/ExCKNRkLlFgKZkCZDX2nIA")
}
}

{
}
//proteção 



}} catch(e) {console.log(e); return reply(e)}})}; StartBot()


  