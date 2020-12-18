import './App.css';


function App() {
  return (
    <div className="Personal">
      <h1>Register Now</h1>
      <form action="/">
        <hr />
        <div className="accounttype">
          <input type="radio" value="None" id="radioOne" name="account" checked />
          <label for="radioOne" className="radio" checked>Personal</label>

          <input type="radio" value="None" id="radioTwo" name="account" checked />
          <label for="radioTwo" className="radio">Company</label>
        </div>
        <hr />

        <label id="icon" for="name"><i class="icon-envelope"></i></label>
        <input type="text" name="name" id="name" placeholder="Email" required />

        <label id="icon" for="name"><i class="icon-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Name" required />

        <label id="icon" for="name"><i class="icon-shield"></i></label>
        <input type="password" name="name" id="name" placeholder="Password" required />

        <div class="gender">
          <input type="radio" value="None" id="male" name="gender" checked />
          <label for="male" class="radio" checked>Male</label>

          <input type="radio" value="None" id="female" name="gender" checked />
          <label for="female" className="radio" checked>Female</label>
        </div>

        <p>By clicking on Register, you agree to our
          <br />
          <a href="#">Terms and Conditions</a>
        </p>
        <a href="#" className="button">Register</a>
      </form>
    </div>
  )
};
export default App;