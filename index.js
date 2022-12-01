blocksite = [
    "youtube.com"
]

setInterval(()=>{
    let loc = window.location.href;

    function check(site){
        if(loc.includes(site)){
            alert("하지마");
            history.back();
        }
    }

    blocksite.forEach(site => check(site));
}, 500)
