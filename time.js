setInterval(()=>{
    a=new Date();
   
    let hours=a.getHours()
    let min=a.getMinutes()
    let second=a.getSeconds()

    if(hours<10)
        hours="0"+hours
    if(min<10)
        min="0"+min
    if(second<10)
        second="0"+second

        if(hours>12){
            hours=hours-12
            document.getElementById("AM").innerHTML="PM"
        }

    let time=hours+":"+min+":"+second

    document.getElementById('time').innerHTML=time


    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    document.getElementById('day').innerHTML=days[a.getDay()]
    
    let months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    
    let day=a.getDate();
    
    if(day<10)
        day="0"+day
    let month=a.getMonth();
    let yr=a.getFullYear()

    let date=day+"-"+months[month]+"-"+yr

    document.getElementById('date').innerHTML=date

    document.getElementById('uctime').innerHTML=a.getUTCHours()+":"+a.getUTCMinutes()+":"+a.getUTCSeconds()
},500)
let count=0;
button.addEventListener('click',function(){
    // button.style.background="rgb(45, 106, 126)"
    
        if(document.getElementById("uctime").style.display == 'none')
            document.getElementById("uctime").style.display = 'block'; 
        else
            document.getElementById("uctime").style.display = 'none';
 
    // document.getElementById("uctime").style.visibility='hidden'
    // console.log("clciked")
})
