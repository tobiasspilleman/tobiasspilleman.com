import { NavigationBar } from "~/components/navigation/NavigationBar";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <NavigationBar></NavigationBar>
      <h1 className="text-3xl font-bold">Welcome to my homepage!</h1>
    </main>
  );
}
