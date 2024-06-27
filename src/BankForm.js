import React from "react";
import { useState } from "react";

export default function BankForm(props){
    const [display,setDisplay] = useState("deposit")

    function showForm(str){
        setDisplay(str)
    }
    return(
        <div>
            <button className="btn btn-sm btn-primary" onClick={()=>showForm("deposit")}>Deposit</button>
            <button className="btn btn-sm btn-warning ml-1" onClick={()=>showForm("withdraw")}>Withdraw</button>
            <button className="btn btn-sm btn-success ml-1"onClick={()=>props.calculateInterest()}>Add Interest</button>
            <button className="btn btn-sm btn-danger ml-1"onClick={()=>props.calculateBankFee()}>Charge bank fees</button>
            <div className="mt-4 mb-1">
               { display ==="deposit" && <div className="form-group mb-3">
                    <label for="deposit" className="mb-1">Deposit Money</label>
                    <input name="deposit" type="number" className="form-control" placeholder="enter money to deposit" 
                            value={props.deposit} 
                            onChange={(event) => props.handleDeposit(parseFloat(event.target.value))}
                    />  
                
                </div>}

                { display === "withdraw" && <div className="form-group mb-3">
                    <label for="withdraw" className="mb-1">Withdraw money</label>
                    <input name="withdraw" type="number" className="form-control" placeholder="enter money to withdraw" 
                            value={props.deposit} 
                            onChange={(event) => props.handleWithdraw(parseFloat(event.target.value))}
                    />                
                </div>}
                    <p className="text-center mb-0">
                        <button onClick={()=> props.calculateTotal()} className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit"> Submit </button>
                    </p>   
            </div> 
        </div>
    )
}