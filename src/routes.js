let button = document.querySelector('button');
let data = document.getElementById('data');

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.status == 404) {
            return "Not Found";
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        if (response.status == 404) {
            return "Not Found";
        }
        console.error(error);
    }
}

button.addEventListener('click', async () => {
    let dep = document.getElementById('departure').value;
    let arr = document.getElementById('arrival').value;
    let url = "https://api.svalencia.cf/route/" + dep + arr;
    let route = await getData(url);
    if (route.type == 1) {
        data.innerText = `East Ops: ${route.route0}\n\nWest Ops: ${route.route1}`;
    } else if (route.type == 2) {
        data.innerText = `North Ops: ${route.route1}\n\nSouth Ops: ${route.route0}`;
    } else if (route.type == 0) {
        data.innerText = route.route;
    } else {
        data.innerText = route;
    }
});
