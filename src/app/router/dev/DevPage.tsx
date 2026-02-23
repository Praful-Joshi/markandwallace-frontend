import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tab } from "@/components/ui/Tab";
import { TabBar } from "@/components/ui/TabBar";
import homeIcon from "@/assets/icons/24.svg";
import searchIcon from "@/assets/icons/44.svg";
import messageIcon from "@/assets/icons/23.svg";
import settingIcon from "@/assets/icons/22.svg";

const TAB_ITEMS = [
  { key: "home", label: "Home", icon: homeIcon },
  { key: "search", label: "Search", icon: searchIcon },
  { key: "message", label: "Message", icon: messageIcon },
  { key: "setting", label: "Setting", icon: settingIcon },
];

export function DevPage() {
  const [activeBar, setActiveBar] = useState("home");

  return (
    <div className="min-h-screen bg-neutral-6 p-6 space-y-16">
      <section className="space-y-4">
        <div className="text-title2 text-neutral-1">BUTTON</div>
        <div className="max-w-sm space-y-4">
          <Button disabled className="w-full">
            Sign in
          </Button>
          <Button className="w-full">Sign in</Button>
        </div>
        <div className="max-w-sm space-y-4">
          <Button variant="text">Button</Button>
          <Button variant="text" disabled>
            Button
          </Button>
        </div>
        <div className="flex gap-6 items-center">
          <Button variant="icon">→</Button>
          <Button variant="icon" disabled>
            →
          </Button>
        </div>
        <Button variant="link" href="#">
          Link
        </Button>
      </section>

      <section className="space-y-4">
        <div className="text-title2 text-neutral-1">CARD</div>
        <div className="flex flex-wrap gap-4">
          <Card variant="beneficiary-add" />
          <Card
            variant="beneficiary-user"
            label="Amanda"
            imageSrc="https://i.pravatar.cc/100"
          />
          <Card variant="account" label="Account and Card" />
          <Card variant="transfer" label="Transfer via card number" />
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-title2 text-neutral-1">TAB</div>
        <div className="max-w-sm space-y-3">
          <Tab label="Tab" active />
          <Tab label="Tab" />
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-title2 text-neutral-1">TAB BAR</div>
        <TabBar
          items={TAB_ITEMS}
          activeKey={activeBar}
          onChange={setActiveBar}
        />
      </section>
    </div>
  );
}
