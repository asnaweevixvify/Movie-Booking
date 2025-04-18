let seatAll = document.querySelectorAll('.seatblank')
let seatCount = document.getElementById('seatcount')
let seatPrice = document.getElementById('price')
let select = document.getElementById('select')
let option = document.querySelectorAll('option')
let moviePrice
let i;



window.onload=function(){
    const seatpRice = localStorage.getItem('movieprice')
    const couNt = localStorage.getItem('count')
    const chooSe = localStorage.getItem('choose')
    const seatMINE = JSON.parse(localStorage.getItem('seatMine'))
    if(seatMINE && Array.isArray(seatMINE)){
        seatMINE.forEach(index=>{
            seatAll[index].classList.remove('seatblank');
            seatAll[index].classList.add('seatmine');
            i = parseInt(couNt)
            moviePrice = parseInt(seatpRice)
            seatAll.forEach(seat =>{
                seat.style.pointerEvents = 'auto';
                seat.addEventListener('click',function(){
                    let seatSelect = items.classList.contains('seatmine');
                    if(seatSelect){
                        i+=1
                    }
                    else{
                        i-=1
                    }
                    seatCount.innerHTML=`เลือกจำนวน ${i} ที่นั่ง`
                    seatPrice.innerHTML=`ยอดชำระเงิน ${Number(moviePrice)*i} บาท`
                    saveMode()
                })
            })
        })
    }
    if(!couNt){
        couNt=0
    }
    seatCount.innerHTML=`เลือกจำนวน ${couNt} ที่นั่ง`
    seatPrice.innerHTML=`ยอดชำระเงิน ${seatpRice*couNt} บาท`
    if(chooSe){
        select.value=chooSe
    }
}
seatAll.forEach(seat => {
    seat.style.pointerEvents = 'none';
});




select.addEventListener('change',function(){
    if(select.value === 'none'){
        seatAll.forEach(seat =>{
                seat.style.pointerEvents = 'none';
            }
        )
    }
    else if(select.value !== 'none'){
        seatAll.forEach(seat =>{
            seat.style.pointerEvents = 'auto';
            if(seat.classList.contains('seatmine')){
                seat.classList.remove('seatmine')
                seat.classList.add('seatblank')
            }
        }
        )
    }
    i=0;
    moviePrice = select.value;
    seatCount.innerHTML=`เลือกจำนวน ${i} ที่นั่ง`
    seatPrice.innerHTML=`ยอดชำระเงิน ${Number(moviePrice)*i} บาท`
    saveMode()
})



function choose(e){
   if(e.classList.contains('seatblank')){
        e.classList.replace('seatblank','seatmine')
        
   }
   else if(e.classList.contains('seatmine')){
        e.classList.replace('seatmine','seatblank')
   }

}
seatAll.forEach(items =>{
    items.addEventListener('click',function(){
        let seatSelect = items.classList.contains('seatmine');
        if(seatSelect){
            i+=1
        }
        else{
            i-=1
        }
        seatCount.innerHTML=`เลือกจำนวน ${i} ที่นั่ง`
        seatPrice.innerHTML=`ยอดชำระเงิน ${Number(moviePrice)*i} บาท`
        saveMode()
    })
})




function saveMode(){
    let arr= []
    seatAll.forEach((e,index)=>{
        if(e.classList.contains('seatmine')){
            arr.push(index)
        }
    })
    localStorage.setItem('movieprice',moviePrice)
    localStorage.setItem('count',i)
    localStorage.setItem('choose',select.value)
    localStorage.setItem('seatMine',JSON.stringify(arr))
}
