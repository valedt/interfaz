import React, { useState, useEffect } from 'react';
import './App.css';
import Example from './Grafico';

function App() {
  // Estados para almacenar los valores
  const [potenciaActiva, setPotenciaActiva] = useState(0);
  const [potenciaReactiva, setPotenciaReactiva] = useState(0);
  const [corrienteAC, setCorrienteAC] = useState(0);
  const [voltajeDC, setVoltajeDC] = useState(0);
  const [soc, setSoc] = useState(0);

  // Simulación de actualización de los valores cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const newPotenciaActiva = Math.random() * 100; // Simulación de potencia activa
      const newPotenciaReactiva = Math.random() * 50; // Simulación de potencia reactiva
      const newCorrienteAC = Math.random() * 10; // Simulación de corriente AC
      const newVoltajeDC = Math.random() * 200; // Simulación de voltaje DC
      const newSoc = Math.random() * 100; // Simulación de estado de las baterías (SOC)

      setPotenciaActiva(newPotenciaActiva.toFixed(2));
      setPotenciaReactiva(newPotenciaReactiva.toFixed(2));
      setCorrienteAC(newCorrienteAC.toFixed(2));
      setVoltajeDC(newVoltajeDC.toFixed(2));
      setSoc(newSoc.toFixed(2));
    }, 2000); // cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monitor de Sistema</h1>

        <div className="valores">
          <p>Potencia Activa: {potenciaActiva} W</p>
          <p>Potencia Reactiva: {potenciaReactiva} VAR</p>
          <p>Corriente AC: {corrienteAC} A</p>
          <p>Voltaje DC: {voltajeDC} V</p>
          <p>Estado de las Baterías (SOC): {soc} %</p>
        </div>

        {/* Contenedor del gráfico con clase grafico */}
        <div className="grafico">
          <Example />
        </div>
      </header>
    </div>
  );
}

export default App;
