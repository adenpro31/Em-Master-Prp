
function setName() {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
    document.getElementById("username").innerText = name;
}

window.onload = function () {
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        const savedName = localStorage.getItem("username");
        if (savedName) document.getElementById("username").innerText = savedName;
    }, 2500);
};
