import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tab } from "@/components/ui/Tab";
import { TabBar } from "@/components/ui/TabBar";
import { Row } from "@/components/ui/Row";
import { TextField, TextFieldWithChevron } from "@/components/ui/TextField";

import homeIcon from "@/assets/icons/ 24.svg";
import searchIcon from "@/assets/icons/ 44.svg";
import messageIcon from "@/assets/icons/ 23.svg";
import settingIcon from "@/assets/icons/ 22.svg";
import waterIcon from "@/assets/icons/ 22.svg";
import cameraIcon from "@/assets/icons/ 22.svg";
import bankIcon from "@/assets/icons/ 22.svg";

const TAB_ITEMS = [
  { key: "home", label: "Home", icon: homeIcon },
  { key: "search", label: "Search", icon: searchIcon },
  { key: "message", label: "Message", icon: messageIcon },
  { key: "setting", label: "Setting", icon: settingIcon },
];

export function DevPage() {
  // state
  const [activeBar, setActiveBar] = useState("home");
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [search, setSearch] = useState("");
  const [exchange, setExchange] = useState("");
  const [chevron, setChevron] = useState("Text input");

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
          <Button variant="text" className="w-full">
            Button
          </Button>
          <Button variant="text" className="w-full" disabled>
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
      <section className="space-y-4">
        <div className="text-title2 text-neutral-1">ROW</div>
        <div className="bg-neutral-6 rounded-2xl overflow-hidden">
          <Row variant="address" address="1656 Union Street" distance="50m" />
          <Row variant="info" label="Password" />
          <Row
            variant="user"
            name="Push"
            phone="12788980890"
            imageSrc="https://i.pravatar.cc/100?img=3"
          />
          <Row
            variant="transaction-screen-deduction"
            icon={waterIcon}
            title="Water Bill"
            status="Unsuccessfully"
            amount="$280"
          />
          <Row
            variant="transaction-screen-increment"
            icon={waterIcon}
            title="Water Bill"
            status="Unsuccessfully"
            amount="$280"
          />
          <Row
            variant="transaction-card-increment"
            icon={cameraIcon}
            title="Buy Camera"
            date="02/11/2018"
            amount="$1200"
          />
          <Row
            variant="transaction-card-deduction"
            icon={cameraIcon}
            title="Buy Camera"
            date="02/11/2018"
            amount="$1200"
          />
          <Row
            variant="language-default"
            flag="https://flagcdn.com/w40/vn.png"
            language="Vietnamese"
          />
          <Row
            variant="language-selected"
            flag="https://flagcdn.com/w40/vn.png"
            language="Vietnamese"
          />
          <Row
            variant="message"
            icon={bankIcon}
            title="Bank of America"
            preview="Bank of America : 256486 is the au..."
            date="Today"
          />
        </div>
      </section>
      <section className="space-y-6 max-w-sm">
        <div className="text-title2 text-neutral-1">TEXT FIELD</div>

        <TextField
          value={text}
          onChange={setText}
          placeholder="Text input"
          caption="Caption"
        />

        <TextField
          value={text}
          onChange={setText}
          placeholder="Text input"
          label="Label"
          caption="Caption"
        />

        <TextField
          variant="dropdown"
          value={dropdown}
          onChange={setDropdown}
          placeholder="Password"
          options={["Option 1", "Option 2"]}
          onSelect={(val) => console.log(val)}
          caption="Caption"
        />

        <TextField
          variant="search"
          value={search}
          onChange={setSearch}
          placeholder="Bank"
        />

        <TextFieldWithChevron
          value={chevron}
          onChange={setChevron}
          label="Label"
          caption="Caption"
        />

        <TextField
          variant="exchange"
          value={exchange}
          onChange={setExchange}
          placeholder="Text input"
          label="From"
          currency="USD"
          onCurrencyChange={() => console.log("change currency")}
        />
      </section>
    </div>
  );
}
