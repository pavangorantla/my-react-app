//props = read-only properties that are shared between components
//        A parent component can send data to a child component
//        <component key=value />

import Student from './Student.jsx';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={29} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
