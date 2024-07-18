import './App.css'
import { Header, Hero, Features, HowItWorks, Community, SignUpIncentives, Footer } from './components'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <SignUpIncentives />
      <Footer />
    </div>
  );
};

export default App
