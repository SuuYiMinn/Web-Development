//global Variable
var roomCount = 0;
var messageCount = 0;
//function call
menuCreate();
statusCreate();
roomCreate();
messageCreate();

/*
    Content: create menu according to server return(/api/menu)
    Parameter: none
    return: view (menu)
*/
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

function statusCreate() {
  fetch("http://localhost:4001/api/status")
    .then(res => res.json())
    .then(data => {
      $("#dcount").text(data.doctor);
      $("#ncount").text(data.nurse);
      $("#bcount").text(data.bed);
    })
    .catch(error => console.log(error))
}

function roomCreate() {
  fetch("http://localhost:4001/api/roomStatus")
    .then(res => res.json())
    .then(data => {
      $("#roomTitle").text(` ${data.title}`);
      for (const iterator of data.list) {
        if (roomCount < 4) {
          let status = "";
          if (iterator.status == 0)
            status = "Active";
          if (iterator.status == 1)
            status = "Lock";
          if (iterator.status == 2)
            status = "Avaliable";
          let td = `<td>${iterator.room}</td><td>${status}</td><td>${iterator.person}</td><td class="price">$${iterator.price}</td>`;
          $("#room").append(`<tr>${td}</tr>`)
          roomCount++;
        }
      }
    })
    .catch(error => console.log(error))
}

function messageCreate() {
  fetch("http://localhost:4001/api/message")
    .then(res => res.json())
    .then(data => {
      $("#messageTitle").text(` ${data.title}`);
      for (const iterator of data.list) {
        if (messageCount < 4) {
          let message = iterator.text;
          if (iterator.vip)
            message += `<br /><ion-icon name="flag" class="colorsecondary"></ion-icon> VIP Message`
          let td = ` <td>${message}</td><td>${iterator.time}</td>`
          $("#message").append(`<tr>${td}</tr>`);
          messageCount++;
        }
      }

    })
    .catch(error => console.log(error))
}


