import { createContext, useContext } from "react";
import { data } from "./sitedata";


// console.log(data)
const Content = createContext({data});
export const useContent = () => useContext(Content);


export const ContentProvider = ({ children }) => {

  return (
    <Content.Provider value={data}>
      {children}
    </Content.Provider>)
}
export default ContentProvider;

