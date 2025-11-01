import { useLayoutEffect, useRef, useState } from "react";
import "./MiniGame.css";
import MiniGameCard from "./MiniGameCard";

export default function MiniGame() {
  const shuffle = (array) => {
    // Operate on a shallow copy so original isn't mutated
    const a = Array.from(array);
    let currentIndex = a.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
    }

    return a;
  };

  // Generate unique random positions for 3x3 grid coordinates.
  // Returns an object with keys one..eight mapped to {x,y} and empty as {x,y}.
  const generatePositions = () => {
    // all possible coordinates for a 3x3 grid
    const coords = [];
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        coords.push({ x, y });
      }
    }

    // Shuffle coordinates and pick first 9
    const shuffled = shuffle(coords);

    // Assign first 8 to tiles one..eight, last one is empty
    const mapping = {
      one: shuffled[0],
      two: shuffled[1],
      three: shuffled[2],
      four: shuffled[3],
      five: shuffled[4],
      six: shuffled[5],
      seven: shuffled[6],
      eight: shuffled[7],
    };

    const emptyPos = shuffled[8];

    return { mapping, emptyPos };
  };

  // initialize positions and empty randomly but uniquely
  const initial = generatePositions();
  const [positions, setPositions] = useState(initial.mapping);
  const [empty, setEmpty] = useState(initial.emptyPos);

  const canvasRef = useRef(null);

  const [cardWidth, setCardWidth] = useState(null);

  useLayoutEffect(() => {
    console.log("non e che ripasso di qui ve");
    setCardWidth(canvasRef.current?.clientWidth);
  }, []);

  const handleCardClick = (key) => {
    // Check if the clicked card is adjacent to the empty space
    const posX = positions[key].x;
    const posY = positions[key].y;

    const isAdjacent =
      (posX === empty.x && Math.abs(posY - empty.y) === 1) ||
      (posY === empty.y && Math.abs(posX - empty.x) === 1);

    if (!isAdjacent) {
      return; // Not adjacent, do nothing
    }

    // Swap positions

    const pos = positions[key];
    const dx = empty.x;
    const dy = empty.y;

    console.log("Swapping", key, "with empty space");

    setPositions((prev) => ({
      ...prev,
      [key]: { x: dx, y: dy },
    }));
    setEmpty({ x: pos.x, y: pos.y });
  };

  return (
    <div id="mini-game">
      <div className="canvas" ref={canvasRef}>
        {cardWidth && (
          <>
            <MiniGameCard
              key={"one"}
              x={positions.one.x}
              y={positions.one.y}
              wRef={cardWidth}
              number={"one"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"two"}
              x={positions.two.x}
              y={positions.two.y}
              wRef={cardWidth}
              number={"two"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"three"}
              x={positions.three.x}
              y={positions.three.y}
              wRef={cardWidth}
              number={"three"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"four"}
              x={positions.four.x}
              y={positions.four.y}
              wRef={cardWidth}
              number={"four"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"five"}
              x={positions.five.x}
              y={positions.five.y}
              wRef={cardWidth}
              number={"five"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"six"}
              x={positions.six.x}
              y={positions.six.y}
              wRef={cardWidth}
              number={"six"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"seven"}
              x={positions.seven.x}
              y={positions.seven.y}
              wRef={cardWidth}
              number={"seven"}
              onClick={handleCardClick}
            />
            <MiniGameCard
              key={"eight"}
              x={positions.eight.x}
              y={positions.eight.y}
              wRef={cardWidth}
              number={"eight"}
              onClick={handleCardClick}
            />
          </>
        )}
      </div>
      <p className="mini-game-instructions">
        <strong>click on a tile </strong> to reorder the numbers
      </p>
    </div>
  );
}
