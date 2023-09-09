

// const days = new Date().getTime()
// console.log(days);
// const previousday = new Date("june 5,2023").getTime()
// console.log(previousday);
// const totalday = days - previousday
// console.log(totalday);
// const result = totalday/1000/60/60/24
// console.log(result);




// const age = new Date().getTime()
// console.log(age);
// const birthdate = new Date("may 25,1996").getTime()
// console.log(birthdate);
// const day = age - birthdate
// console.log(day);
// const results = day/1000/60/60/24/7/4.5/12
// console.log(results);





























const div = document.querySelector('div')
const body = document.querySelector('body')

const phones = [
    {
        brand: 'Samsung',
        img: "./asset/samsung s20.avif",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Xiomi',
        img: "./asset/xiaomi note10.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: "./asset/infinix z10.jpg",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Tecno',
        img: "./asset/techno spark10.webp",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel'
    },
    {
        brand: 'Iphone',
        img: "./asset/iphone 14.webp",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel'
    },
    {
        brand: 'Oppo',
        img: "./asset/oppo f11.jpg",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Vivo',
        img: "./asset/vivo y20.png",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel'
    },
]

for(i = 0; i < phones.length; i++){
    body.innerHTML +=`<div style="border-radius: 20px; gap:10;">
<h2>brand ${phones[i].brand}</h2>
    <img src="${phones[i].img}" alt="${phones[i].brand} ${phones[i].model} img" width=200px height=200px><p>model ${phones[i].model}</p><p>ram ${phones[i].ram}gb</p>
    <p>rom ${phones[i].rom}gb</p><p>camera ${phones[i].camera}</p><button>add cart</button></div>`
}













