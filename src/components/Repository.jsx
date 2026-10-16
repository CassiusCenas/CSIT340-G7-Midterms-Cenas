import { useState } from "react";
import RepoCard from "./RepoCard";

function Repository() {
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      <RepoCard/>
        <RepoCard/> 
    </main>
  );
}

export default Repository;