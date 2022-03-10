const btnRandomAdvice = document.querySelector("#btnRandomAdvice");
const advice = document.querySelector(".advice");

function adviseCall() {
    const api = "https://api.adviceslip.com/advice";

    fetch(api)
        .then(function (response) {
            //console.log(response);
            let data = response.json();
            return data;
        })
        .then(function (data) {
            advice.innerHTML = "";
            // console.log(data.slip.advice);
            //advice.textContent = data.slip.advice;
            advice.insertAdjacentHTML("beforeend", `
                <h5 class="adviceId">ADVICE #${data.slip.id}</h5>
                <p class="adviceTxt">${data.slip.advice}</p>
            `)
        })
        .catch(function (error) {
            advice.textContent = "An error has ocurred";
        })
}
btnRandomAdvice.addEventListener('click', adviseCall);