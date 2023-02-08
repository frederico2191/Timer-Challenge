
    // document.getElementById("days").innerHTML = "0d "
    // document.getElementById("hours").innerHTML = "0h " 
    // document.getElementById("mins").innerHTML = "0m " 
    // document.getElementById("secs").innerHTML = "0s"

window.onload = () => {
    let minutes = 5
    const promptedMinutes = prompt("How many minutes will today's break be?")
    console.log('promptedMinutes', promptedMinutes)

    if (Number(minutes) !== NaN) {
        minutes = promptedMinutes
    }
    
    const countDownDate = new Date().getTime() + (minutes*60000)
    
    const myfunc = setInterval(function() {
        const timeleft = countDownDate - new Date().getTime();
        
        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        document.getElementById("days").innerHTML = days + " days "
        document.getElementById("hours").innerHTML = hours + " hours " 
        document.getElementById("mins").innerHTML = minutes + " minutes " 
        document.getElementById("secs").innerHTML = seconds + " seconds"
    
        if (timeleft < 0) {
            clearInterval(myfunc);
            document.getElementById("days").innerHTML = ""
            document.getElementById("hours").innerHTML = "" 
            document.getElementById("mins").innerHTML = ""
            document.getElementById("secs").innerHTML = ""
            document.getElementById("end").innerHTML = "Time's up!!";
            setTimeout(function() {
                alert("Time to get back in class :)");
            },10)
        }
    }, 1000)

}