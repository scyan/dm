  let stringify=(obj)=>{
    let c = ''
    for(let key in obj){
      c+=`&${key}=${obj[key]}`
    }
    return c.slice(1);
  }
  //新版打开页面. https://buy.damai.cn/orderConfirm
  //老版 https://buy.damai.cn/multi/confirm
  console.log(location.href)

function newOne(){
    if(location.href.indexOf('buy.damai.cn')<0){
    return;
  }
    let data = stringify({
      exParams:encodeURIComponent(JSON.stringify({"damai":"1","channel":"damai_app","umpChannel":"10002","atomSplit":"1","serviceVersion":"1.8.5"})),
      buyParam:'586888717954_1_3990106965192',
      buyNow:true
    })
  fetch(`https://buy.damai.cn/orderConfirm?${data}`).then((res)=>{
    return res.text()
  }).then((res)=>{
    document.write(res);
    // console.log(res)
  })
}

function oldOne(){
  if(location.href.indexOf('piao.damai.cn')<0){
    return;
  }
  fetch('https://www.damai.cn/GotoShopping.aspx?_action=Immediately&proId=12679322&optype=1&companyId=1580&num=1&n=0',{redirect:'follow'}).then((res)=>{
    return res.text()
  }).then((res)=>{
    
    
    document.write(res.replace(/http:/g,''))
  })
}

oldOne()