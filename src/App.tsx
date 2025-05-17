import { Button } from "@heroui/react";

export default function App() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center gap-x-2">
      <Button className="focus-visible:outline-amber-700" variant="faded">
        Test HeroUI Button
      </Button>
      <Button variant="shadow">Test HeroUI Button</Button>
      <Button variant="ghost">Test HeroUI Button</Button>
      <Button variant="faded">Test HeroUI Button</Button>
      <Button variant="light">Test HeroUI Button</Button>
      <Button variant="solid">Test HeroUI Button</Button>
      <Button variant="flat">Test HeroUI Button</Button>
    </div>
  );
}
