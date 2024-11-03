const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_41_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNllIVkhvQllOVFJSY2lkZjlseFdSZGVYbm5xR2RMQnY2SXZzVGtsU296VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicnZvUG9td1ZRbS1fc1Qxbm9ZWC1qQVwiLFxuICBcInBob25lSWRcIjogXCI1NDAwNmEyOS0yZWE4LTQxMWUtOGNjNy03MTE0NDU1NTYyZjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAxODgsXG4gICAgICAxNTUsXG4gICAgICAxMjIsXG4gICAgICA2MixcbiAgICAgIDIwMSxcbiAgICAgIDI0OCxcbiAgICAgIDE2MyxcbiAgICAgIDE4MixcbiAgICAgIDIzMixcbiAgICAgIDE4MCxcbiAgICAgIDI0NSxcbiAgICAgIDE2MixcbiAgICAgIDE5LFxuICAgICAgNzAsXG4gICAgICA2OSxcbiAgICAgIDE5OSxcbiAgICAgIDE2MSxcbiAgICAgIDI0LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDE5NCxcbiAgICAgIDExOCxcbiAgICAgIDEyMyxcbiAgICAgIDExMCxcbiAgICAgIDEyLFxuICAgICAgNzksXG4gICAgICAzMixcbiAgICAgIDM3LFxuICAgICAgMjQ4LFxuICAgICAgMTY1LFxuICAgICAgNTksXG4gICAgICAxOTksXG4gICAgICAxMTEsXG4gICAgICAxNDksXG4gICAgICAxMTksXG4gICAgICA3NixcbiAgICAgIDEwMyxcbiAgICAgIDE5NyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1M1hXN0oxS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjgyNDcxMzQxOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTc1ODA2NzI0MDk5MzozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNL0g4TDRFRUpyU25Ma0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJDRE5MbW9UWGtOTHdjOHZUeHU3cWI5NXJmWGZWdGFyWFN0RDRXK043V0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMUY3eU5Sdi9lVUxSb045b3NmaktNWkJJeFNrVmZqTkpyckhpVkdXSmFsanRaOU5IL1N0TjlHSVRvTG1HSWRGTkY1LzI3ZW1yY0lLcU1Hb3Z0eTVjQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkc2L0U2Vi9JTkNBS2ttYWtCbVFtQlN2dnVZU3RTcW0wRUFOUXppRktxYytQRW1LMHdlV2ZBaFBEN3hKUklEd3lmN1VJSkZudzd1SDJqNTZCUmtBaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjgyNDcxMzQxOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYxOTY3OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";



OWNER_NUMBER="237682471341"
SESSION_ID = "SESSION_85_23_59_01_kjgfgfclhj"
THUMB_IMAGE = "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"
OWNER_NAME = "Suhail"
PREFIX = .
WARN_COUNT = 3
DISABLE_PM = "false"
THEME= "SUHAIL"
MODE = "public"
ANTILINK_VALUES = "https://,chat.whatsapp.com"
  

















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
