import React from 'react'
import { ethers } from 'ethers';

const Buy = ({state}) => {

    const buyChai=async(e)=>{
        e.preventDefault();
        const {contract} = state;
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        console.log(name, message,contract);
        const amount={value: ethers.parseEther('0.001')};
        const transaction = await contract.buyChai(name,message,amount);
        await transaction.wait();
        console.log('transaction done');
       
    }
  return (
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                      
                        <form onSubmit={buyChai}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <input type="text" class="form-control" id="message" placeholder="Enter Message"/>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary" disabled={!state.contract}>Pay</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   


 
    )
}

export default Buy
 {/* </div>
<form onSubmit={buyChai} class="p-4 border rounded bg-light mx-auto " >
    <div class="mb-3">
        <label for="name" class="form-label text-primary fw-bold">Name</label>
        <input type="text" id="name" class="form-control border-primary text-secondary" placeholder="Enter your name" required />
    </div>
    <div class="mb-3">
        <label for="message" class="form-label text-primary fw-bold">Message</label>
        <input type="text" id="message" class="form-control border-primary text-secondary" placeholder="Enter your message" required />
    </div>
    <button type="submit" class="btn btn-success w-100">Pay</button>
</form> */}