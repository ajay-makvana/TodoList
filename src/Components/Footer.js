import React from 'react'

export const Footer = () => {
    let footerstyle = 
    {
            position: "sticky",
            left: "0px",
            bottom: "0px",
            width: "100%",
            textAlign: "center",
    }
    return (
        <footer className="footer mt-auto py-3 bg-light" style={footerstyle}>
            <div className="container text-center">
                By <small>&copy;</small>TodoList
            </div>
        </footer>
    )
}
