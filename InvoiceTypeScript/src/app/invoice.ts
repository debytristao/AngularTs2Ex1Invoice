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
        
        
    }

}
