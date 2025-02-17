const products = [];

module.exports = class Product{
    constructor(t) {
        this.title = t; //Created a object title inside class product
    }

    save() {  //function to save title , this can be called first need to create  a  object and then 
        products.push(this); 
    }

    static fetchAll() {  // static keyword - so that this fuction get called directlt on class call
        return products;
    }
}