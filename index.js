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
#grp_nvrpl {
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

#lst_nvrpl {
    list-style: none;
    padding: 10px 0
}

    #lst_nvrpl li {
        margin-bottom: 10px;
    }

    #lst_nvrpl li a {
        text-decoration: none;
    }

    #grp_nvrpl .close {
        display: none;
        transition: all ease 2s 0s;
    }

    #grp_nvrpl .open {
        display: inline;
    }
</style>
`

htmlt = `
    <div id="grp_nvrpl" onselectstart="return false">
        <ol id="lst_nvrpl" class="close">
            <li><a href="javascript:block()">🚫</a></li>
            <li><a href="javascript:friend()">🌐</a></li>
            <li><a href="javascript:beep()">🤬</a></li>
        </ol>
        <div id="btn_nvrpl">🔍</div>
    </div>
`
document.querySelector("body").innerHTML += htmlt
document.querySelector("head").innerHTML += csst

let open = false
document.getElementById("btn_nvrpl").addEventListener("click", ()=>{
    if(open){
        open = false
        document.getElementById("lst_nvrpl").className = "close"
    } else {
        open = true
        document.getElementById("lst_nvrpl").className = "open"
    }
})

let count = 0
function beep(){
    beeps = ["너 멍청해", "너 못생겼어", "너 바보야", "숙제는 했니?", "컴퓨터 그만해", "똥🟤", "tlsqkf", "너IQ 10보다 적어", "니 겨털 3m", "니 인중 5m", "너 원숭이랑 말싸움해서 짐"]
    let beep = beeps[count]
    count += 1
    if(count > beeps.length - 1){
        count = 0
    }
    alert(beep)
}

function friend(){
    alert("온라인 가상 친구 넣을 자리")
}

function block(){
    alert("사이트 막기 넣을 자리 (완성)")
}