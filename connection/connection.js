
const fs = require('fs')
const P = require('pino')
let pino = require('pino')
const NodeCache = require('node-cache')
const PhoneNumber = require('awesome-phonenumber')
const chalk = require('chalk');
const readline = require('readline')
const cfonts = require('cfonts')
const moment = require('moment-timezone');
const colors = require("colors");

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

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };


const usePairingCode = process.argv.includes('--use-pairing-code')
const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
async function startkirito() {
        const { state, saveCreds } = await useMultiFileAuthState('./arquivos/qr-code')
        const { version } = await fetchLatestBaileysVersion();
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        const store = makeInMemoryStore({
            logger: P().child({
                level: 'debug',
                stream: 'store'
            })
        })


        const md = makeWASocket({
            version,
            logger: P({ level: "silent" }),
            usePairingCode,
            mobile: false,
            browser: ["FireFox (linux)"],
            auth: state,
            msgRetryCounterCache,
            defaultQueryTimeoutMs: undefined,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id)
                    return msg.message || undefined
                } return {
                    conversation: "bot"
                }
            },
      patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message?.interactiveMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      }
        });

        function limparNumero(entrada) {
            const numeros = entrada.replace(/\D/g, '');
            const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
            return numeroLimpo;
        }

        if (!md.authState.creds.registered) {
            const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ("553172595934")\n `);
            const numeroLimpo = limparNumero(phoneNumber);
            const code = await md.requestPairingCode(numeroLimpo);
            console.log(`Seu código de conexão é: \n\n${code}\n~>`);
            console.log(`Abra seu WhatsApp, vá em ("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")`)
        } else {
            console.log(                     'Conectado...')
        }

const banner = cfonts.render(("KIRITO|BOT"), {
font: "simple",
align: "center",
colors: [`red`,`white`,`red`],
})

        console.log('[ KIRITO-BOT ]')
        store.bind(md.ev)

        md.ev.on("creds.update", saveCreds)
        store.bind(md.ev)
        md.ev.on("chats.set", () => {
            console.log("Tem conversas", store.chats.all())
        })
        md.ev.on("contacts.set", () => {
            console.log("Tem contatos", Object.values(store.contacts))
        })

        md.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
                if (shouldReconnect) {
                    starts()                    
                }

} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${botName} [ Conectado com sucesso ]`,'red')}`)
}
})
        async function getMessage(key) {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg?.message
            }
            return {
                conversation: "aaa"
            }
        }


return md 
}

//reiniciar o bot quando edirar
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono/menus.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O Menu foi editada, irei reiniciar...');
process.exit()
}
})

module.exports = startkirito;
//================================================\\