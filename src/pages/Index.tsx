import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [saveUser, setSaveUser] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <button className="back-button">
          <ArrowLeft />
        </button>
        <img
          src="/lovable-uploads/d544bf60-8c34-443a-b1ce-c1fd6dc1cef6.png"
          alt="VK ID"
          className="logo"
        />
      </header>

      <main className="content">
        <h1 className="title">Enter phone number</h1>
        <p className="subtitle">
          You'll use your phone number to sign in to your account
        </p>

        <div className="phone-input">
          <div className="country-code">
            <img
              src="/lovable-uploads/d544bf60-8c34-443a-b1ce-c1fd6dc1cef6.png"
              alt="Russian flag"
              className="flag"
            />
            <span>+7</span>
          </div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="phone-number"
            placeholder="Phone number"
          />
        </div>

        <div className="save-user">
          <input
            type="checkbox"
            id="save-user"
            checked={saveUser}
            onChange={(e) => setSaveUser(e.target.checked)}
            className="checkbox"
          />
          <label htmlFor="save-user" className="save-user-label">
            Save user
          </label>
          <span className="help-icon" title="Save your login information for next time">
            ?
          </span>
        </div>

        <button className="button button-primary">
          Continue
        </button>
        <button className="button button-secondary">
          Sign in through app
        </button>

        <p className="terms">
          By pressing Continue, you agree to the{" "}
          <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </main>
    </div>
  );
};

export default Index;