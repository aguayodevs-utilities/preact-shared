import { ISidebarContext, ISidebarContextProps, ISidebarMenu } from "interfaces/interface.sidebar";
import { createContext } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";
import axios from "axios";
export const SidebarContext = createContext<ISidebarContext>({
  menuList:[],
  showSidebar: false,
  loading: false,
  handleShowSidebar: (arg: boolean)=>{}
});

export const SidebarContextProvider = ({ children, urlMenu }: ISidebarContextProps)=> {
    const [menuList, setMenuList] = useState<ISidebarMenu[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const handleShowSidebar = (arg: boolean) => setShowSidebar(arg);

    useEffect(()=>{
        const GetMenuList = async () => {
            try {
                setLoading(true);
                let result = await axios.get(urlMenu);
                setMenuList(result.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        GetMenuList();
    },[])
    return (
        <SidebarContext.Provider value={{
            menuList,
            showSidebar,
            loading,
            handleShowSidebar
        }}>
        {children}
        </SidebarContext.Provider>
    );
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('SidebarContext must be used within an SidebarContextProvider');
  }
  return context;
};
