export default function login(){
    return(
            <div className="login-container">
                <div className="login-box">
                    <h2 className="login-title">Login</h2>
                    <form>
                        <div className="input-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <p className="message">Not registered? <a href="/register">Create an account</a></p>
                    </form>
                </div>
            </div>
    )}
