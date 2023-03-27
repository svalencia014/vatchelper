let button = document.querySelector('button');

button.addEventListener('click', () => {
    let dep = document.getElementById('departure').value;
    let arr = document.getElementById('arrival').value;
    console.log(dep, arr);
});