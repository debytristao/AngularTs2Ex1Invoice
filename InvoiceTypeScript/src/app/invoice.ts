/**
 * @autor Debora Tristao
 * @date 09-25-2019
 * @exercise Ts2Ex1Invoice
 */
export class Invoice {

    discountPercentage : number;
    discountAmount : number;
    total : number;
    

    /**
     * Subtotal required upon instantiation of a new invoice
     * @param subtotal Subtotal inline property within the constructor
     */
    constructor(public subtotal : number){
        
    }
    //Method calculating the discoint. I don't want this accesible outside the class
    private calculateDiscount(){
        //Here is my discount amount loginc
        //I also want to assign my discount percent property
        
        this.discountAmount = 0;

        if(this.subtotal > 200){
            this.discountPercentage = 0.2
        }
        else if (this.subtotal >= 100 ){
            this.discountPercentage = 0.1
        }
        else{
            this.discountPercentage = 0.0
        }
        this.discountAmount = this.subtotal * this.discountPercentage;
    }
    /**
     * Call the private discount call method before call the total
     */
    public calculateTotal(){
        this.calculateDiscount();
        this.total = this.subtotal - this.discountAmount;
    }

    public getTotalMessage():string{
        let message : string;
        if(this.subtotal == 0){
            message = "No subtotal was provided";
        }else{
            message = `Subtotal: ${this.subtotal.toFixed(2)}\n`;
            message += `Discount Amount: ${this.discountAmount.toFixed(2)}\n`;
            message += `Total: ${this.total.toFixed(2)}`;
        }

        return message;
    }

}
//Payground
let invoice : Invoice = new Invoice(250);
invoice.calculateTotal();
console.log(invoice.getTotalMessage());