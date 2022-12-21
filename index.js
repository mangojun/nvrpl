// blocksite = [
//     "youtube.com"
// ]

// setInterval(()=>{
//     let loc = window.location.href;

//     function check(site){
//         if(loc.includes(site)){
//             alert("하지마");
//             history.back();
//         }
//     }

//     blocksite.forEach(site => check(site));
// }, 500)

csst = `
<style>
#grp {
    position:fixed;
    bottom:0;
    right:0;
    background-color:#0080FF;
    margin:50px;
    font-size:20px;
    box-shadow: 2px 2px 5px;
    padding: 10px;
    border-radius: 22.5px;
    width: 25px;
}

#lst {
    list-style: none;
    padding: 10px 0
}

    li {
        margin-bottom: 10px;
    }

    .close {
        display: none;
        transition: all ease 2s 0s;
    }

    .open {
        display: inline;
    }
</style>
`

htmlt = `
    <div id="grp">
        <ol id="lst" class="close" onselectstart="return false">
            <li>🚫</li>
            <li>🌐</li>
            <li>🤬</li>
        </ol>
        <div id="btn">🔍</div>
    </div>
`
document.querySelector("body").innerHTML += htmlt
document.querySelector("head").innerHTML += csst

let open = false
document.getElementById("btn").addEventListener("click", ()=>{
    if(open){
        open = false
        document.getElementById("lst").className = "close"
    } else {
        open = true
        document.getElementById("lst").className = "open"
    }
})