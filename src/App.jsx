import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import BaseLayout from "./components/BaseLayout";
import { Outlet } from "react-router-dom";
import ContextProvider from "./features/ContextProvider";
import WishContextProvider from "./features/WishContextProvider";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Thời gian animation (ms)
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);
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
