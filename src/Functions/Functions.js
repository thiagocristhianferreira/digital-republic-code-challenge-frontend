export const walls = () => ({
  wall1Height: document.getElementById('height-1').value,
  wall2Height: document.getElementById('height-2').value,
  wall3Height: document.getElementById('height-3').value,
  wall4Height: document.getElementById('height-4').value,
  wall1Width: document.getElementById('width-1').value,
  wall2Width: document.getElementById('width-2').value,
  wall3Width: document.getElementById('width-3').value,
  wall4Width: document.getElementById('width-4').value,
});

export const doors = () => ({
  door1: document.getElementById('doors-1').value,
  door2: document.getElementById('doors-2').value,
  door3: document.getElementById('doors-3').value,
  door4: document.getElementById('doors-4').value,
});

export const windows = () => ({
  window1: document.getElementById('windows-1').value,
  window2: document.getElementById('windows-2').value,
  window3: document.getElementById('windows-3').value,
  window4: document.getElementById('windows-4').value,
});

export const doorsArea = () => {
  const doorArea1 = 0.8;
  const doorArea2 = 1.9;
  const door1Area = doors().door1 * doorArea1 * doorArea2;
  const door2Area = doors().door2 * doorArea1 * doorArea2;
  const door3Area = doors().door3 * doorArea1 * doorArea2;
  const door4Area = doors().door4 * doorArea1 * doorArea2;
  return [door1Area, door2Area, door3Area, door4Area];
};

export const windowsArea = () => {
  const windowsArea1 = 2;
  const windowsArea2 = 1.2;
  const window1Area = windows().window1 * windowsArea1 * windowsArea2;
  const window2Area = windows().window2 * windowsArea1 * windowsArea2;
  const window3Area = windows().window3 * windowsArea1 * windowsArea2;
  const window4Area = windows().window4 * windowsArea1 * windowsArea2;
  return [window1Area, window2Area, window3Area, window4Area];
};

export const wallsArea = () => {
  const wall1Area = walls().wall1Height * walls().wall1Width;
  const wall2Area = walls().wall2Height * walls().wall2Width;
  const wall3Area = walls().wall3Height * walls().wall3Width;
  const wall4Area = walls().wall4Height * walls().wall4Width;
  return [wall1Area, wall2Area, wall3Area, wall4Area];
};

export const inputVerification = () => {
  const inputs = [
    { firstHeight: walls().wall1Height, firstWidth: walls().wall1Width },
    { firstHeight: walls().wall2Height, firstWidth: walls().wall2Width },
    { firstHeight: walls().wall3Height, firstWidth: walls().wall3Width },
    { firstHeight: walls().wall4Height, firstWidth: walls().wall4Width },
  ];
  inputs.forEach((elem, index) => {
    if ((elem.firstHeight) === '') {
      return alert(
        `A medida de Altura da parede ${index + 1} deve ser preenchida`,
      );
    }
    if ((elem.firstWidth) === '') {
      return alert(
        `A medida de Largura da parede ${index + 1} deve ser preenchida`,
      );
    }
  });
};

export const doorVerification = (door, heights) => {
  const doorHeight = 2.1;
  if (door > 0 && heights < doorHeight) {
    return alert('A altura de paredes com porta deve ser maior que 2.10');
  }
};

export const doorsAndWindowsArea = () => {
  const sumAreaDoor1AndWindow1 = doorsArea()[0] + windowsArea()[0];
  const sumAreaDoor2AndWindow2 = doorsArea()[1] + windowsArea()[1];
  const sumAreaDoor3AndWindow3 = doorsArea()[2] + windowsArea()[2];
  const sumAreaDoor4AndWindow4 = doorsArea()[3] + windowsArea()[3];
  return [
    sumAreaDoor1AndWindow1,
    sumAreaDoor2AndWindow2,
    sumAreaDoor3AndWindow3,
    sumAreaDoor4AndWindow4,
  ];
};

export const areaVerification = () => wallsArea().map((element, index) => {
  const HALF = 0.5;
  const data = element * HALF >= doorsAndWindowsArea()[index];
  if (!data) {
    return alert(
      'O total de área das portas e janelas deve ser no máximo 50% da área de parede',
    );
  }
  return data;
});

const doorsAreaCaluculate = () => {
  const difDoor = [];
  let doorsAreaToDif = 0;
  const doorsArray = [doors().door1,
    doors().door2,
    doors().door3,
    doors().door4];
  doorsArray.forEach((elem, index) => {
    if (elem > 0) {
      difDoor.push(doorsArea()[index]);
    }
  });
  doorsAreaToDif = difDoor.reduce((sum, i) => sum + i, 0);
  return doorsAreaToDif;
};

const windowsAreaCalculate = () => {
  const difWindow = [];
  let windowsAreaToDif = 0;
  const windowsArray = [windows().window1,
    windows().window2,
    windows().window3,
    windows().window4];
  windowsArray.forEach((elem, index) => {
    if (elem > 0) {
      difWindow.push(windowsArea()[index]);
    }
  });
  windowsAreaToDif = difWindow.reduce((sum, i) => sum + i, 0);
  return windowsAreaToDif;
};

export const inkCalculate = () => {
  const div1 = 2.5;
  const div2 = 12.5;
  const div3 = 18;
  const div4 = 90;
  const mult = 0.5;
  const doorsAreaToDif = doorsAreaCaluculate();
  const windowsAreaToDif = windowsAreaCalculate();

  const totalArea = wallsArea()
    .reduce((sum, i) => sum + i - doorsAreaToDif - windowsAreaToDif);
  const ink1 = totalArea / div1;
  const ink2 = totalArea / div2;
  const ink3 = totalArea / div3;
  const ink4 = totalArea / div4;
  const ink5 = ink1 * mult;
  return [ink1, ink2, ink3, ink4, ink5];
};

export const inputMap = () => {
  inputVerification();
  const [door1, door2, door3, door4] = [doors().door1,
    doors().door2,
    doors().door3,
    doors().door4];

  doorVerification(door1, walls().wall1Height);
  doorVerification(door2, walls().wall2Height);
  doorVerification(door3, walls().wall3Height);
  doorVerification(door4, walls().wall4Height);

  return areaVerification();
};
