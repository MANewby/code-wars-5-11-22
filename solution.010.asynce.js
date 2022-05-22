const badSmoothie = async() => {
    try{
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');

        throw 'broken!'

        return ba
    } catch(err){
        console.log(err)

        throw 'its broken!'
    }
}




const fruits = ['peach', 'pineapple', 'strawberry'];
const smoothie = fruits.map(v => getFruit(v));
/// careful when using async await in a map, or for each loop cause it wont pause the function in THIS context, 
//use traditional for loop each pasue step in the loop)