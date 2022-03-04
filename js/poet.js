function change(getTab) {
    if (getTab == 'sp') {
        document.getElementById("tab1").style.display = 'block';
        document.getElementById("tab2").style.display = 'none';
        document.getElementById("sp").style.backgroundImage='url('+'../images/poets/sp02.png'+')';
        document.getElementById("zp").style.backgroundImage='url('+'../images/poets/zpj01.png'+')';

    } else if (getTab == 'zp') {
        document.getElementById("tab1").style.display = 'none';
        document.getElementById("tab2").style.display = 'block';
        document.getElementById("sp").style.backgroundImage='url('+'../images/poets/sp01.png'+')';
        document.getElementById("zp").style.backgroundImage='url('+'../images/poets/zpj02.png'+')';
        console.log("======");
    }
}
function last() {
    document.getElementById("zp-content1").style.display='block';
    document.getElementById("zp-content2").style.display='none';
}
function next() {
    document.getElementById("zp-content1").style.display='none';
    document.getElementById("zp-content2").style.display='block';
}
function cg() {
    document.getElementById("pc").src = "../images/poets/guxiang.png";
}

function incg() {
    document.getElementById("pc").src = "../images/poets/lu.png";
}

function jump(obj) {
    if (obj=='lu'){
        window.location.href = './countryLu.html';
    }else if (obj=='ai'){
        window.location.href = './countryAi.html';
    }else if(obj=='xu'){
        window.location.href = './countryXu.html';
    }else if(obj=='dai'){
        window.location.href = './countryDai.html';
    }

}

function back() {
    window.history.go(-1);
}