
const menu = (pushName, prefix, botName, totalcmd, sender) => {
return `
╭━━•ೋೋ•━━╮
${prefix}comprarbot
╰━━•ೋೋ•━━╯
╭━━•ೋೋ•━━╮
        ${botName}   
╰━━•ೋೋ•━━╯

╭━━『INFO USER』
├⪧Ola: ${pushName}
├⪧Número: ${sender.split("@")[0]}
╰━━『INFO USER』

${prefix}report (reclamação)

╭━━ 『MENUS』
├⪧${prefix}menucompleto
├⪧${prefix}menuadm
├⪧${prefix}menudownload
├⪧${prefix}menufigu
├⪧${prefix}menudono
├⪧${prefix}menujogos
├⪧${prefix}menulogos
├⪧${prefix}menualternadores
├⪧${prefix}menuwallpaper
├⪧${prefix}menuadmb
╰────────────────────
╭━━ 『🌠』MENU BÁSICO『🌠』
├⪧${prefix}imgpralimk (marca-foto)
├⪧${prefix}Pinterest (gato)
├⪧${prefix}moedas
├⪧${prefix}infodono
├⪧${prefix}metadinha
├⪧${prefix}signo (libra)
├⪧${prefix}dono
├⪧${prefix}ping
├⪧${prefix}criador
├⪧${prefix}comunidade
├⪧${prefix}doar
╰────────────────────
╭━━ 『▶️』DOWNLOADS『▶️』
├➧${prefix}play (nome)
├➧${prefix}play2 (nome)
├➧${prefix}playvideo (nome)
├➧${prefix}tiktokaudio (link)
├➧${prefix}tiktok (link)
├➧${prefix}Instagram (link)
├➧${prefix}instaaudio (link)
├➧${prefix}faceaudio (link)
├➧${prefix}Facebook (link)
├➧${prefix}mediafire (link)
╰────────────────────
╭━━ 『🌟』FIGURINHAS『🌟』
├➧${prefix}figurinhas (10)
├➧${prefix}s (foto)
├➧${prefix}attp (txt)
├➧${prefix}attp1 (txt)
├➧${prefix}attp2 (txt)
├➧${prefix}attp3 (txt)
├➧${prefix}attp4 (txt)
├➧${prefix}attp5 (txt)
├➧${prefix}toimg (marca figu)
╰────────────────────
╭━━ 『🔞』+18『🔞』
├➧${prefix}plaq1 (nome)
├➧${prefix}plaq2 (nome)
├➧${prefix}plaq3 (nome)
├➧${prefix}plaq4 (nome)
├➧${prefix}plaq5 (nome)
├➧${prefix}plaq6 (nome)
├➧${prefix}plaq7 (nome)
├➧${prefix}only1
├➧${prefix}only2
├➧${prefix}only3
├➧${prefix}only4
├➧${prefix}only5
├➧${prefix}only6
├➧${prefix}only7
├➧${prefix}only8
├➧${prefix}only9
╰────────────────────`;
};

exports.menu = menu

const menudownload = (pushName, prefix, botName, totalcmd, sender) => {
return `
╭━━ 『▶️』DOWNLOADS『▶️』
├➧${prefix}play (nome)
├➧${prefix}play2 (nome)
├➧${prefix}playvideo (nome)
├➧${prefix}tiktokaudio (link)
├➧${prefix}tiktok (link)
├➧${prefix}Instagram (link)
├➧${prefix}instaaudio (link)
├➧${prefix}faceaudio (link)
├➧${prefix}Facebook (link)
├➧${prefix}mediafire (link)
╰────────────────────`;
};

exports.menudownload = menudownload

const menuwallpaper = (pushName, prefix, botName, totalcmd, sender) => {
return `
╭━━ 『💌』WALLPAPER『💌』
├➧${prefix}wallpaperverde
├➧${prefix}wallpapers4k
╰────────────────────`;
};

exports.menuwallpaper = menuwallpaper

const menuadm = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola Adm ${pushName}_❤️

ativação por botão💌
${prefix}menuadmb
${prefix}menuadmb0

╭━━ 『🙅‍♂️』MENU ADM『🙅‍♂️』
├➧${prefix}ban (@)
├➧${prefix}rebaixar (@)
├➧${prefix}promover (@)
├➧${prefix}descgp (txt)
├➧${prefix}nomegp (nome)
├➧${prefix}So_adm (1/0)
├➧${prefix}x9visuunica (1/0)
├➧${prefix}mute (@)
├➧${prefix}deletar (marca msg)
├➧${prefix}desmute (@)
├➧${prefix}check (@)
├➧${prefix}idgp
├➧${prefix}infogp
├➧${prefix}banfake
├➧${prefix}resetarlink
├➧${prefix}marcar
├➧${prefix}listabr
├➧${prefix}atividades
╰────────────────────
╭━━ 『‼️』PROTECAO『‼️』
├➧${prefix}antilinlgp 1/0
├➧${prefix}antilink 1/0
├➧${prefix}antictt 1/0
├➧${prefix}antidoc 1/0
├➧${prefix}antiaudio 1/0
├➧${prefix}antisticker 1/0
├➧${prefix}antivideo 1/0
├➧${prefix}antiimg 1/0
╰────────────────────`;
};

exports.menuadm = menuadm


const menufigu = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola ${pushName}_❤️

╭━━ 『🌟』FIGURINHAS『🌟』
├➧${prefix}figurinhas (10)
├➧${prefix}s (foto)
├➧${prefix}attp (txt)
├➧${prefix}attp1 (txt)
├➧${prefix}attp2 (txt)
├➧${prefix}attp3 (txt)
├➧${prefix}attp4 (txt)
├➧${prefix}attp5 (txt)
├➧${prefix}toimg (marca figu)
╰────────────────────`;
};

exports.menufigu = menufigu

const menudono = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

╭━━ 『👀』DONO『👀』
├➧${prefix}reiniciar
├➧${prefix}mudarbio (nome)
├➧${prefix}antipv (1/0)
├➧${prefix}listavip
├➧${prefix}sairgp (tirar bot do gp)
├➧${prefix}servip
├➧${prefix}addvip (@)
├➧${prefix}delvip (@)
├➧${prefix}mudarbio (nome)
╰────────────────────`;
};

exports.menudono = menudono

const menujogos = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola senhor: ${pushName}_

╭━━ 『🕹️』JOGOS『🕹️』
├➧${prefix}gay (@)
├➧${prefix}gostosa (@)
├➧${prefix}gostoso (@)
├➧${prefix}matar (@)
├➧${prefix}baijar (@)
├➧${prefix}tapa (@)
├➧${prefix}chute (@)
├➧${prefix}nazista (@)
├➧${prefix}eununca
├➧${prefix}quando (pergunta)
├➧${prefix}ppt
╰────────────────────`;
};

exports.menujogos = menujogos

const menualternadores = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

╭━━ 『🔊』AITERADORES『🔊』
├➧${prefix}audiolento (marca áudio)
├➧${prefix}esquilo (marca áudio)
├➧${prefix}audiorapido (marca áudio)
├➧${prefix}estourar (marca áudio)
├➧${prefix}bass2 (marca áudio)
├➧${prefix}bass (marca áudio)
├➧${prefix}bass3 (marca áudio)
├➧${prefix}audiolento (marca áudio)
├➧${prefix}graver (marca áudio)
├➧${prefix}graver2 (marca áudio)
├➧${prefix}esquilo (marca áudio)
├➧${prefix}estourar (marca áudio)
├➧${prefix}vozmenino (marca áudio)
├➧${prefix}videorapido (marca video)
├➧${prefix}videolento (marca video)
╰────────────────────`;
};

exports.menualternadores = menualternadores

const menulogos = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

╭━━ 『🖼️』LOGOS『🖼️』
├➧${prefix}hackneon [TXT]
├➧${prefix}fpsmascote [TXT]
├➧${prefix}equipemascote [TXT]
├➧${prefix}txtquadrinhos [TXT]
├➧${prefix}ffavatar [TXT]
├➧${prefix}mascotegame [TXT]
├➧${prefix}angelglx [TXT]
├➧${prefix}gizquadro [TXT]
├➧${prefix}wingeffect [TXT]
├➧${prefix}blackpink [TXT]
├➧${prefix}girlmascote [TXT]
├➧${prefix}logogame [TXT]
├➧${prefix}cria [TXT] 
├➧${prefix}anime1 [TXT]
├➧${prefix}ff1 [TXT]
├➧${prefix}game [TXT]
├➧${prefix}ff2 [TXT]
├➧${prefix}anime2 [TXT]
├➧${prefix}entardecer [TXT]
├➧${prefix}indian [TXT]
╰────────────────────`;
};

exports.menulogos = menulogos

const menucompleto = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

╭━━ 『▶️』DOWNLOADS『▶️』
├➧${prefix}play (nome)
├➧${prefix}play2 (nome)
├➧${prefix}playvideo (nome)
├➧${prefix}tiktokaudio (link)
├➧${prefix}tiktok (link)
├➧${prefix}Instagram (link)
├➧${prefix}instaaudio (link)
├➧${prefix}faceaudio (link)
├➧${prefix}Facebook (link)
├➧${prefix}mediafire (link)
╰────────────────────
╭━━ 『🙅‍♂️』MENU ADM『🙅‍♂️』
├➧${prefix}ban (@)
├➧${prefix}rebaixar (@)
├➧${prefix}promover (@)
├➧${prefix}descgp (txt)
├➧${prefix}nomegp (nome)
├➧${prefix}So_adm (1/0)
├➧${prefix}x9visuunica (1/0)
├➧${prefix}mute (@)
├➧${prefix}deletar (marca msg)
├➧${prefix}desmute (@)
├➧${prefix}check (@)
├➧${prefix}idgp
├➧${prefix}infogp
├➧${prefix}banfake
├➧${prefix}resetarlink
├➧${prefix}marcar
├➧${prefix}listabr
├➧${prefix}atividades
╰────────────────────
╭━━ 『‼️』PROTECAO『‼️』
├➧${prefix}antilinlgp 1/0
├➧${prefix}antilink 1/0
├➧${prefix}antictt 1/0
├➧${prefix}antidoc 1/0
├➧${prefix}antiaudio 1/0
├➧${prefix}antisticker 1/0
├➧${prefix}antivideo 1/0
├➧${prefix}antiimg 1/0
╰────────────────────
╭━━ 『🌟』FIGURINHAS『🌟』
├➧${prefix}figurinhas (10)
├➧${prefix}s (foto)
├➧${prefix}attp (txt)
├➧${prefix}attp1 (txt)
├➧${prefix}attp2 (txt)
├➧${prefix}attp3 (txt)
├➧${prefix}attp4 (txt)
├➧${prefix}attp5 (txt)
├➧${prefix}toimg (marca figu)
╰────────────────────
╭━━ 『👀』DONO『👀』
├➧${prefix}reiniciar
├➧${prefix}mudarbio (nome)
├➧${prefix}antipv (1/0)
├➧${prefix}listavip
├➧${prefix}sairgp (tirar bot do gp)
├➧${prefix}servip
├➧${prefix}addvip (@)
├➧${prefix}delvip (@)
├➧${prefix}mudarbio (nome)
╰────────────────────
╭━━ 『🕹️』JOGOS『🕹️』
├➧${prefix}gay (@)
├➧${prefix}gostosa (@)
├➧${prefix}gostoso (@)
├➧${prefix}matar (@)
├➧${prefix}baijar (@)
├➧${prefix}tapa (@)
├➧${prefix}chute (@)
├➧${prefix}nazista (@)
├➧${prefix}eununca
├➧${prefix}quando (pergunta)
├➧${prefix}ppt
╰────────────────────
╭━━ 『🔊』AITERADORES『🔊』
├➧${prefix}audiolento (marca áudio)
├➧${prefix}esquilo (marca áudio)
├➧${prefix}audiorapido (marca áudio)
├➧${prefix}estourar (marca áudio)
├➧${prefix}bass2 (marca áudio)
├➧${prefix}bass (marca áudio)
├➧${prefix}bass3 (marca áudio)
├➧${prefix}audiolento (marca áudio)
├➧${prefix}graver (marca áudio)
├➧${prefix}graver2 (marca áudio)
├➧${prefix}esquilo (marca áudio)
├➧${prefix}estourar (marca áudio)
├➧${prefix}vozmenino (marca áudio)
├➧${prefix}videorapido (marca video)
├➧${prefix}videolento (marca video)
╰────────────────────
╭━━ 『🖼️』LOGOS『🖼️』
├➧${prefix}hackneon [TXT]
├➧${prefix}fpsmascote [TXT]
├➧${prefix}equipemascote [TXT]
├➧${prefix}txtquadrinhos [TXT]
├➧${prefix}ffavatar [TXT]
├➧${prefix}mascotegame [TXT]
├➧${prefix}angelglx [TXT]
├➧${prefix}gizquadro [TXT]
├➧${prefix}wingeffect [TXT]
├➧${prefix}blackpink [TXT]
├➧${prefix}girlmascote [TXT]
├➧${prefix}logogame [TXT]
├➧${prefix}cria [TXT] 
├➧${prefix}anime1 [TXT]
├➧${prefix}ff1 [TXT]
├➧${prefix}game [TXT]
├➧${prefix}ff2 [TXT]
├➧${prefix}anime2 [TXT]
├➧${prefix}entardecer [TXT]
├➧${prefix}indian [TXT]
╰────────────────────
╭━━ 『🔞』+18『🔞』
├➧${prefix}plaq1 (nome)
├➧${prefix}plaq2 (nome)
├➧${prefix}plaq3 (nome)
├➧${prefix}plaq4 (nome)
├➧${prefix}plaq5 (nome)
├➧${prefix}plaq6 (nome)
├➧${prefix}plaq7 (nome)
├➧${prefix}only1
├➧${prefix}only2
├➧${prefix}only3
├➧${prefix}only4
├➧${prefix}only5
├➧${prefix}only6
├➧${prefix}only7
├➧${prefix}only8
├➧${prefix}only9
╰────────────────────`;
};

exports.menucompleto = menucompleto

const comunidade = (pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

*Faça parte da comunidade e fique por dentro de todas as atualizações dos bots do sandro* ❤️`;
};

exports.comunidade = comunidade

const donoo = (donoName, donoNumber, pushName, prefix, botName, totalcmd, sender) => {
return `
_Ola: ${pushName}_

nome: ${donoName}
número: ${donoNumber}`;
};

exports.donoo = donoo