// console.log("Testing ...");

class Cart {
    constructor(){
        this.products = []
        this.statusDelivery = ''
    }
    addToCart(product){
        this.products.push(product)
    }
    removeProductById(productId){
        return this.products.filter((product) =>{
            if(productId == product.id)
                this.products.splice(product.id - 1, 1)
        })
    }
    getSum(){
        let res = this.products.reduce((sum, product)=>{
            return sum += product.price
        }, 0)
        console.log(res)
    // For getting result as an ARRAY separately use down below
    // let result = this.products.reduce((sum, product)=>{
    //     sum.push(product.price)
    //     return sum
    // },[])
    // console.log(result)
    }
    setDelivery(delivery){
        delivery.some("Home") ? this.setDelivery += delivery : this.statusDelivery += "Shop"
    }

    checkout(){
       if(this.products !== [] && this.statusDelivery == 'Home' || this.statusDelivery == 'Shop'){
            console.log("Everything is going smoothly")
        }else{ console.log("Something went wrong")}
    }
}

let pro = new Cart()
console.log(pro);

pro.addToCart({id: 1, title: 'iphone13', price: 1000})
pro.addToCart({id: 2, title: 'SumsungFlip', price: 1200})
pro.addToCart({id: 3, title: 'RedMe', price: 800})

pro.getSum()

console.log(pro.removeProductById(3))
console.log(pro);

pro.checkout()


// class Product{

// }


// class Delivery{

// }