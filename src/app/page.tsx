import LiveGames from "@/features/components/LiveGames";
import PastGames from "@/features/components/PastGames";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <LiveGames/>
      <PastGames/>
    </div>
  );
}
