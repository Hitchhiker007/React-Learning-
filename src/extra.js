export function CourseGoal({title, description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  
  export const Course_Goal = [
      {
          title : 'Learn React',
          description: 'In-depth',
      },
      {
          title : 'Deploy React',
          description: 'Broad',
      },
      ];
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        <ul>
         <CourseGoal title={Course_Goal[0].title} description={Course_Goal[0].description} />
          <CourseGoal title={Course_Goal[1].title} description={Course_Goal[1].description} />
        </ul>
      </div>
    );
  }
  
  export default App;