import { useState, useEffect } from "react"
import axios from "axios"

function TeamDetails({apiKey, selectedTeam}: any) {
    const [palyers, setPlayers] = useState([])
    const [formation, setFormation] = useState("")
    const [results, setResults] = useState([])
    const [goals, setGoals] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(!selectedTeam){
                    return
                }

                const playersResponse = await axios.get(`https://api-football.com/players?team=${selectedTeam.id}&api_key=${apiKey}`)
                
                setPlayers(playersResponse.data)

                const formationsResponse = await axios.get(`https://api-football.com/formations?team=${selectedTeam.id}&api_key=${apiKey}`)

                setFormation(formationsResponse.data)

                const resultsResponse = await axios.get(`https://api-football.com/results?team=${selectedTeam.id}&api_key=${apiKey}`)

                setResults(resultsResponse.data)

                const goalsResponse = await axios.get(`https://api-football.com/goals?team=${selectedTeam.id}&api_key=${apiKey}`)

                setGoals(goalsResponse.data)

            }catch(error) {
                setError("Erro ao carregar os dados do time")
            }
        }

        fetchData()
    }, [apiKey, selectedTeam])

    return (
        <div>
            {error && <p>{error}</p>}
            {/* Exiba as informações do time, jogadores, formação, resultados e gráfico de gols */}
        </div>
    )
}

export default TeamDetails