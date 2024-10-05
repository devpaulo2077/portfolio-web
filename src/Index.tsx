import Home from './Home';
import Introduce from './Introduce';
import Fan from './Fan';
import Generate from './Generate';
import Projects from './Projects';

function Index() {
  return (
    <>
    <Home/>
    <Introduce/>
    <Fan works={13} experience={1} certificate={17}/>
    <Generate/>
    <Projects/>
    </>
  );
}

export default Index;