import React from 'react';

interface TeamSelectionProps {
  apiKey: string;
  selectedTeam: string;
  leagues: string
  onSelectTeam: (team: any) => void;
}


const TeamSelection: React.FC<TeamSelectionProps> = (props) => {
  // Acessando as propriedades apiKey e selectedTeam
  const { apiKey, selectedTeam, onSelectTeam, ...rest } = props

  // Resto do código do componente

  return (
    <div {...rest}>
    {/* JSX do componente TeamSelection */}
  </div>
  );
};

TeamSelection.defaultProps = {
  onSelectTeam: () => {},
};

export default TeamSelection;
