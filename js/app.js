/*const btnApi = document.querySelector("#btnApi");
let advice = document.querySelector(".advice p");

btnApi.addEventListener('click', adviseCall);

function adviseCall() {
    const api = "https://api.adviceslip.com/advice";

    fetch(api)
        .then(function (response) {
            //console.log(response);
            let data = response.json();
            return data;
        })
        .then(function (data) {
            // console.log(data.slip.advice);
            advice.textContent = data.slip.advice;
        })
        .catch(function (error) {
            advice.textContent = "An error has ocurred";
        })
}

*/