import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import BaseLayout from "./components/BaseLayout";
import { Outlet, useLocation } from "react-router-dom";
import ContextProvider from "./features/ContextProvider";
import WishContextProvider from "./features/WishContextProvider";

function App() {
  const location = useLocation()
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location])
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
