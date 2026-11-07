const http=require("http");const p=+process.env.PORT||3000;http.createServer((q,r)=>{r.writeHead(200);r.end("ok")}).listen(p,"0.0.0.0",()=>console.log("listening",p));
