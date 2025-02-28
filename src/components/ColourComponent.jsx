function ColourComponent({
  colour,
  rand,
  setGameMsg,
  counter,
  setCounter,
  setIsEnd,
  setWinCount,
  setLoseCount,
}) {
  const checkColour = () => {
    if (counter > 0) return;
    if (colour === rand) {
      setGameMsg("Yeeeeee u WON!");
      setIsEnd(true);
      setWinCount((prev) => prev + 1);
      setCounter((prev) => {
        return prev + 1;
      });
    } else {
      setGameMsg("Auuchh you missed!");
      setIsEnd(true);
      setLoseCount((prev) => prev + 1);
      setCounter((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <div
      onClick={checkColour}
      className="box-colour"
      style={{ backgroundColor: `rgb(${colour})` }}
    ></div>
  );
}

export default ColourComponent;
