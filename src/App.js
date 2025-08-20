import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };
    let valid = true;

    if (!email) {
      newErrors.email = "Email kiriting.";
      valid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = "Email formati noto‘g‘ri.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Parol kiriting.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Parol kamida 6 ta belgi bo‘lishi kerak.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log({ email, password });
      alert("Ma'lumotlar konsolga chiqarildi");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Kirish</h1>
        <p className="sub">Email va parolingizni kiriting.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              placeholder="nomingiz@domen.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="field">
            <label>Parol</label>
            <input
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
