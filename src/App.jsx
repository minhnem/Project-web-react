import { useContext, useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import BaseLayout from "./components/BaseLayout";
import { Outlet, useLocation } from "react-router-dom";
import ContextProvider from "./features/ContextProvider";
import WishContextProvider from "./features/WishContextProvider";
import { AuthContext } from "./features/UserContextProvider";

function App() {
  const { dispatch } = useContext(AuthContext)
  const location = useLocation()

  const loadUserLocolStorage = () => {
      
  }
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location])

  useEffect(() => {
    const user = localStorage.getItem("user")
      if(user){
        const parseUser = JSON.parse(user)
        dispatch({type: "LOGIN", user: parseUser})
      }
  },[dispatch])
  
  return (
    <>
      <ContextProvider>
        <WishContextProvider>
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        </WishContextProvider>
      </ContextProvider>
    </>
  );
}

export default App;
