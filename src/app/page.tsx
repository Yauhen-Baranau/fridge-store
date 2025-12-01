import List from "@src/ui-kit/list/list";

export default function Home() {
  return <List items={[
    { text: 'item1' },
    { text: 'item2' },
    { text: 'item3', subItems: [{ text: 'item31' }, { text: 'item32' }] },
    { text: 'item4' },
  ]} />;
}
