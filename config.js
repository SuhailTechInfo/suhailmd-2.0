const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://github.com/SuhailTechInfo/suhailmd-2.0"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"   "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_59_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxnbGtudE9hNDR5YlE3UFF6NHd2TjlRdHRxTHFyUXNEQVFSeWtFeXlQZ009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlMyc3RzQmhiUzhPQUZvei1CS3E2VWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTFmNTNmYzYtMTNlNy00NzBjLWEwZDktOTg3MjgwOWI4MTAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDExNixcbiAgICAgIDIyLFxuICAgICAgMTQ1LFxuICAgICAgMTQ0LFxuICAgICAgMTQyLFxuICAgICAgODUsXG4gICAgICAyNDQsXG4gICAgICAyNDEsXG4gICAgICAzNixcbiAgICAgIDU0LFxuICAgICAgMjEyLFxuICAgICAgNDAsXG4gICAgICA4MCxcbiAgICAgIDE4NCxcbiAgICAgIDExMixcbiAgICAgIDg2LFxuICAgICAgMjAwLFxuICAgICAgMTU0LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgOTUsXG4gICAgICAxOTQsXG4gICAgICAxNDgsXG4gICAgICA1OCxcbiAgICAgIDIxNixcbiAgICAgIDE3MixcbiAgICAgIDEyNixcbiAgICAgIDgsXG4gICAgICAxMyxcbiAgICAgIDk4LFxuICAgICAgMjE1LFxuICAgICAgMjQ1LFxuICAgICAgMTM2LFxuICAgICAgMTIyLFxuICAgICAgNjksXG4gICAgICA4NixcbiAgICAgIDE2MSxcbiAgICAgIDE4MixcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZSEZKMU5aR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NjUwNjg5OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiMjQvNyDDhcSMxaTDjlbEliDDhcSOTcOO4bmEXCIsXG4gICAgXCJsaWRcIjogXCIxNDM0ODI1NDI5MTU2MDQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMzdrK3dCRU9HR3Via0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZDTFlJQUgxK2s1aytUMUE2ZWFFQ2dSNWhLUDVCeHVUdEo2NGhVUnRvVzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZS8rbTFwTExXV1ppZDVlY2p0ZGYxK0dtcjVxVnREMmNJQ1QrbGZQdTNoZXZYc1BzN3YvZ1JTb3dzYmdua3V6cDIwcVR4UlJvRVNNWnVhQVYvRE1mQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMytTem05V0JJRzR6R1doWE1iT0FLVHp1QVZGTTAwQVU5RzRsVDBOVnVRbjNmZTN3UTQ0UkdTWDNhUEFJODl6S1paWjdNWG01ZE5wRTlZMFZEYmt5Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NjUwNjg5OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDg1MTU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGtiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMa2IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJZjlzdFp0OHRNWTA5T0RVSWltYXd4R2hYcnp3OTU4d3VFWTZMcnFyVGJnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ5NTI1NTAwNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ÅĈŤÎVĚ ĂĎMÎŇ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
