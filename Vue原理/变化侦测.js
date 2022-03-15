function defineReactive(data,key,value){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get(){
            return value
        },
        set(newVal){
           if(newVal===value){
               return
           }
           data[key] = newVal
        }
    })
}