/*import{
    womenclothes
} from '../js/modules.js'*/
axios.get("https://fakestoreapi.com/products").then(function(respons){
    
const sextionNewsletter = document.querySelector(".sextion-newsletter");
const container = document.createElement("div");
container.classList.add("container");
sextionNewsletter.prepend(container)
const row = document.createElement("div")
row.classList.add("row")
container.append(row)
const sextionNewsletterNewsletter = document.createElement("div");
sextionNewsletterNewsletter.classList.add("sextion-newsletter__newsletter")
sextionNewsletterNewsletter.classList.add("mb-5")
row.appendChild(sextionNewsletterNewsletter)
const rowTwo = document.createElement("div")
rowTwo.classList.add("row")
rowTwo.classList.add("flex-row")
rowTwo.classList.add("justify-content-between")
container.append(rowTwo)
const sectionNewsletterNames = document.createElement("div");
sectionNewsletterNames.classList.add("sextion-newsletter__names")
sectionNewsletterNames.classList.add("d-flex")
sectionNewsletterNames.classList.add("mb-3")
rowTwo.append(sectionNewsletterNames)
var products = ["all products","men's clothing","jewelery","electronics","women's clothing"];

products.forEach(function(list){
    var sectionNewsletterNamesText = document.createElement("div");
    sectionNewsletterNamesText.classList.add("sextion-newsletter__names__text")
    sectionNewsletterNamesText.innerHTML=list;
    sectionNewsletterNames.append(sectionNewsletterNamesText)
})

console.log();
var buttonOne = document.createElement("div")
buttonOne.classList.add("divB")
buttonOne.innerHTML=`<button type="button" class="btn btn-primary d-flex btn-product bt3"><div class="btnss me-1"><img src="img/arow.png" alt=""></div><div class="fil">filter</div></button>
<div class="row mb-5">`
rowTwo.append(buttonOne)
const rowTree = document.createElement("div")
rowTree.classList.add("row")
rowTree.classList.add("mb-5")
container.append(rowTree)


        var clik = false;
        var click2 = false
        
        
            
                       
        
        sectionNewsletterNames.children[1].addEventListener("click",function(item){
            axios.get('https://fakestoreapi.com/products/category/jewelery').then(function(respons){
                var user2 = respons.data;
                user2.forEach(function(user3){
                    
                
                //console.log(user3);
                const col = document.createElement("div")
                        col.classList.add("col-lg-3")
                        col.classList.add("col-md-6")
                        col.classList.add("menclass")
                        
                        rowTree.prepend(col)
                        const sectionNewsletterNamesItems=document.createElement("div")
                        sectionNewsletterNamesItems.classList.add("section-newsletter__names__items")
                        sectionNewsletterNamesItems.classList.add("position-relative")
                        col.prepend(sectionNewsletterNamesItems)
                        const imgSection = document.createElement("img")
                        imgSection.src=user3.image
                        sectionNewsletterNamesItems.prepend(imgSection)
                        const namesTtemsTitle = document.createElement("h2")
                        namesTtemsTitle.classList.add("names__items__title")
                        namesTtemsTitle.innerHTML=user3.title
                        imgSection.after(namesTtemsTitle)
                        const namesitemscontent = document.createElement("div")
                        namesitemscontent.classList.add("names__items__content")
                        namesitemscontent.classList.add("d-flex")
                        namesitemscontent.classList.add("justify-content-between")
                        sectionNewsletterNamesItems.append(namesitemscontent)
                        const namesItemsContentCategoria = document.createElement("div")
                        namesItemsContentCategoria.classList.add("names__items__content__categoria")
                        namesitemscontent.prepend(namesItemsContentCategoria)
                        namesItemsContentCategoria.innerHTML=user3.category
                        const namesItemsContentCostOld = document.createElement("div")
                        namesItemsContentCostOld.classList.add("names__items__content__costOld")
                        namesItemsContentCostOld.innerHTML=user3.price
                        namesItemsContentCategoria.after(namesItemsContentCostOld)
            })
        })
        sectionNewsletterNames.children[4].addEventListener("click",function(item2){

            if(clik===false && data2.category==="women's clothing"){
                clik=true
                console.log(click2===false);
                elements()
            }
            
        })})

        sectionNewsletterNames.children[4].addEventListener("click",function(item){
            if(clik===false){
                clik=true
            axios.get('https://fakestoreapi.com/products/category/electronics').then(function(respons){
                var user2 = respons.data;
                user2.forEach(function(user3){
                    
                        
                
                //console.log(user3);
                const col = document.createElement("div")
                        col.classList.add("col-lg-3")
                        col.classList.add("col-md-6")
                        rowTree.prepend(col)
                        const sectionNewsletterNamesItems=document.createElement("div")
                        sectionNewsletterNamesItems.classList.add("section-newsletter__names__items")
                        sectionNewsletterNamesItems.classList.add("position-relative")
                        col.prepend(sectionNewsletterNamesItems)
                        const imgSection = document.createElement("img")
                        imgSection.src=+user3.image
                        sectionNewsletterNamesItems.prepend(imgSection)
                        const namesTtemsTitle = document.createElement("h2")
                        namesTtemsTitle.classList.add("names__items__title")
                        namesTtemsTitle.innerHTML=+user3.title
                        imgSection.after(namesTtemsTitle)
                        const namesitemscontent = document.createElement("div")
                        namesitemscontent.classList.add("names__items__content")
                        namesitemscontent.classList.add("d-flex")
                        namesitemscontent.classList.add("justify-content-between")
                        sectionNewsletterNamesItems.append(namesitemscontent)
                        const namesItemsContentCategoria = document.createElement("div")
                        namesItemsContentCategoria.classList.add("names__items__content__categoria")
                        namesitemscontent.prepend(namesItemsContentCategoria)
                        namesItemsContentCategoria.innerHTML=user3.category
                        const namesItemsContentCostOld = document.createElement("div")
                        namesItemsContentCostOld.classList.add("names__items__content__costOld")
                        namesItemsContentCostOld.innerHTML=+user3.price
                        namesItemsContentCategoria.after(namesItemsContentCostOld)
                        console.log(col);
            })
        })
        sectionNewsletterNames.children[4].addEventListener("click",function(item2){

            if(clik===false && data2.category==="women's clothing"){
                clik=true
                console.log(click2===false);
                elements()
            }
            
        })}
    })



        sectionNewsletterNames.children[0].addEventListener("click",function(item2){

            if(data2.category==="women's clothing" || data2.category==="men's clothing"
             || data2.category==="electronics" || data2.category==="jewelery"){
                //clik=true
                console.log(click2===false);
                elements()
            }
            
        })
 
    });
   



