let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood = 'create';
let tmp;

//  totalsum
function totalsum() {
    if (price.value != '') {
        total.innerHTML =
            (+price.value + +taxes.value + +ads.value) - +discount.value;

        total.style.background = 'rgb(166, 48, 87)';
    }
    else {
        total.innerHTML = '';
        total.style.background = '#fff';
    }
}

// create product
let datapro;
if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product)
} else {
    datapro = [];
}


submit.onclick = function () {
    // object
    let newpro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.value,
        count: count.value,
        category: category.value.toLowerCase(),
    }



    // count
    if (title.value != '' &&
        price.value != '' &&
        category.value != '' &&
        newpro.count < 100) {
        if (mood = 'create') {
            if (newpro.count > 1) {
                for (let i = 0; i < newpro.count; i++) {
                    datapro.push(newpro);
                }
            }
            else {
                datapro.push(newpro);
            }
        }
        else {
            datapro[tmp] = newpro;
            mood = 'create';
            submit.innerHTML = 'create';
            count.style.display = 'block';
        }
        cleardata()
    }

showdata()
// save localstorage
localStorage.setItem('product', JSON.stringify(datapro))
showdata()
}


// clear inputs
function cleardata() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}


// read
function showdata() {
    totalsum()
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
         <tr>
                <td>${i + 1}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
              <td><button onklick="updatedata(${i})" id="update">update</button></td>
              <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
         </tr>     
         ` }

    document.getElementById('tbody').innerHTML = table;

    let btndelete = document.getElementById('deleteall');

    if (datapro.length > 0) {
        btndelete.innerHTML = `
    <button onclick="deleteall()">delete All( ${datapro.length})</button>
 `
    }
    else {

        btndelete.innerHTML = '';
    }
}
showdata()



// delete  
function deletedata(i) {
    datapro.splice(i, 1)
    localStorage.product = JSON.stringify(datapro);
    showdata()

}
function deleteall() {
    localStorage.clear()
    datapro.splice(0)
    showdata()
}
// update
function updatedata(i) {
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    totalsum()
    count.style.display = 'none';
    category.value = datapro[i].category;
    submit.innerHTML = 'update';
    mood = 'update';
    let tmp = i;
    scroll({
        top: 0,
        behavior: 'smooth',

    })

}

// search
let searchmood = 'title';

function getsearchmood(id) {
    let search = document.getElementById('search');
    if (id == 'searchtitle') {
        searchmood = 'title';
    }
    else {
        searchmood = 'category';

    }
    search.placeholder = 'search by ' + searchmood;
    search.focus()
    search.value= '';
    showdata()

}
function searchdata(value) {
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        if (searchmood == 'title') {
            if (datapro[i].title.includes(value.toLowerCase())) {
                table += `
                <tr>
                       <td>${i}</td>
                       <td>${datapro[i].title}</td>
                       <td>${datapro[i].price}</td>
                       <td>${datapro[i].taxes}</td>
                       <td>${datapro[i].ads}</td>
                       <td>${datapro[i].discount}</td>
                       <td>${datapro[i].total}</td>
                       <td>${datapro[i].category}</td>
                     <td><button onklick="updatedata(${i})" id="update">update</button></td>
                     <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
                </tr>     
                ` }

        }


        else {
            if (datapro[i].category.includes(value.toLowerCase())) {
                table += `
            <tr>
                   <td>${i}</td>
                   <td>${datapro[i].title}</td>
                   <td>${datapro[i].price}</td>
                   <td>${datapro[i].taxes}</td>
                   <td>${datapro[i].ads}</td>
                   <td>${datapro[i].discount}</td>
                   <td>${datapro[i].total}</td>
                   <td>${datapro[i].category}</td>
                 <td><button onklick="updatedata(${i})" id="update">update</button></td>
                 <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
            </tr>     
            ` }

        }
    }

    document.getElementById('tbody').innerHTML = table;

}
// clean data 

