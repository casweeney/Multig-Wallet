import React, { useState } from 'react';

const NewTransfer = ({ createTransfer }) => {

    const [transfer, setTransfer] = useState(undefined);

    const submit = (e) => {
        e.preventDefault();

        createTransfer(transfer);
    }

    const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value});
    }

    return (
        <div>
            <h2 className="text-center">Create Transfer</h2>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <form onSubmit={(e) => submit(e)}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="amount">Amount</label>
                                <input className="form-control" type="number" min="0" id="amount" onChange={(e) => updateTransfer(e, 'amount')} />
                            </div>

                            <div className="form-group col-md-8">
                                <label htmlFor="to">To</label>
                                <input className="form-control" type="text" id="to" onChange={(e) => updateTransfer(e, 'to')}/>
                            </div>
                        </div>

                        <button className="btn btn-block btn-primary mb-2">Submit</button>
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default NewTransfer;