
import React, { createContext , useState} from "react";

export const modeContext = createContext();

const ModeContextProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false)

    const toggleMode = () => {
        setIsDark(!isDark)
    }

  return <modeContext.Provider value={{isDark, toggleMode}}>{children}</modeContext.Provider>;
};

export default ModeContextProvider;
