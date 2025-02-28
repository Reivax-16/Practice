export default function register(){
    return(
        <div className="registration-container">
      <div className="registration-box">
        <h2 className="registration-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="name" placeholder="Enter your full name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="register-button">Sign Up</button>
          <p><br></br><a href="/login">Already have an account?</a></p>
        </form>
      </div>
    </div>
    )
}