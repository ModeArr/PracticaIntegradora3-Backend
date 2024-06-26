export default class ProductDTO {
    constructor(product){
        this.title = product.title ?? "", 
        this.description = product.description ?? "", 
        this.price = product.price ?? 0, 
        this.thumbnail = product.thumbnail ?? [], 
        this.code = product.code ?? "", 
        this.stock = product.stock ?? 0,
        this.category = product.category ?? "",
        this.status = product.status
        this.owner = product.owner ?? ""
    }
}