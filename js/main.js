let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


console.log(dataGlasses);
function dom(selector){
    return document.querySelector(selector)
}
// Hiển thị danh sách kính ra màn hình 
const showGlassesList = () =>{
    let html ="";
    dataGlasses.findIndex((value)=>{
        html+=`<div class="col-4 vglasses_items">
        <img src="${value.src}" style="width: 100%;" onlick="chooseGlasses('${value.id}')"/>

        </div>`
    },"");
    dom("#vglassesList").innerHTML = html
}
window.onload = () =>{
    showGlassesList()
}

// function glasses(){
// //B1: DOM lấy thông in từ các input
//         this.id =id;
//         this.src =src;
//         this.virtualImg = virtualImg;
//         this.brand = brand;
//         this.name = name;
//         this.color =color;
//         this.price = price;
//         this.description = description;
// }
// //B2: Tạo object chứa các thông tin trên 
// let  glasses = new Glasses (id, src, virtualImg, brand, name, color, price, description);
// console.log(glasses);

// //B3: Thêm object glasses vào array dataGlasses 
// dataGlasses.push(glasses);

// Lớp đối tượng ES6
// class Glasses {
// //constructor: dùng để khởi tạo thuộc tính cho đối tượng 
//     constructor (id, src, virtualImg, brand, name, color, price, description){
//         this.id =id;
//         this.src =src;
//         this.virtualImg = virtualImg;
//         this.brand = brand;
//         this.name = name;
//         this.color =color;
//         this.price = price;
//         this.description = description;
//     }
// B4: In ra màn hình 
    
    // function display(dataGlasses){
    // const html= dataGlasses.reduce((result, glasses)=>{
    //     return result +`

 
    
//     // Phương thức,viết trực tiếp bên trong constructor
// getInfo(){
//     console.log(
//         `id: ${this.id}
//         src: ${this.src}
//         virtualImg: ${this.virtualImg}
//         brand: ${this.brand}
//         name: ${this.name}
//         color: ${this.color}
//         price: ${this.price}
//         description: ${this.description}
//         `
// 

window.chooseGlasses= (Id) =>{
    dataGlasses.findIndex((value)=>{
        if (Id == value.id){
            dom("#avatar").innerHTML = `<img src="${value.virtualImg}">`;
            dom("#glassesInfo").innerHTML =`
            <h2>${value.name} - ${value.brand} (${value.color})  
            </h2>
            <span class="bg-danger text-blue">
             $${value.price}
            </span>
            <span class="text-success">Stocking
            </span>
            <p>${value.description}</p>`
            dom ("#glassessInfo").style.display = "block"
                    }
                },"")
            }
