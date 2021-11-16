console.log(DATABASE.length);

let mainContentWrapper = document.querySelector("#mainContentWrapper")


function FilterDonor(grp) {
    let content = ''
 DATABASE.filter((item) => item.blood == grp)
    ?.map((item, idx) => {
      content += `<div class="box">
    <p>${item
        ?.name}</p>
    <p>${item
          ?.blood}</p>
    <p>${item
            ?.phone}</p>
    <a target="_blank" href="${item
              ?.facebook}">${item
                ?.facebook}</a>
</div>`
    })

  mainContentWrapper.innerHTML = content

}
