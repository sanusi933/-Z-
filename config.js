//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348036420601";
global.sudo = process.env.SUDO || "2348036420601";
global.owner = process.env.OWNER_NUMBER || "2348036420601";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS00vdngyYStyeVorajI5Snk5dVZhNFA1SGE0Mkw2L0xxMTl5MWFRb1FIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3kwcnJCK213SW1oRlVieEY0ZE9iSG9Fdkxhb28rdVdMWHFjM3JMaDZUMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T0pOZFRQaHgrWHpkVGJmNmxEK2h2WHNPNnFKMHZweUQ1bnREazZxNEhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dkgxcERUbmpMcEt3bmdOemtBQWIva1IxZkNpODJzWm5TMmtSMnhKQ0JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDK1FvbDdYYjZOamtKcmErOGE5dnFDMGQzYXFVT01mRW5DaGd6b0hDR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV5ZGhqcm9qRy83bWZ2YjVFWlNzSGE1dWNZaFNtQnh2VThJbmJ1WWppM3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09STHBPR2RWenZGTUxOdXUyUUYxNm1Jb3hSYVk3ZFlQaGk5ZXBWcmszcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid29TM2ZKNE9vMUxRNURLeEMvRXlqaVFkZlFUSk1ZcEFrNDVLeVk3SGswUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR1ckVZdzNYTUdZWFZ4SlhTbHArY0lGSmtkZmdIaFNZYWlSL1lnY1dTbEh5Qnc5bEFVMGdVVjVjT2JnSXZ5aXlZTXJOVm95Um1uOXZ4RzQvaGhCempnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJvaVd2R2sydUdnZDVmZEx0bDA3RnBRa2hRQ2xhbFJhT3g5VElEWnN4RmU4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIYzNGR3BBOVQ5eXluVnBjaWkyeGFBIiwicGhvbmVJZCI6IjZjYjk5ZDcwLTgxNjAtNDAyMC05M2E3LTcxNDgyZTI3MTZhOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrV1B1TStIb1pNUHFUYUZSaFdEV3N5WEtNbXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWxoYWZIWmZzcllCVUJCTVUrSWM5VjhUWUZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktUTkFNWFQ5IiwibWUiOnsiaWQiOiIyMzQ4MDM2NDIwNjAxOjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQandpc1FERUphZ3hMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIySUJaRjQyb2dMOXRNRHRkZGg4MmZpbTRSNFlaTTJiMDd4OUEyREcySlJFPSIsImFjY291bnRTaWduYXR1cmUiOiJUSng4QjAvenR0RWl5K1FROUtNb3NRVHRaRS9VOWFkakIrL1BjVjgyVXpibG5ZdkVvR3dXUmJCYjZ5MnhReFFseEljTEU2RTNkVnlnTGFhY3Rra0ZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSG9XOXNxbGRTQnFlOUMvYzA0bHhXUEQraThGK2lOQnQxL3hKSGsyV0diM2N0cENUTUUzSVpHZHpHRFdWb3I0NFZBTzZqeFRJTCtRK1FYNHJoc1lBZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDM2NDIwNjAxOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRpQVdSZU5xSUMvYlRBN1hYWWZObjRwdUVlR0dUTm05TzhmUU5neHRpVVIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEyNjg2NDN9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "€Ⓜ️Ⓜ️Z¥👻",
  packname: process.env.PACK_NAME || "€Ⓜ️Ⓜ️Z¥❤️",
  botname: process.env.BOT_NAME || "£Ⓜ️Ⓜ️Z¥👻",
  ownername: process.env.OWNER_NAME || "£Ⓜ️Ⓜ️Z¥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
