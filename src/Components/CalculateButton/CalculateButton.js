import React from 'react';

import './CalculateButton.css';

const CalculateButton = () => {
  const doorsArea = () => {
    const door1 = document.getElementById('doors-1').value;
    const door2 = document.getElementById('doors-2').value;
    const door3 = document.getElementById('doors-3').value;
    const door4 = document.getElementById('doors-4').value;
    const door1Area = door1 * 0.8 * 1.9;
    const door2Area = door2 * 0.8 * 1.9;
    const door3Area = door3 * 0.8 * 1.9;
    const door4Area = door4 * 0.8 * 1.9;
    return [
      door1Area,
      door2Area,
      door3Area,
      door4Area
    ]
  }

  const windowsArea = () => {
    const window1 = document.getElementById('windows-1').value;
    const window2 = document.getElementById('windows-2').value;
    const window3 = document.getElementById('windows-3').value;
    const window4 = document.getElementById('windows-4').value;
    const window1Area = window1 * 2 * 1.2;
    const window2Area = window2 * 2 * 1.2;
    const window3Area = window3 * 2 * 1.2;
    const window4Area = window4 * 2 * 1.2;
    return [
      window1Area,
      window2Area,
      window3Area,
      window4Area
    ]
  }

  const wallsArea = () => {
    const wall1Height = document.getElementById('height-1').value;
    const wall2Height = document.getElementById('height-2').value;
    const wall3Height = document.getElementById('height-3').value;
    const wall4Height = document.getElementById('height-4').value;
    const wall1Width = document.getElementById('width-1').value;
    const wall2Width = document.getElementById('width-2').value;
    const wall3Width = document.getElementById('width-3').value;
    const wall4Width = document.getElementById('width-4').value;
    const wall1Area = wall1Height * wall1Width;
    const wall2Area = wall2Height * wall2Width;
    const wall3Area = wall3Height * wall3Width;
    const wall4Area = wall4Height * wall4Width;
    return [
      wall1Area,
      wall2Area,
      wall3Area,
      wall4Area
    ]
  }

  const inputVerification = (input, index) => {
    if (input === '') {
      return alert(`As medidas da parede ${index + 1} devem ser preenchidas`);
    }
  }

  const doorVerification = (doors, heights) => {
    if (doors > 0) {
      if (heights < 2.1) return alert('A altura de paredes com porta deve ser maior que 2.10');
    }
  }

  const doorsAndWindowsArea = () => {
    const sumAreaDoor1AndWindow1 = doorsArea()[0] + windowsArea()[0];
    const sumAreaDoor2AndWindow2 = doorsArea()[1] + windowsArea()[1];
    const sumAreaDoor3AndWindow3 = doorsArea()[2] + windowsArea()[2];
    const sumAreaDoor4AndWindow4 = doorsArea()[3] + windowsArea()[3];
    return [
      sumAreaDoor1AndWindow1,
      sumAreaDoor2AndWindow2,
      sumAreaDoor3AndWindow3,
      sumAreaDoor4AndWindow4
    ]
  }

  const areaVerification = () => {
    return wallsArea().map((element, index) => {
      const data = element * 0.5 >= doorsAndWindowsArea()[index];
      if (!data) {
        return alert(
          'O total de área das portas e janelas deve ser no máximo 50% da área de parede'
        );
      }
      return data;
    })
  }

  const calculate = () => {
    const door1 = document.getElementById('doors-1').value;
    const door2 = document.getElementById('doors-2').value;
    const door3 = document.getElementById('doors-3').value;
    const door4 = document.getElementById('doors-4').value;

    const inputArray = [door1, door2, door3, door4];
    inputArray.map((element, index) => inputVerification(element, index));

    const height1 = document.getElementById('height-1').value;
    const height2 = document.getElementById('height-2').value;
    const height3 = document.getElementById('height-3').value;
    const height4 = document.getElementById('height-4').value;
    doorVerification(door1, height1);
    doorVerification(door2, height2);
    doorVerification(door3, height3);
    doorVerification(door4, height4);
    
    areaVerification();
  }

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => calculate()}
    >
      Calcular
    </button>
  )
}

export default CalculateButton;
