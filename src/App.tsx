import {
  Greet,
  Person,
  PersonList,
  Status,
  Validation,
  Header,
  Oscar,
  Button,
  Input,
  Container,
  LoggedIn,
} from "./components";

function App() {
  const myName = {
    first: "Abdulbasit",
    last: "Quadri",
  };

  const nameList = [
    {
      first: "Abdulbasit",
      last: "Quadri",
    },
    {
      first: "Aminu",
      last: "Kareem",
    },
    {
      first: "Abdulhakeem",
      last: "Quadri",
    },
  ];

  return (
    <div className="App">
      <Container
        styles={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 1px 1px #111",
          backgroundColor: "#f5f5f5",
        }}
      >
        <LoggedIn />
        <Greet
          name="Abdulbasit"
          country="Nigeria"
          isLoggedIn
          age={1}
          messageCount={4}
        />
        <Person name={myName} />
        <PersonList names={nameList} />
        <Status status="success" />
        <Validation />
        <Header>Header</Header>
        <Oscar>
          <Header>Oscar goes to Leonardo Decarprio!</Header>
        </Oscar>
        <Button
          handleClick={(event, id) => console.log("Button Clicked", event, id)}
        />
        <Input
          handleChange={(event) => console.log(event.target.value)}
          value=""
        />
      </Container>
    </div>
  );
}

export default App;
