let obj1 = {
    "0" : "Crazy",
    "1" : "Amazing",
    "2" : "Fire"
}

let obj2 = {
    "0" : "Engine",
    "1" : "Foods",
    "2" : "Garments"
}

let obj3 = {
    "0" : "Bros",
    "1" : "Limited",
    "2" : "Hub"
}

c1 = math.floor(math.random()*3);
c2 = math.floor(math.random()*3);   
c3 = math.floor(math.random()*3);

shop_name = obj1[c1] + obj2[c2] + obj3[c3];
console.log(shop_name); 