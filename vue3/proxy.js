// // 声明要响应式的对象,Proxy会自动代理
// const data = {
//   name: "banggan",
//   age: 26,
//   info: {
//     address: "北京" // 需要深度监听
//   },
//   nums: [10, 20, 30]
// }; 
// const proxyData = new Proxy(data, {
//   get(target,key,receive){ 
//     debugger
//     // 只处理本身(非原型)的属性
//     const ownKeys = Reflect.ownKeys(target)
//     if(ownKeys.includes(key)){
//       console.log('get',key) // 监听
//     }
//     const result = Reflect.get(target,key,receive)
//     return result
//   },
//   set(target, key, val, reveive){
//     // 重复的数据，不处理
//     const oldVal = target[key]
//     if(val == oldVal){
//       return true
//     }
//     const result = Reflect.set(target, key, val,reveive)
//     console.log('set', key, val)
//     return result
//   },
//   deleteProperty(target, key){
//     const result = Reflect.deleteProperty(target,key)
//     console.log('delete property', key)
//     console.log('result',result)
//     return result
//   }
// })
// proxyData.name;
// proxyData.age = '20';
// proxyData.newPropKey = '新属性';
// proxyData.info.tel = '88888888';
// delete proxyData.name

let map = new Map([['company','58']])
let mapProxy = new Proxy(map, {
  get(target, key, receiver) {
    var value = Reflect.get(...arguments)
     console.log("取值:",...arguments)
    return typeof value == 'function' ? value.bind(target) : value
  }
})
mapProxy.get("company")