export const Player = ({ position }) => {
    const PLAYER_WIDTH = 40;
    const PLAYER_HEIGHT = 40;

    const { x, y } = position;
  
    return (
      <g>
        <rect x={x} y={y} width={PLAYER_WIDTH} height={PLAYER_HEIGHT} fill="blue" />
        <rect x={x + PLAYER_WIDTH / 2 - 3} y={y - 10} width="6" height="10" fill="white" />
        <rect x={x + PLAYER_WIDTH / 2 - 1} y={y - 14} width="2" height="4" fill="white" />
        <rect x={x + PLAYER_WIDTH / 2 - 10} y={y - 5} width="20" height="5" fill="white" />
      </g>
    );
  };
  