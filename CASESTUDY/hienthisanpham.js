let arrayProduct = []
arrayProduct.push(new Product("Skincare", "" , "Perfect One", 500000, 100, "Top 10 skincare 2021!!!"))
arrayProduct.push(new Product("Diet tea", "" ,"Orihiro", 400000, 100, "Hieu qua sau 1 tuan su dung"))
arrayProduct.push(new Product("Diet tea Beauty", "" , "Orihiro", 400000, 100, "Hieu qua sau 1 tuan su dung"))
arrayProduct.push(new Product("Collagen", "" ,"Eisai", 450000, 100, "Nhan sac vuot thoi gian"))
arrayProduct.push(new Product("Thuc pham chuc nang Pakkun","" ,  "Slevty", 450000, 100, "Bo sung nguon dinh duong"))
arrayProduct.push(new Product("Skin Aqua", "" , "Rotoh", 300000, 100, "Dong hanh cung mua he ruc ro"))
arrayProduct.push(new Product("Shirojun lotion", "" , "Hadalabo", 400000, 100, "Nhan sac vuot thoi gian"))

function displayProduct(index) {
    let data = "<table><tr><td><b>Name</b></td>"
        + "<td><b>Brand</b></td>"
        + "<td><b>Price</b></td>"
        + "<td><b>Quantity</b></td>"
        + "<td><b>Description</b></td>"
        + "<td id='amount'><b>" + arrayProduct.length + " products</b></td></tr>"
    for (let i = 0; i < arrayProduct.length; i++) {
        data += "<tr>"
        data += "<td>" + arrayProduct[i].name + "</td>"
        data += "<td>" + arrayProduct[i].brand + "</td>"
        data += "<td>" + arrayProduct[i].price + "</td>"
        data += "<td>" + arrayProduct[i].quantity + "</td>"
        data += "<td>" + arrayProduct[i].description + "</td>"
        data += "<td><button onclick='editProduct(" + i + ")''>Edit</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")''>Delete</button></td>"
        data += "<td><button onclick='addToCart(" + i + ")''>Add to cart</button></td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("result").innerHTML = data
}

function addToCart(index) {
    console.log(index);
    let a = arrayProduct[index]
    cartProduct.push(a)
    displayCart()
}

function addProduct() {
    let name = document.getElementById("addName").value
    let price = document.getElementById("addPrice").value
    document.getElementById("addName").value = ""
    document.getElementById("addPrice").value = ""
    displayProduct()
}

function editProduct(index) {
    let newProduct = prompt("Nhập sản phẩm bạn muốn sửa: ", arrayProduct[index])
    arrayProduct[index] = newProduct
    displayProduct()
}

function editProduct(index) {
    document.getElementById("editName").value = arrayProduct[index].name
    document.getElementById("editPrice").value = arrayProduct[index].price
    value = index
}

function replace() {
    let editName = document.getElementById("editName").value
    let editPrice = document.getElementById("editPrice").value
    editProduct = arrayProduct[value]
    editProduct.name = editName
    editProduct.price = editPrice
    document.getElementById("editName").value = ""
    document.getElementById("editPrice").value = ""
    displayProduct()
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn xóa sản phẩm này?")) {
        arrayProduct.splice(index, 1)
    }
    displayProduct()
}

function checkUser() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("pass").value
    if(user === "admin" && pass === "admin") {
        alert("Đăng nhập thành công")
    } else {
        alert("Đăng nhập thất bại")
        return false
    }
}