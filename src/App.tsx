import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import { Layout, Navbar, Footer } from "./components/UI";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <>
        <Toaster />
        <Navbar />
        <Layout>
          <Outlet />
        </Layout>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
