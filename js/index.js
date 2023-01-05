const btnContainer = document.querySelector(".btn-container")
const section = document.querySelector(".section-center")


const categoryList = menu.reduce((acc,cur) => {
    if(!acc.includes(cur.category))
    acc.push(cur.category)
    return acc
    
},["All"])

const categoryButton = () => {
    btnContainer.innerHTML = categoryList.map(category => {
        let active = ""
        if(category == "All") {
            active = "active"
        }
        return `<button onclick ="categoryClick(this)" class="btn btn-outline btn-item${active}"
        data-name=${category}>${category}</button>`
        
    }).join("")
       
}

const categoryClick = (th) => {
    document.querySelectorAll(".btn").forEach(btn => {
        btn.classList.remove("active")
    })
    th.classList.add("active")

    const clickMenu = (th.dataset.name != "All") ? menu.filter(each => {
        if(each.category === th.dataset.name) {
            return each
        }
    }) : menu
    loadMenu(clickMenu)
}

const loadMenu = (content) => {
    section.innerHTML = content.map(item => {
        return `
        <div class="menu-items col-lg-6 col-sm12">
           <img src=${item.img} alt=${item.title} class="photo img-fluid img-thumnail d-bloc w-100"/>
          <div class="menu-info">
            <div class="menu-title>"
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
           <div class="menu-text">${item.desc}</div>
           </div>
        </div>        
        `
    }).join("")
}

loadMenu(menu)
categoryButton()