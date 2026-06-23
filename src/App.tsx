import { PlusSignIcon } from "hugeicons-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Button from "./ui/Button";

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-off-white">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-neutral-off-white">
          <div className="max-w-7xl mx-auto">
            {/* <Outlet /> */}

            <div className="flex justify-center items-center flex-col min-h-screen gap-[32px]">
              <h2 className="text-lg text-neutral-grey font-bold">
                This board is empty. Create a new column to get started.
              </h2>
              <Button className="max-w-63.75">
                <PlusSignIcon />
                Add New Column
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
