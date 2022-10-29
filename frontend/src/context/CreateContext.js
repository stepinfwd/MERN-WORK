import { createContext } from "react";

const ThemeContext = createContext("light");
const WorkoutContext = createContext();
const AuthContext = createContext(null);

function WorkoutContextProvider({ children }) {
  return <WorkoutContext.Provider>{children}</WorkoutContext.Provider>;
}

export default WorkoutContextProvider;
