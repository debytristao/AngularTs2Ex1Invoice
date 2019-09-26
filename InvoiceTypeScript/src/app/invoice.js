"use strict";
exports.__esModule = true;
/**
 * @autor Debora Tristao
 * @date 09-25-2019
 * @exercise Ts2Ex1Invoice
 */
var Invoice = /** @class */ (function () {
    /**
     * Subtotal required upon instantiation of a new invoice
     * @param subtotal Subtotal inline property within the constructor
     */
    function Invoice(subtotal) {
        this.subtotal = subtotal;
    }
    //Method calculating the discoint. I don't want this accesible outside the class
    Invoice.prototype.calculateDiscount = function () {
        //Here is my discount amount loginc
        //I also want to assign my discount percent property
        this.discountAmount = 0;
        if (this.subtotal > 200) {
            this.discountPercentage = 0.2;
        }
        else if (this.subtotal >= 100) {
            this.discountPercentage = 0.1;
        }
        else {
            this.discountPercentage = 0.0;
        }
        this.discountAmount = this.subtotal * this.discountPercentage;
    };
    /**
     * Call the private discount call method before call the total
     */
    Invoice.prototype.calculateTotal = function () {
        this.calculateDiscount();
        this.total = this.subtotal - this.discountAmount;
    };
    Invoice.prototype.getTotalMessage = function () {
        var message;
        if (this.subtotal == 0) {
            message = "No subtotal was provided";
        }
        else {
            message = "Subtotal: " + this.subtotal.toFixed(2) + "\n";
            message += "Discount Amount: " + this.discountAmount.toFixed(2) + "\n";
            message += "Total: " + this.total.toFixed(2);
        }
        return message;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
//Payground
var invoice = new Invoice(250);
invoice.calculateTotal();
console.log(invoice.getTotalMessage());
