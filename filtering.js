
//FILTERING

/*
const filterBlue = document.getElementById('filterBlue');
filterBlue.onclick = function () {
var colorFiltering = products.filter(function (color) {
 return products.productColor === "blue";
  })
  


var updateFilter = document.getElementById("filterBlue");

updateFilter.onclick = function(){

    var colorSelection = document.getElementById(productColor);
    var selectedColor=[];

    for (var i = 0; i < products.length; i++) {
        if (products[i].productColor == colorSelection) {
            selectedColor.push(productColor[i]);
        }
    }
    console.log(selectedColor);

    renderDOM(selectedColor)
};

*/



/*

                const renderDOM = function (wineriesToPrint) { //we can call it another time and pass it another array to print

                    var html = "";
                //html is now empty -> "" , we will fill it up with the lines of code below 
                
                    wineriesToPrint.forEach((winery) => {
                        //html += winery.createHTML()
                        html = html + winery.createHTML();
                    })
                
                    document.getElementById("content").innerHTML = html;
                }
                
                renderDOM(wineries); //we can use this function again, we just need to specify in the brackets what to load

                */