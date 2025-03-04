function Food() {
  const food1 = 'Orange';
  const food2 = 'Banana';

  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;

//so if you are adding a set of js code inside the return statement you need set of curly braces. but outside of the return statement you dont.
