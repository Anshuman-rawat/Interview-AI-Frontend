import { useContext , useEffect} from "react";
import { AuthContext } from "../auth.context";
import { Login,  register , logout , getMe} from "../services/auth.api";
import { useNavigate } from "react-router";



export const useAuth = () => {

    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const  {user, setUser, loading, setLoading } = context



    const handleLogin = async ({email,password}) =>{
        setLoading(true)
        try{
        const data = await Login ({email , password}) 
        setUser(data.user)
        navigate("/home") 
        }catch(err){
            console.error("Login failed:", err)
        }finally{
        setLoading(false)
        }

    }

    const handleRegister = async ({username,email,password}) => {
        setLoading(true)
        try{
        const data = await register({username,email,password})
        setUser(data.user)
        navigate("/login")
        }catch(err){
            console.error("Register failed:", err)
        }finally{
        setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try{
        const data = await logout()
        setUser(null)
        navigate("/login")
        }catch(err){
            console.error("logout failed:", err)
        }finally{
        setLoading(false)        
        }
    }

    useEffect(() =>{
    
        const getAndSetUser = async()=>{
            try{
        const data = await getMe()
        if (data) {
            setUser(data.user)
        }
            }catch(err){
                console.error("getMe failed:", err)
            }finally{
        setLoading(false)
        }
    }
    
        getAndSetUser()
    },[])
    
    
    return {user,loading, handleLogin,handleRegister, handleLogout}
}