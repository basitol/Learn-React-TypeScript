type GreetProps = {
  name: string;
  country: string;
  isLoggedIn: boolean;
  age?: number;
  messageCount?: number;
};

const Greet = ({
  name,
  country,
  isLoggedIn,
  age,
  messageCount,
}: GreetProps) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Hello {name}, I am from {country}
          {age && `, I am ${age} years old`}
          {messageCount && `, You have ${messageCount} unread messages`}
        </h2>
      ) : (
        <h1>Hello Guest</h1>
      )}
    </div>
  );
};

export default Greet;
