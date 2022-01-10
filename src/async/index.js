const dosomethingAsync=()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            setTimeout(() => {
                resolve('Se resolvio la promesa')
            }, 3000);
        }else{
            reject(new Error('Test Error'));
        }
    });
}
const doSomething=async()=>{
    const something=await dosomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething();
console.log('After');

const  anotherfunction=async()=>{

    try {
        const something=await dosomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
        
    }
}
console.log('Before 2');
anotherfunction();
console.log('After 2');