import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import StudentForm from './components/form.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center mb-5">Student From</h2>
                    <StudentForm />
                </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
