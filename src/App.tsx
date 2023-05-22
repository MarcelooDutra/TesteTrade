import Login from './components/Login/Login';
import { useState } from "react";
import TeamSelection from './components/Selection/TeamSelection';
import CountrySelection from './components/Selection/CountrySelection';
import LeagueSelection from './components/Selection/LeagueSelection';
import SeasonSelection from './components/Selection/SeasonSelection';
import TeamDetails from './TeamDetails/TeamDetails';

interface TeamSelectionProps extends React.PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>> {
    apiKey: string;
    selectedTeam: string;
    league: string;
    onSelectTeam: (team: any) => void;
    onSelectLeague: (league: any) => void;
    onSelectSeason: (season: any) => void;
    onSelectCountry: (country: any) => void;
  }


const apiKey: string = 'sua_chave_de_api';
const selectedTeam: string = 'seu_time_selecionado';

function App() {
    
    const [loggedIn, setLoggedIn] = useState(false)
    const [apiKey, setApiKey] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedSeason, setSelectedSeason] = useState("")
    const [selecteLeague, setSelectedLeague] = useState("")
    const [selectedTeam, setSelectedTeam] = useState("")

    const handleLoggedIn = (apiKey: any) => {
        setLoggedIn(true)
        setApiKey(apiKey)
    }

    const handleCountrySelected = (country: any) => {
        setSelectedCountry(country)
        setSelectedSeason("")
        setSelectedLeague("")
        setSelectedTeam("")
    }

    const handleSeasonSelected = (season: any) => {
        setSelectedSeason(season)
        setSelectedLeague("")
        setSelectedTeam("")
    }

    const handleLeagueSelected = (league: any) => {
        setSelectedLeague(league)
        setSelectedTeam("")
    }

    const handleTeamSelection = (team: any) => {
        setSelectedTeam(team);
      };

    return (
        <div>
            {!loggedIn ? (
        <Login onLogin={handleLoggedIn} />
      ) : (
        <>
          {/* Componentes de seleção de país, temporada, liga e time */}
          <CountrySelection
            onSelectCountry={handleCountrySelected}
            apiKey={apiKey}
          />
          {selectedCountry && (
            <SeasonSelection
              onSelectSeason={handleSeasonSelected}
              apiKey={apiKey}
              country={selectedCountry}
            />
            )}
            {selectedSeason && (
              <LeagueSelection
                onSelectLeague={handleLeagueSelected}
                apiKey={apiKey}
                country={selectedCountry}
                season={selectedSeason}
              />
            )}
            {selecteLeague && (
              <TeamSelection
              apiKey={apiKey}
              selectedTeam={selectedTeam}
              onSelectTeam={handleTeamSelection}
              league={selecteLeague}
              />
              )}
          {selectedTeam && (
            <TeamSelection apiKey={apiKey} selectedTeam={selectedTeam} onSelectTeam={handleTeamSelection} league={selecteLeague}/>
          )}
        </>
      )}

      <TeamDetails/>
        </div>
    )
}

export default App