"use strict";

let mover = {
  getDirection() {
    const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
    while (true) {
      let direction = parseInt(prompt("Введите число (2, 4, 6 или 8), для перемещения по прямой, или (1, 7, 9 или 3) для перемещения по диагонали, 'отмена' выйти из игры"));
      if (isNaN(direction)) {
        return null;
      }
      if (!availableDirections.includes(direction)) {
        alert("Для перемещения необходимо ввести одно из чисел 1, 2,3, 4, 6, 7, 8 или 9.");
        continue;
      }
      return direction;
    }

  },
  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y
    };
    switch (direction) {
      case 1:
        nextPosition.y++;
        nextPosition.x--;
        break;
      case 2:
        nextPosition.y++;
        break;
      case 3:
        nextPosition.y++;
        nextPosition.x++;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 7:
        nextPosition.y--;
        nextPosition.x--;
        break;
      case 8:
        nextPosition.y--;
        break;
      case 9:
        nextPosition.y--;
        nextPosition.x++;
        break;
    }

    return nextPosition;
  },
  wallPlayerGo(nextPoint) {
    return nextPoint.x >= 0 && nextPoint.x < config.colsCount && nextPoint.y >= 0 && nextPoint.y < config.rowsCount;

  }
};