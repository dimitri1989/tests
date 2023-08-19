
function women(){
    axios.get("https://fakestoreapi.com/products").then(function(respons){ 
        var user = respons.data;
    user.forEach(data2 => {
    if(data2.category==="women's clothing"){
        const col = document.createElement("div")
        col.classList.add("col-lg-3")
        col.classList.add("col-md-6")
        rowTree.prepend(col)
        const sectionNewsletterNamesItems=document.createElement("div")
        sectionNewsletterNamesItems.classList.add("section-newsletter__names__items")
        sectionNewsletterNamesItems.classList.add("position-relative")
        col.prepend(sectionNewsletterNamesItems)
        const imgSection = document.createElement("img")
        imgSection.src=data2.image
        sectionNewsletterNamesItems.prepend(imgSection)
        const namesTtemsTitle = document.createElement("h2")
        namesTtemsTitle.classList.add("names__items__title")
        namesTtemsTitle.innerHTML=data2.title
        imgSection.after(namesTtemsTitle)
        const namesitemscontent = document.createElement("div")
        namesitemscontent.classList.add("names__items__content")
        namesitemscontent.classList.add("d-flex")
        namesitemscontent.classList.add("justify-content-between")
        sectionNewsletterNamesItems.append(namesitemscontent)
        const namesItemsContentCategoria = document.createElement("div")
        namesItemsContentCategoria.classList.add("names__items__content__categoria")
        namesitemscontent.prepend(namesItemsContentCategoria)
        namesItemsContentCategoria.innerHTML=data2.category
        const namesItemsContentCostOld = document.createElement("div")
        namesItemsContentCostOld.classList.add("names__items__content__costOld")
        namesItemsContentCostOld.innerHTML=data2.price
        namesItemsContentCategoria.after(namesItemsContentCostOld)


    }
})

})

}

var womenclothes = women()
export{
    womenclothes
}