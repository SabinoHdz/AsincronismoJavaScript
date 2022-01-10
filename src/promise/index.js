const somethingWillHappen=()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve('Hey');
        }else{
            reject('ups');
        }
    });
};

somethingWillHappen()
.then(response=>console.log(response))
.catch(error=>console.log(error));

const somethingWillHappen2=()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 3000);
        }else{
           const error=new Error('Woops');
           reject(error)
        }
    });
};
somethingWillHappen2()
.then(response=>console.log(response))
.catch(error=>console.error(error));


Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response=>console.log('Arrays of results '+ response))
.catch(err=>console.log(err));