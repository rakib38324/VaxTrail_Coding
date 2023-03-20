function vaxTrail(data){
    
    // new array
    var A = [];
    var B = [];
    var C = [];
    var D = [];

    for(var i=0; i<data.length; i++){

        //age range 20 to 30 and temperature less than 100
        if(data[i].age >= 20 && data[i].age <= 30 && data[i].temperature < 100){
            A.push(data[i])
        }

        //age range 31 to 40 and temperature less than 100
        else if(data[i].age >= 31 && data[i].age <= 40 && data[i].temperature < 100){
            B.push(data[i])
        }

        //age range 41 to 50 and temperature less than 100
        else if(data[i].age >= 41 && data[i].age <= 50 && data[i].temperature < 100){
            C.push(data[i])
        }

        //others
        else{
            D.push(data[i])
        }
    }

    return {
        A,
        B,
        C,
        D
    };
}



const result = vaxTrail([
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 88 },
    { name: 'sunil', age: 32, temperature: 95 },
    { name: 'Biplap', age: 22, temperature: 68 },
    { name: 'sunil', age: 41, temperature: 96 },
    { name: 'Biplap', age: 31, temperature: 102 },
    { name: 'Biplap', age: 39, temperature: 102 },
    { name: 'Biplap', age: 35, temperature: 102 },
    ])

console.log(result)