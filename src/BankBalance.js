import React from "react";
import BankForm from "./BankForm";
import { useState } from "react";

export default function BankBalance () {
    const [total,setTotal] = useState(12000);
    const [deposit,setDeposit] = useState(0);
    const [withdraw,setWithdraw] = useState(0);
    const [showText,setShowText] = useState(false);

    function handleDeposit(userInput) {
        setDeposit(userInput);
    }
    function handleWithdraw(userInput) {
        setWithdraw(userInput);
        setShowText("")
    }
    
    function calculateTotal() {
        let newTotal = total+deposit-withdraw
        setTotal(newTotal);
        setDeposit("");
        setWithdraw("");
        if(newTotal<0){
            alert("You have negative balance.")
        }
        setShowText("")
    }
    
    function calculateInterest() {
        let newTotal = total + Math.abs(0.2*total)
        setTotal(newTotal);
        setShowText("Interest calculated.")
    }
    function calculateBankFee() {
        let newTotal = total - 50;
        setTotal(newTotal);
        if(newTotal<0){
            alert("You have negative balance.")
        }        
        setShowText("Charge fees applied")
    }
    return(
        <div>
            <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                <div className="card-header bg-transparent border-0 text-center text-uppercase mb-8">
                    <h3>Your current balance</h3>
                    <p>{total}</p>
                </div>
                {showText !=="" && <span className="text text-success">{showText}</span>}
                <div className="card-body">
                    <BankForm 
                        handleDeposit={handleDeposit} 
                        handleWithdraw={handleWithdraw} 
                        calculateTotal={calculateTotal}
                        calculateInterest = {calculateInterest}
                        calculateBankFee = {calculateBankFee}
                        showText={showText}
                    />            
                </div>
            </div>
        </div>
    )
}