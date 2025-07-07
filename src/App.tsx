import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let cities = ['Moscow', 'Saint Petersburg', 'Cairo', 'Miami']

  return (
    <div>
      <ListGroup items={cities} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
