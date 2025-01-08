import React from "react";
import './SignUp.css'

const SignUp = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showpassword, setShowPassword] = React.useState(false);
  const [action, setAction] = React.useState(false);

  const TogglePasswordVisibility = () => {
    setShowPassword(!showpassword);
  };

  const ToggleSwitchingAccount = () => {
    setAction(!action);
  };

  const getActionText = () => {
    return action ? "Login" : "Sign up";
  };

  const resetFields = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  const handleSignUp = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/;
    if (!regex.test(password)) {
      alert("⚠️ Your password must consist of Latin numbers and letters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("⚠️ Email already exists. Please use a different email.");
      return;
    }

    const newUser = { firstname, lastname, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    alert("✅ Sign-Up Successful!");
    resetFields();
    setAction(true);
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert(`✅ Login Successful! Welcome, ${user.firstname}!`);
      resetFields();
    } else {
      alert("❌ Invalid Email or Password. Please try again.");
    }
  };

  const handleSubmit = () => {
    if (action) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  return (
    <div className="main-container">
      <div id="Container">
        <div id="titles">
          <h1>Booking Tracking Service</h1>
          <h2>Effortlessly Monitor Your Shipments with Real-Time Updates</h2>
          <div id="image">
            <img src="/assets/img.png" alt="Tracking Booking Service" />
          </div>
        </div>

        <div id="form">
          <div className="form-Container">
            <div id="pimg_title">
              <img src="/assets/Profile.png" alt="Profile" />
              <h3>{getActionText()}</h3>
            </div>

            <div id="form_content">
              <div className={action ? "disabled" : "username"}> 
                <div className="input-group">
                  <label htmlFor="firstname">
                    First Name:
                    <input
                      type="text"
                      id="firstname"
                      placeholder="John"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div className="input-group">
                  <label htmlFor="lastname">
                    Last Name:
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Doe"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">
                  Email:
                  <input
                    type="email"
                    id="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="input-group password-group">
                <label htmlFor="password">
                  Password:
                  <input
                    type={showpassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    className="eye-icon"
                    src={showpassword ? "/assets/Openeye.png" : "/assets/Closedeye.png"}
                    onClick={TogglePasswordVisibility}
                    alt={showpassword ? "Hide password" : "Show password"}
                  />
                </label>
              </div>
            </div>
            
            <div className="button-container">
              <button onClick={handleSubmit}>{getActionText()}</button>
            </div>
            
            <div id="account_switching">
              <p>
                {action ? "Don't have an account?" : "Already have an account?"}{" "}
                <span onClick={ToggleSwitchingAccount}>
                  {!action ? "Login" : "Sign up"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;