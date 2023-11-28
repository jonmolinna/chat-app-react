import { LoginProvider } from "./context/login.context";
import { RegisterProvider } from "./context/register.context";
import Login from "./pages/Login";
// import Register from "./pages/Register";


function App() {
  return (
    <div>
      <RegisterProvider>
        <LoginProvider>
          {/* <Register /> */}
          <Login />
        </LoginProvider>
      </RegisterProvider>
    </div>
  );
};

export default App;
