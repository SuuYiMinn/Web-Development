//Global Variable
//function call
menuCreate();

createDoctor();

function menuCreate() {
    fetch("http://localhost:4001/api/menu")
        .then(res => res.json())
        .then(data => {
            let menu = data.tag;
            for (const iterator of menu) {
                let html = `<span>${iterator.icon} ${iterator.text}</span>`
                $("#logo").after(html)
            }
            $("#phone").text(data.phone)
        })
        .catch(error => console.log(error))
}

function createDoctor() {
    fetch("http://localhost:4001/api/doctor")
        .then(res => res.json())
        .then(data => {
            let doctor = data.list;
            for (const iterator of doctor) {

                console.log(iterator.name);

                let card = ` 
           <div class="card">
            <div class="img">
                <img src="${iterator.profile}" >
            </div>
            <div class="detail">
                <p class="text">
                    <span class="value"> ${iterator.name}</span>
                </p>
                 <p class="text">
                    <span class="value"> Specialist in ${iterator.specialist}</span>
                </p>
                <p class="text">
                    <span class="value"> ${iterator.time}</span>
                </p>
            </div>
        </div>
        `;

                $(".list").append(card);
            }
        })
        .catch(error => console.log(error))
}