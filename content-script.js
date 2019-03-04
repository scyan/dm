  let stringify=(obj)=>{
    let c = ''
    for(let key in obj){
      c+=`&${key}=${obj[key]}`
    }
    return c.slice(1);
  }
  let data = stringify({
    exParams:encodeURIComponent(JSON.stringify({"damai":"1","channel":"damai_app","umpChannel":"10002","atomSplit":"1","serviceVersion":"1.8.5"})),
    buyParam:'586888717954_1_3990106965192',
    buyNow:true
  })
fetch(`https://buy.damai.cn/orderConfirm?${data}`).then((res)=>{
  return res.text()
}).then((res)=>{
  console.log(res)
})