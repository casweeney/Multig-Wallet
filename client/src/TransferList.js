import React from 'react';

const TransferList = ({ transfers, approveTransfer }) => {
    return (
        <div>
            <h2 className="text-center mt-4">Transfers</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>To</th>
                            <th>Approvals</th>
                            <th>Sent status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transfers.length > 0 && transfers.map((transfer) => {
                            return (
                                <tr key={transfer.id}>
                                    <td>{transfer.id}</td>
                                    <td>{transfer.amount}</td>
                                    <td>{transfer.to}</td>
                                    <td>
                                    
                                        <button className="btn btn-success btn-sm" onClick={() => approveTransfer(transfer.id)}>
                                            <span className="badge badge-light">{transfer.approvals}</span> Approve
                                        </button>
                                    </td>
                                    <td>{transfer.sent ? 'Yes' : 'No'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TransferList;