import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Filter, Heart, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-40 md:h-screen md:w-screen">
      <div className="md:px-0 px-5">
        <h1 className="md:text-5xl text-4xl text-white capitalize font-semibold text-center mb-3">Business Name Generator</h1>
        <p className="text-white text-center text-xl">Generate the perfect  Business name by our ai-powered business name generator tool!</p>

        <Search />
      </div>

      <div className="md:flex justify-between gap-10 md:px-56 px-5 mt-28">
        <div className="md:mb-0 mb-10">
          <Lightbulb className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Generate Idea</h4>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Filter className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Filter Result</h4>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
        <div className="md:mb-0 mb-10">
          <Heart className="text-primary mb-3" size={30} />
          <h4 className="text-white text-xl font-semibold">Save Name</h4>
          <p className="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quis sequi sapiente reprehenderit laboriosam aperiam modi perspiciatis consequatur. Est, velit?
          </p>
        </div>
      </div>

    </div>
  );
}
