class MyPromise{
    constructor(callback){
        this.status = "pedding"
        
        this.callbacks = {
            then:[],
            catch:[]
        };
        callback(this.resolve.bind(this),this.reject.bind(this))
    }
    resolve(data){
        this.status==="pedding" && (this.status = "fulfilled")
        let thenCbs = this.callbacks.then;
        thenCbs.forEach(cb=>{
            cb(data)
        })
    }
    reject(err){
        this.status==="pedding" && (this.status = "rejeced") 
        let catchCbs = this.callbacks.catch;
        catchCbs.forEach(cb=>{
            cb(err)
        })
    }
    then(callback){
        this.callbacks.then.push(callback)
        return this
    }
    catch(callback){
        this.callbacks.catch.push(callback)
        return this
    }
}

function get(bool){
    return new MyPromise((resolve,reject)=>{
        setTimeout(function(){
            if(bool){
                resolve(1)
            }else{
                reject(2)
            }
            
        },2000)
    })
}
get(true).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})