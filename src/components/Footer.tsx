import "./footer.css"

const Footer = () => {
  return (
    <footer className="container" style={{backgroundColor: "#552d1ed9"}}>
        <h1 className="fs-2 text-white">URUA UYO</h1>
        <form action="">
            <label htmlFor="">Get Notified of New Producs</label>
            <div>
                <input type="email" placeholder="johndoe@email.com" />
                <button className="footer-btn" type="submit">Submit</button>
            </div>
        </form>
    </footer>
  )
}

export default Footer