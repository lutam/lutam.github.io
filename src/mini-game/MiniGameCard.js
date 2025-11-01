import React, { useMemo } from "react";
import "./MiniGame.css";

function UnmemoizedMiniGameCard({ x, y, wRef, number, onClick }) {
  const xPos = useMemo(() => (x * wRef) / 3, [x, wRef]);
  const yPos = useMemo(() => (y * wRef) / 3, [y, wRef]);

  console.log("Rendering card at:", xPos, yPos);

  return (
    <div
      onClick={() => onClick(number)}
      className="square"
      style={{
        transform: `translate(${xPos}px, ${yPos}px)`,
      }}
    >
      <div className={`square-inner square-${number}`}>{number}</div>
    </div>
  );
}


const MiniGameCard = React.memo(UnmemoizedMiniGameCard);

export default MiniGameCard;