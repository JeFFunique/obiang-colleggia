
import './App.css';
import Component1 from './Component1';
import component11Props from './Component11Data';
import component12Props from './Component12Data';
import component13Props from './Component13Data';
import component14Props from './Component14';
import Button from './Button';

function App() {
  return (
    <div className="App">

          <div className="container-central-horizontal">
            <div className="frame-20 screen">
                <div className="flex-row">
                    <h1 className="my-dashboard brawler-bold-white-32px">
                        <br />
                        My Dashboard
                    </h1>
                    
                </div>
                <div class="component-container">
                    <Component1 image2={component11Props.image2} title={component11Props.title} price={component11Props.price} className="component-1" />
                    <Component1 image2={component12Props.image2} title={component12Props.title} price={component12Props.price} className="component-2" />
                    <Component1 image2={component13Props.image2} title={component13Props.title} price={component13Props.price}  className="component-3"/>
                    <Component1 image2={component14Props.image2} title={component14Props.title} price={component14Props.price} className="component-4"/>

                </div>
                
                <Button />
            </div>
        </div>
    
      
      </div>
    );
    
      
    
  
}

export default App;
