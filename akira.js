/*
Assalamualaikum Kak Aku Kirbotz
Makasih Yah Dah Pake Sc Nya
Btw Nih Base Ori KirBotz
Aku Gak Minta Apa Apa Kok
Cuman Minta Subrek Doankππ­
Makasih Yang Udah Support

BIG TQTO
π² KirBotz ( NEWBI & ORI BASE & ORI SC )
π² Arifi Razzaq ( MASTAH )
π² Dhani Gans ( MASTAH )
π² Febriansyah ( MASTAH )

# TAMBAH BOLEH HAPUS/GANTI JANGAN
# GAK SEMUA CASE BUATAN GUA
# ADA YANG COPAS DIKIT
# COPAS CASE KASIH TQTO GUA YAH...

KirBotz Store Melayani
Jual Script Bot
Buat Script Bot
Open Murid Bot
Harga?
chat https://wa.me/6287705048235
*/
var 
{
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
} = 
    require('@adiwajshing/baileys')
    var fs = require('fs')
    var moment = require('moment-timezone')
    var { exec, spawn } = require('child_process')
    var qrcode = require('qrcode')
    var ffmpeg = require('fluent-ffmpeg')
    var fetch = require('node-fetch')
    var fs = require('fs-extra')
    var ms = require('parse-ms')
    var axios = require('axios')
    var hx = require('hxz-api')
    var fromBuffer = require('file-type')
    var FormData = require('form-data')
    var speed = require('performance-now')
    var yts = require('yt-search')
    var PhoneNumber = require('awesome-phonenumber')
    var JSDOM = require('jsdom')
    var fetch = require('node-fetch')
    var qs = require('qs')
    var cheerio = require('cheerio')
  
var { color, bgcolor, biocolor, KirLog } = require('./KIR1/color')
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./KIR1/functions')
var { fetchJson } = require('./KIR1/krbtz')
var { yta } = require('./KIR1/ytdl')

var _scommand = JSON.parse(fs.readFileSync('./KIR2/scommand.json'))
var antilink = JSON.parse(fs.readFileSync('./KIR2/antilink.json'))
var welkom = JSON.parse(fs.readFileSync('./KIR2/welcome.json'))

var kirrfake = fs.readFileSync('./KIR4/kirbotz1.jpg')
var kirrfoto = fs.readFileSync('./KIR4/kirbotz2.jpg')
var kirrtod = fs.readFileSync('./KIR4/kirbotz3.jpg')

var editkirtod = JSON.parse(fs.readFileSync('./editdisini.json'))

ownerName = editkirtod.NamaOwner
ownerNumber = editkirtod.NomorOwner
owner = editkirtod.NomorOwner2
lolkey = editkirtod.LolKeyy
api = editkirtod.apiweb
api2 = editkirtod.apiweb2
api3 = editkirtod.apiweb3
api4 = editkirtod.apiweb4
api5 = editkirtod.apiweb5
api6 = editkirtod.apiweb6

KirSelfPublic = false

var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ₯ππ¦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ­ππ§π '
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ ππ¨π«π'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ ππ’ππ§π '
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ π’'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ₯ππ¦'
}

module.exports = KirBotz = async (KirBotz, todd) => {
	   try {
       if (!todd.hasNewMessage) return
       todd = todd.messages.all()[0]
	   if (!todd.message) return
	   if (todd.key && todd.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   todd.message = (Object.keys(todd.message)[0] === 'ephemeralMessage') ? todd.message.ephemeralMessage.message : todd.message
	   var { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
       var content = JSON.stringify(todd.message)
	   var from = todd.key.remoteJid
	   var type = Object.keys(todd.message)[0]
       var cmd = (type === 'conversation' && todd.message.conversation) ? todd.message.conversation : (type == 'imageMessage') && todd.message.imageMessage.caption ? todd.message.imageMessage.caption : (type == 'videoMessage') && todd.message.videoMessage.caption ? todd.message.videoMessage.caption : (type == 'extendedTextMessage') && todd.message.extendedTextMessage.text ? todd.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[Β°β’ΟΓ·ΓΒΆβΒ£Β’β¬Β₯Β?β’=|~!#$%^&.?/\\Β©^z+*@,;]/.test(cmd) ? cmd.match(/^[Β°β’ΟΓ·ΓΒΆβΒ£Β’β¬Β₯Β?β’=|~!#$%^&.?/\\Β©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && todd.message.conversation.startsWith(prefix)) ? todd.message.conversation : (type == 'imageMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'videoMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'extendedTextMessage') && todd.message[type].text.startsWith(prefix) ? todd.message[type].text : (type == 'listResponseMessage') && todd.message[type].singleSelectReply.selectedRowId ? todd.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && todd.message[type].selectedButtonId ? todd.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(todd.message[type].fileSha256.toString('base64')) !== null && getCmd(todd.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? todd.message.conversation : (type === 'extendedTextMessage') ? todd.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = todd.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? todd.participant : todd.key.remoteJid
       var senderr = todd.key.fromMe ? KirBotz.user.jid : todd.key.remoteJid.endsWith('@g.us') ? todd.participant : todd.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = todd.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = todd.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
       var readmore = "ΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝΝ"

var isAntiLink = isGroup ? antilink.includes(from) : false
var isWelkom = isGroup ? welkom.includes(from) : false
       
selectedButton = (type == 'buttonsResponseMessage') ? todd.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? todd.message.listResponseMessage.title : ''

var sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: todd
})
}
var sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await KirBotz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: krtd1})}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: todd, contextInfo: {"mentionedJid": men ? men : []}})
}

botz = {
		  wait: 'Waittt.....',
		  success: 'Nih Kak',
		  error: {
		  stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !!!',
		  Iv: 'Linknya Error Tod !!!'
		  },
		  only: {
		  admin: 'Kusus Admin Tod !!!',
		  group: 'Khusus Group Tod !!!'
		  }
		  }

var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) 
{
case 0: hari = "ππ’π§π π π?"; break;
case 1: hari = "πππ§π’π§"; break;
case 2: hari = "πππ₯ππ¬π"; break;
case 3: hari = "ππππ?"; break;
case 4: hari = "πππ¦π’π¬"; break;
case 5: hari = "ππ?π¦β²ππ­"; break;
case 6: hari = "ππππ­π?"; break;
}
switch(bulan) 
{
case 0: bulan = "πππ§π?ππ«π’"; break;
case 1: bulan = "ππππ«π?ππ«π’"; break;
case 2: bulan = "πππ«ππ­"; break;
case 3: bulan = "ππ©π«π’π₯"; break;
case 4: bulan = "πππ’"; break;
case 5: bulan = "ππ?π§π’"; break;
case 6: bulan = "ππ?π₯π’"; break;
case 7: bulan = "ππ π?π¬π­π?π¬"; break;
case 8: bulan = "πππ©π­ππ¦πππ«"; break;
case 9: bulan = "ππ€π­π¨πππ«"; break;
case 10: bulan = "ππ¨π―ππ¦πππ«"; break;
case 11: bulan = "πππ¬ππ¦πππ«"; break;
}

var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

var uploadImages = (buffData, type) => {      
return new Promise(async (resolve, reject) => {        
var { ext } = await fromBuffer(buffData)       
var cmd = text.toLowerCase()      
var filePath = 'utils/tmp.' + ext 
var _buffData = type ? await resizeImage(buffData, false) : buffData  
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
if (err) return reject(err)
console.log('Proses Subrek YT : KirBotzΓ')			
var fileData = fs.readFileSync(filePath)			
var form = new FormData()			
form.append('file', fileData, 'tmp.' + ext)    
fetch('https://telegra.ph/upload', {			   
method: 'POST',     	
body: form			
})     	
.then(res => res.json())     	
.then(res => {			
if (res.error) return reject(res.error)			
resolve('https://telegra.ph' + res[0].src)     	
})     	
.then(() => fs.unlinkSync(filePath))			   
.catch(err => reject(err))			   
})			 
})		
}

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*Β©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, {quoted:krtd1})
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: todd, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " π·π°ππΈ, " : " π·π°ππΈ, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " πΉπ°πΌ, " : " πΉπ°πΌ, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " πΌπ΄π½πΈπ, " : " πΌπ΄π½πΈπ, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " π³π΄ππΈπΊ" : " π³π΄ππΈπΊ") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   

if (isGroup && !todd.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'white'))
reply(`γ *LINK TERDETEKSI* γ\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}

emote = ['π','π','π','π','π','π','π','π₯΄','π€©','π€ͺ','π€«','π','π','βΊ','π','π€','π€₯','π€','π','π£','π?','π','π','π²','π€','βΉοΈ','π¦','π¬','π³','π‘']
var emoji = emote[Math.floor(Math.random() * (emote.length))]	
krtd1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `πΊπΈππ±πΎππ ππ΄π»π°π· ππ΄πππ΄ππΈπ΅πΈπΊπ°ππΈ\nπππ½ππΈπΌπ΄ : ${runtime(process.uptime())}\nγ π΄πΌπΎππ΄ : ${emoji} γ`,contextInfo: {participant: `0@s.whatsapp.net`}}}}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!todd.key.fromMe && KirSelfPublic === true) return

KirBotz.updatePresence(from, Presence.composing)
KirBotz.chatRead(from, "read")
//βββββββββββββββ[ UNTUK FITUR ]βββββββββββββββ\\
switch (command) {

case  'allmenu': 
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
var Yy = 0
var menu = 
`*ββββ" ππππ π΄πππ "ββββ*
    *Name :* ${pushname}
    *Bio :* ${thu.status}
*ββββββββββββββββ*
${readmore}
βββ² *OWNER* β³β>
β${Yy+=1} ${prefix}public
β${Yy+=1} ${prefix}self
β${Yy+=1} ${prefix}bc
ββββββββββββββββββ

βββ² *OTHER* β³β>
β${Yy+=1} ${prefix}tes
β${Yy+=1} ${prefix}runtime
β${Yy+=1} ${prefix}owner
ββββββββββββββββββ

βββ² *GROUP* β³β>
β${Yy+=1} ${prefix}welcome *enable/disable*
β${Yy+=1} ${prefix}antilink *enable/disable*
β${Yy+=1} ${prefix}tagall *teks*
β${Yy+=1} ${prefix}add *628ΓΓΓΓΓΓΓΓ*
β${Yy+=1} ${prefix}kick *@tag*
β${Yy+=1} ${prefix}setname *Nama*
β${Yy+=1} ${prefix}hidetag *Teks*
β${Yy+=1} ${prefix}open
β${Yy+=1} ${prefix}close
ββββββββββββββββββ

βββ² *GROUP* β³β>
β${Yy+=1} ${prefix}asmaulhusna
β${Yy+=1} ${prefix}listsurah
β${Yy+=1} ${prefix}kisahnabi
β${Yy+=1} ${prefix}jadwalsholat
ββββββββββββββββββ

βββ² *DOWNLOAD* β³β>
β${Yy+=1} ${prefix}play *query*
β${Yy+=1} ${prefix}ytmp3 *link*
β${Yy+=1} ${prefix}ytmp4 *link*
β${Yy+=1} ${prefix}tiktok *link*
β${Yy+=1} ${prefix}tiktoknowm *link*
β${Yy+=1} ${prefix}tiktokwm *link*
ββββββββββββββββββ

βββ² *NULIS* β³β>
β${Yy+=1} ${prefix}nulis *teks*
β${Yy+=1} ${prefix}nuliskanan *teks*
β${Yy+=1} ${prefix}nuliskiri *teks*
β${Yy+=1} ${prefix}foliokanan *teks*
β${Yy+=1} ${prefix}foliokiri *teks*
ββββββββββββββββββ

βββ² *STICKER* β³β>
β${Yy+=1} ${prefix}sticker *reply foto*
β${Yy+=1} ${prefix}toimg *reply sticker*
β${Yy+=1} ${prefix}ssweb *link*
β${Yy+=1} ${prefix}tourl *reply foto*
β${Yy+=1} ${prefix}tts *teks*
β${Yy+=1} ${prefix}attp *teks*
β${Yy+=1} ${prefix}ttp1 *teks*
β${Yy+=1} ${prefix}ttp2 *teks*
β${Yy+=1} ${prefix}ttp3 *teks*
β${Yy+=1} ${prefix}ttp4 *teks*
β${Yy+=1} ${prefix}ttp5 *teks*
ββββββββββββββββββ

βββ² *PHOTOXY* β³β>
β${Yy+=1} ${prefix}shadow *teks*
β${Yy+=1} ${prefix}cup *teks*
β${Yy+=1} ${prefix}cup1 *teks*
β${Yy+=1} ${prefix}romance *teks*
β${Yy+=1} ${prefix}smoke *teks*
β${Yy+=1} ${prefix}burnpaper *teks*
β${Yy+=1} ${prefix}lovemessage *teks*
β${Yy+=1} ${prefix}undergrass *teks*
β${Yy+=1} ${prefix}love *teks*
β${Yy+=1} ${prefix}coffe *teks*
β${Yy+=1} ${prefix}woodheart *teks*
β${Yy+=1} ${prefix}woodenboard *teks*
β${Yy+=1} ${prefix}summer3d *teks*
β${Yy+=1} ${prefix}wolfmetal *teks*
β${Yy+=1} ${prefix}nature3d *teks*
β${Yy+=1} ${prefix}underwater *teks*
β${Yy+=1} ${prefix}golderrose *teks*
β${Yy+=1} ${prefix}summernature *teks*
β${Yy+=1} ${prefix}letterleaves *teks*
β${Yy+=1} ${prefix}glowingneon *teks*
β${Yy+=1} ${prefix}fallleaves *teks*
β${Yy+=1} ${prefix}flamming *teks*
β${Yy+=1} ${prefix}harrypotter *teks*
β${Yy+=1} ${prefix}carvedwood *teks*
β${Yy+=1} ${prefix}tiktokmaker *teks1 teks2*
β${Yy+=1} ${prefix}arcade8bit *teks1 teks2*
β${Yy+=1} ${prefix}battlefield4 *teks1 teks2*
β${Yy+=1} ${prefix}pubg *teks1 teks2*
ββββββββββββββββββ

βββ² *EPHOTO 360* β³β>
β${Yy+=1} ${prefix}wetglass *teks*
β${Yy+=1} ${prefix}multicolor3d *teks*
β${Yy+=1} ${prefix}watercolor *teks*
β${Yy+=1} ${prefix}luxurygold *teks*
β${Yy+=1} ${prefix}galaxywallpaper *teks*
β${Yy+=1} ${prefix}lighttext *teks*
β${Yy+=1} ${prefix}beautifulflower *teks*
β${Yy+=1} ${prefix}puppycute *teks*
β${Yy+=1} ${prefix}royaltext *teks*
β${Yy+=1} ${prefix}heartshaped *teks*
β${Yy+=1} ${prefix}birthdaycake *teks*
β${Yy+=1} ${prefix}galaxystyle *teks*
β${Yy+=1} ${prefix}hologram3d *teks*
β${Yy+=1} ${prefix}greenneon *teks*
β${Yy+=1} ${prefix}glossychrome *teks*
β${Yy+=1} ${prefix}greenbush *teks*
β${Yy+=1} ${prefix}metallogo *teks*
β${Yy+=1} ${prefix}noeltext *teks*
β${Yy+=1} ${prefix}glittergold *teks*
β${Yy+=1} ${prefix}textcake *teks*
β${Yy+=1} ${prefix}starsnight *teks*
β${Yy+=1} ${prefix}wooden3d *teks*
β${Yy+=1} ${prefix}textbyname *teks*
β${Yy+=1} ${prefix}writegalacy *teks*
β${Yy+=1} ${prefix}galaxybat *teks*
β${Yy+=1} ${prefix}snow3d *teks*
β${Yy+=1} ${prefix}birthdayday *teks*
β${Yy+=1} ${prefix}goldplaybutton *teks*
β${Yy+=1} ${prefix}silverplaybutton *teks*
β${Yy+=1} ${prefix}freefire *teks*
ββββββββββββββββββ

βββ² *RANDOM CECAN* β³β>
β${Yy+=1} ${prefix}cecan
β${Yy+=1} ${prefix}cogan
β${Yy+=1} ${prefix}china
β${Yy+=1} ${prefix}malaysia
β${Yy+=1} ${prefix}korea
β${Yy+=1} ${prefix}japan
β${Yy+=1} ${prefix}indonesia
β${Yy+=1} ${prefix}thailand
β${Yy+=1} ${prefix}vietnam
β${Yy+=1} ${prefix}jeni
β${Yy+=1} ${prefix}jiso
β${Yy+=1} ${prefix}justina
β${Yy+=1} ${prefix}lisa
β${Yy+=1} ${prefix}rose
β${Yy+=1} ${prefix}ryujin
ββββββββββββββββββ

βββ² *RANDOM FOTO* β³β>
β${Yy+=1} ${prefix}darkjokes
β${Yy+=1} ${prefix}motor
β${Yy+=1} ${prefix}mobil
β${Yy+=1} ${prefix}memeindo
β${Yy+=1} ${prefix}renungan
β${Yy+=1} ${prefix}quotesimage
β${Yy+=1} ${prefix}katakataimage
β${Yy+=1} ${prefix}aesthetic
β${Yy+=1} ${prefix}yulibocil
β${Yy+=1} ${prefix}doraemon
β${Yy+=1} ${prefix}pokemon
β${Yy+=1} ${prefix}pentol
β${Yy+=1} ${prefix}tatasurya
β${Yy+=1} ${prefix}kartun
β${Yy+=1} ${prefix}anjing
β${Yy+=1} ${prefix}kucing
β${Yy+=1} ${prefix}satanic
β${Yy+=1} ${prefix}boneka
β${Yy+=1} ${prefix}wallpaperhacker
β${Yy+=1} ${prefix}wallpaperhacker2
β${Yy+=1} ${prefix}wallpaperharley
β${Yy+=1} ${prefix}wallpaperjoker
β${Yy+=1} ${prefix}wallpaperpubg
β${Yy+=1} ${prefix}wallpaperhp
β${Yy+=1} ${prefix}wallpaperhp2
β${Yy+=1} ${prefix}wallpaperkpop
β${Yy+=1} ${prefix}wallpaperblackpink
β${Yy+=1} ${prefix}wallpapergame
β${Yy+=1} ${prefix}naruto
β${Yy+=1} ${prefix}boruto
β${Yy+=1} ${prefix}nekonime
β${Yy+=1} ${prefix}akira
β${Yy+=1} ${prefix}akiyama
β${Yy+=1} ${prefix}ana
β${Yy+=1} ${prefix}asuna
β${Yy+=1} ${prefix}ayuzawa
β${Yy+=1} ${prefix}chiho
β${Yy+=1} ${prefix}chitoge
β${Yy+=1} ${prefix}deidara
β${Yy+=1} ${prefix}eba
β${Yy+=1} ${prefix}elaina
β${Yy+=1} ${prefix}emilia
β${Yy+=1} ${prefix}erza
β${Yy+=1} ${prefix}gremory
β${Yy+=1} ${prefix}hestie
β${Yy+=1} ${prefix}hinata
β${Yy+=1} ${prefix}isuzu
β${Yy+=1} ${prefix}itachi
β${Yy+=1} ${prefix}itori
β${Yy+=1} ${prefix}kagura
β${Yy+=1} ${prefix}kakasih
β${Yy+=1} ${prefix}kaori
β${Yy+=1} ${prefix}kaneki
β${Yy+=1} ${prefix}kotori
β${Yy+=1} ${prefix}kurumi
β${Yy+=1} ${prefix}madara
β${Yy+=1} ${prefix}mikasa
β${Yy+=1} ${prefix}miku
β${Yy+=1} ${prefix}minato
β${Yy+=1} ${prefix}nezuko
β${Yy+=1} ${prefix}rize
β${Yy+=1} ${prefix}sakura
β${Yy+=1} ${prefix}sasuke
β${Yy+=1} ${prefix}shina
β${Yy+=1} ${prefix}shinka
β${Yy+=1} ${prefix}shinomiya
β${Yy+=1} ${prefix}shizuka
β${Yy+=1} ${prefix}tejina
β${Yy+=1} ${prefix}toukachan
β${Yy+=1} ${prefix}tsunade
β${Yy+=1} ${prefix}yotsuba
β${Yy+=1} ${prefix}yuki
β${Yy+=1} ${prefix}yumeko
β${Yy+=1} ${prefix}fanart
β${Yy+=1} ${prefix}nino
ββββββββββββββββββ

βββ² *RANDOM VIDEO* β³β>
β${Yy+=1} ${prefix}bokep
β${Yy+=1} ${prefix}beatvn
β${Yy+=1} ${prefix}jedagjedugff
β${Yy+=1} ${prefix}jedagjedugml
β${Yy+=1} ${prefix}jedagjedugpubg
β${Yy+=1} ${prefix}storywa
β${Yy+=1} ${prefix}storygalau
β${Yy+=1} ${prefix}storyanime
β${Yy+=1} ${prefix}storytruk
β${Yy+=1} ${prefix}storybus
β${Yy+=1} ${prefix}storysholawatan
ββββββββββββββββββ`;
sendButImage(from, menu, 
`*Base By KirBotzΓ*`, kirrfoto, [
{
buttonId: `${prefix}sc`,
buttonText: {
displayText: `SCRIPT`,
},
type: 1,
}
])
break
case 'script':
case 'sc':
reply(`Gak Ada Sc Sc Kak Ini Baru Base Doank`)
break
/////////////////////////\\//\\/\\/\\/\\/\\/\\/\\/\\//\/\\//\///////////////////////////////
case 'listsurah':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'asmaulhusna':
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':	
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
//////////////////////////////////////////////\\//\//\//\/\\\/\/\\//\\\
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks`)
reply(botz.wait)
txt1 = args[0]
getBuffer(`${api4}/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotzΓ`, quoted : krtd1})
})
break
case 'tiktokmaker':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(botz.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotzΓ`, quoted : krtd1})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(botz.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotzΓ`, quoted : krtd1})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(botz.wait)
ini_txt = args.join(" ")
getBuffer(`${api4}/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotzΓ`, quoted : krtd1}) 
})
break
case 'bokep':
reply(botz.wait)
get_result = await getBuffer(`${api2}/api/bokep?apikey=RakuKeyTod`)
pll = `Nih Kak Jangan Lupa Sambil Coli YahοΈ`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])            
break
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storywa':
case 'storygalau':
case 'storyanime':
case 'storytruk':
case 'storybus':
case 'storysholawatan':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/randomvideo/${command}?apikey=NisaaCantik`)
pll = `Nih Kak γ·οΈ`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])            
break
case 'naruto':
case 'boruto':
case 'nekonime':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestie':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/anime/${command}?apikey=NisaaCantik`)
pll = `Nih Kak γ·οΈ`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])
break
case 'motor':
case 'mobil':
case 'memeindo':
case 'renungan':
case 'quotesimage':
case 'katakataimage':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/randomimage/${command}?apikey=NisaaCantik`)
pll = `Nih Kak γ·οΈ`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])
break
///////////////////
case 'vietnam':
case 'indonesia':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
reply(botz.wait)
get_result = await getBuffer(`${api3}/api/cecan/${command}?apikey=NisaaCantik`)
pll = `Nih Kak γ·οΈ`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])
break
case 'cecan':
case 'cogan':
reply(botz.wait)
get_result = await getBuffer(`${api4}/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak γ·οΈ`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAKοΈ`,
},
type: 1,
},
])
break
//\\\//\\//\//\\/\\//\/\\//\//\\/\\/\\/\/\\/\\/\\/\//\/\\/\
case 'nulis':
if(!q) return reply('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: 'πππ¦π§',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST NULIS`,
sections: [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:krtd1})
break
case 'nuliskiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'nuliskanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokiri':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(botz.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
case 'foliokanan':{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(botz.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./KIR4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./KIR4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
KirBotz.sendMessage(from, fs.readFileSync('./KIR4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: krtd1, caption: `Jangan malas kak...`})
})
}
break
///\\//\//\\//\\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\////\\//\//\\//\
case 'play':
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(botz.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `π² π¬π’π¨π§π¨ππ π£πππ¬ π²

π₯Έ Judul : ${yut.all[0].title}
π₯Έ ID Video : ${yut.all[0].videoId}
π₯ΈοΈ Diupload Pada : ${yut.all[0].ago}
π₯ΈοΈοΈ Views : ${yut.all[0].views}
π₯ΈοΈ Durasi : ${yut.all[0].timestamp}
π₯Έ Channel : ${yut.all[0].author.name}
π₯Έ Link Channel : ${yut.all[0].author.url}
π₯Έ Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await KirBotz.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`Base By *KirBotzΓ*`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (args.length < 1) return reply('Link?')     
reply(botz.wait)
KirTid = await fetchJson(`${api3}/api/download/ytmp4?url=${q}&apikey=NisaaCantik`)
kirmp4 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp4, video, { mimetype: 'video/mp4', quoted: krtd1 })
break
case 'ytmp3':
if (args.length < 1) return reply('Link?')         
reply(botz.wait)      
KirTid = await fetchJson(`${api3}/api/download/ytmp3?url=${q}&apikey=NisaaCantik`)
kirmp3 = await getBuffer(KirTid.result.url)
await KirBotz.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: krtd1})
break
case 'tiktok':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
result = `β¦ *Nickname*: ${data.result.author.nickname}
β¦ *Like*: ${data.result.statistic.diggCount}
β¦ *Komentar*: ${data.result.statistic.commentCount}
β¦ *Share*: ${data.result.statistic.shareCount}
οΈβ¦ *Views*: ${data.result.statistic.playCount}
β¦ *Desc*: ${data.result.title}`
buttons = 
[
{buttonId: `${prefix}tiktoknowm ${q}`,buttonText:{displayText: `NO WM` },type:1}
,
{buttonId:`${prefix}tiktokwm ${q}`,buttonText:{displayText: `WM` },type:1}
]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
imageMsg = ( await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
contentText:`${result}`,buttons,headerType:4}
prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: krtd1})
KirBotz.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'tiktoknowm': 
if (!q) return reply('Linknya?')
reply(botz.wait)
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
ini_video = await getBuffer(data.result.link)
KirBotz.sendMessage(from, ini_video, video, { quoted: krtd1 })
break
case 'tiktokwm':
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
if (!q) return reply('Link?')
reply(botz.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
var { wm, nowm, audio } = result
          axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
          .then(async (a) => {
    	  me = `Nih BreeβοΈ`
	      KirBotz.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:krtd1,caption:me})
          })
		  })
		  break
////////////////////\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\/
case 'setname':
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`βSukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: todd })
break
case 'tagall':
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
var arr = [];
var txti = `*[ TAG ALL ]*\n\n*Teks :* ${q ? q : ''}\n\n`
for (var i of groupMembers)
{
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'add':
if (todd.message.extendedTextMessage === null || todd.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
KirBotz.groupAdd(from, [entah])
} else {
entah = todd.message.extendedTextMessage.contextInfo.participant
KirBotz.groupAdd(from, [entah])
}
break
case 'kick':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'hidetag':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin`)
var value = body.slice(9)
var group = await KirBotz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: todd
}
KirBotz.sendMessage(from, options, text)
break
case 'open':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Membuka Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Menutup Grup ${groupName}`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'menu':
case 'help':
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await KirBotz.chats.all()
latensie = speed() - timestampe
menu =
`*β­ββγ INFO USER γ*
*βKontak User* : @${sender.split('@')[0]} 
*βBio User* : ${thu.status}
*β°ββββββββββββββ*
*β­ββγ INFO BOT γ*
*βNama Bot* : KirBotz
*βNama Owner* : Akira
*βRuntime Bot* : ${runtime(process.uptime())}
*βSpeed Bot* : ${latensie.toFixed(4)} Detik β‘
*βMode Bot* : ${KirSelfPublic ? 'MODE SELF' : 'MODE PUBLIC'}
*βTotal Group Chat* : ${groups.length}
*βTotal Private Chat* : ${privat.length}
*βTotal Semua Chat* : ${totalChat.length}
*βTanggal* : ${Tanggal}
*βWaktu WIB* : ${wib}
*βWaktu WIT* : ${wit}
*βWaktu WITA* : ${wita}
*β°ββββββββββββββ*`
KirBotz.sendMessage(from, { contentText: `${menu}`, 
footerText: `β  β  β  β  β`, 
buttons: [
{ buttonId: `.allmenu`, buttonText: { displayText: 'π FITUR' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./KIR4/kirbotz${menhe}.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
/////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\//
case 'tts':
if (!q) return reply(`Contoh ${prefix + command} KirTod`)
titidakira = await getBuffer(`${api}/speech?lang=id&text=${q}&apikey=zekais`)
KirBotz.sendMessage(from, titidakira, MessageType.audio, {quoted: todd, mimetype: 'audip/mp4', ptt:true})
break
case 'public':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === false) return
uptime = process.uptime()
KirSelfPublic = false
reply(`γ *PUBLIC-MODE* γ`)
break
case 'self':
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === true) return
uptime = process.uptime()
KirSelfPublic = true
reply(`γ *SELF-MODE* γ`)
break
case 'tes':
reply(` Bot On Kak Silahkan Ketik .menu `)
break
case 'runtime':
reply(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownerName}\n` +
`item1.TEL;waid=${owner}:${owner}\n` +
`item1.X-ABLabel:π Creator\n` +
`item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
`item2.X-ABLabel:π§ Email\n` +
`item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
`item3.X-ABLabel:βοΈ Channel Owner\n` +
`item4.ADR:;;π?π© Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:π Region\n` +
`item5.X-ABLabel:βοΈ Kir - Botz Developer\n` +
'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: todd, 
})
reply('TUHH NOMER OWNER KU')
break
case 'sticker':
case 'stiker':
case 's':
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else if ((isMedia && todd.message.videoMessage.fileLength < 10000000 || isQuotedVideo && todd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, `./KIR3/${sender}`)
reply(botz.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(botz.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./KIR3/data.exif ./KIR3/${sender}.webp -o ./KIR3/${sender}.webp`, async (error) => {
if (error) return reply(botz.error.api)
KirBotz.sendMessage(from, fs.readFileSync(`./KIR3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./KIR3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./KIR3/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './KIR3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : KirBotzΓ`)
fs.unlinkSync(ran)
})
break
case 'tourl':
if ((isMedia && !todd.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(botz.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
owgi = await KirBotz.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'ssweb':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`${api5}/screenshot?&url=${teks}`)
buff = await getBuffer(anu.screenshot)
KirBotz.sendMessage(from, buff, image, {quoted: todd, caption : teks})
break
case 'darkjokes':
case 'darkjoke':
reply(botz.wait)
data = fs.readFileSync('./KIR1/darkjokes.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
KirBotz.sendMessage(from, hasil, image, {quoted: todd, caption: '*GELAP BOS :V*'})
break
case 'attp':
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(botz.wait)
buffer = await getBuffer(`${api6}/attp?file&text=${encodeURI(q)}`)
KirBotz.sendMessage(from, buffer, sticker, { quoted: todd })
break
case 'ttp1':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp1 KirBotz`)
reply(botz.wait)
anu1 = await getBuffer(`${api}/text2png?text=${q}&color=white`)
KirBotz.sendMessage(from, anu1, image, {quoted: todd, caption : `${prefix}s`})
break
case 'ttp2':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp2 KirBotz`)
reply(botz.wait)
anu1 = await getBuffer(`${api}/text2png?text=${q}&color=magenta`)
KirBotz.sendMessage(from, anu1, image, {quoted: todd, caption : `${prefix}s`})
break
case 'ttp3':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp3 KirBotz`)
reply(botz.wait)
anu1 = await getBuffer(`${api}/text2png?text=${q}&color=cyan`)
KirBotz.sendMessage(from, anu1, image, {quoted: todd, caption : `${prefix}s`})
break
case 'ttp4':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp4 KirBotz`)
reply(botz.wait)
anu1 = await getBuffer(`${api}/text2png?text=${q}&color=green`)
KirBotz.sendMessage(from, anu1, image, {quoted: todd, caption : `${prefix}s`})
break
case 'ttp5':
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp5 KirBotz`)
reply(botz.wait)
anu1 = await getBuffer(`${api}/text2png?text=${q}&color=yellow`)
KirBotz.sendMessage(from, anu1, image, {quoted: todd, caption : `${prefix}s`})
break
case 'antilink':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*γ ANTILINK DI AKTIFKAN γ*\n\nYang Ngirim Link Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
var anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./KIR2/antilink.json', JSON.stringify(antilink))
reply('*γ ANTILINK DI NONAKTIFKAN γ*')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'welcome':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (args.length < 1) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini βοΈ')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./KIR2/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini βοΈ')
} else {
reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
case 'bc':
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (args.length < 1) return reply('teks?')
anu = await KirBotz.chats.all()
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await KirBotz.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, bc, { contentText: `β β BROADCAST β β\n\nβ¦ : ${tes}`, 
footerText: `Base By *KirBotzκͺΆπ£κ«*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
KirBotz.sendMessage(_.jid, { contentText: `β β BROADCAST β β\n\nβ¦ : ${textt}`, 
footerText: `Base By *KirBotzκͺΆπ£κ«*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break

default:
if (isCmd) {      
menu = monospace(`Maaf Kak ${pushname}
Command ${prefix + command} Tidak Rersedia Di List Menu!!!
Mohon Cek Kembali List Menu Nya Kak`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
sendButton(from, menu, 'Base By KirBotzΓ', but, krtd1)
break
}
if (budy.startsWith('to')){
if (!todd.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
} 
catch 
(e) 
{
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'magenta'))
}
}
}