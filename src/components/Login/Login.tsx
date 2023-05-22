import { useState, useEffect } from "react";
import axios from "axios";


function Login ({ onLogin }: any) {
    const [apiKey, setApiKey] = useState("")
    const [error, setError] = useState("")

    const handleLogin = async () => {
        try{
            const res = await axios.get(`https://api-football.com/authentication?api_key=${apiKey}`)

         if(res.data.api.statusCode === 200){
            onLogin(apiKey)

            }else{
                setError("API key inválida")            
            }

        }catch(error){
           setError("Erro ao realizar login")
        }
    }

    return (
        <div>
            <label>Login:
                <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Login