import React from 'react';

const Header = ({ approvers, quorum }) => {
    return (
        <header className="text-center p-4">
            <h4>Approvers:</h4>
            <div className="card card-body mb-3">{approvers.join(', ')}</div>
            <h4><span className="badge badge-pill badge-info">Quorum: <span className="badge badge-light">{quorum}</span></span></h4>
            
        </header>
    )
}

export default Header;