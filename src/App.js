import { RegisterProvider } from "./context/register.context";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <RegisterProvider>
        <Register />
      </RegisterProvider>
    </div>
  );
};

export default App;
