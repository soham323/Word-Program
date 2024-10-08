import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div style={{ height: '55px' }}>
                {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>}
            </div>
        </>
    )
}
