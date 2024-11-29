import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello this is my first react app!</h1>
        <h2>My name is: Jose Tecuatl Cortes, let me tell you about myself.</h2>
        <p>
          This page involves three different components:
        </p>
        <ul>
          <li>One of which is a github repository connected to a windows computer</li>
          <li>Then an AWS s3 bucket hosting a static web page.</li>
          <li>Last but not least is the codepipeline, allowing any git changes to the webpage</li>
        </ul>
        <p>
          Overall if I were to make this some sort of application using git respository
          I wouldn't use a windows machine because using git on windowsis a bit more combersome
          compared to the much more complex but convinent linux distribution. I defintely
          would give ubuntu as a great recommendation for starters. 
        </p>
    </div>
  );
}

export default App;
