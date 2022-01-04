
var arr=[];
menu();
let senddata = document.getElementById("menu");
async function menu()
{
    try{
        let responce = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data = await responce.json();
    let maindata = data.categories;
    console.log(maindata)
    getdata(maindata);

    }
    catch(err)
    {
        console.log("this error may be due to spelling",err);
    }
}


function getdata(xzy)
{
    xzy.forEach(function(elem,index)
    {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src= elem.strCategoryThumb;
        let nameofitem = document.createElement("p");
        nameofitem.innerText=elem.strCategory ;
        let butt = document.createElement("button");
        butt.addEventListener("click",function(index)
        {

            let atom = document.getElementById("list");
            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src= elem.strCategoryThumb;
            let nameofitem = document.createElement("p");
            nameofitem.innerText=elem.strCategory ;
            div.append(img,nameofitem);
            atom.append(div)
            arr.push(elem.strCategory);
            localStorage.setItem("foodlist",JSON.stringify(arr))
        })
        butt.innerText="Add to Cart";

        div.append(img,nameofitem,butt);
        senddata.append(div);
    });
}

    
    




/*
let priceofitem = document.createElement("p");
        priceofitem.innerText= getvalue(100,500);
function getValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
