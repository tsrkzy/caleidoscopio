class Cell {
  static DEAD = 0;
  static ALIVE = 1;
}

export class Universe {
  width = 0;
  height = 0;
  cells = [];

  constructor() {
    const width = 64;
    const height = 64;
    const cells = new Array(width * height).fill(0)
      .map((_, i) => (i % 2 === 0 || i % 7 === 0) ? Cell.ALIVE : Cell.DEAD);

    this.width = width;
    this.height = height;
    this.cells = cells;
  }

  render() {
    let text = "";
    const w = this.width;
    let x = 0;
    for (let i = 0; i < this.cells.length; i++) {
      let c = this.cells[i];
      if (c === Cell.ALIVE) {
        text += "■";
      } else {
        text += "□";
      }
      x++;
      if (x === w) {
        text += "\n";
        x = 0;
      }
    }
    return text;
  }

  getIndex(row, col) {
    return (row * this.width + col);
  }

  liveNeighborCount(row, col) {
    let count = 0;

    const deltas = [-1, 0, 1];

    for (let i = 0; i < deltas.length; i++) {
      let rd = deltas[i];

      for (let j = 0; j < deltas.length; j++) {
        let cd = deltas[j];
        if (rd === 0 && cd === 0) {
          continue;
        }

        /* 画面の上下左右はループ */
        const r = (row + rd) % this.height;
        const c = (col + cd) % this.width;
        const index = this.getIndex(r, c);
        count += this.cells[index];
      }
    }

    return count;
  }


  tick() {
    const newCells = this.cells.slice();

    const { width, height, cells = [] } = this;

    for (let c = 0; c < width; c++) {
      for (let r = 0; r < height; r++) {
        const index = this.getIndex(r, c);
        const cell = cells[index];
        const alives = this.liveNeighborCount(r, c);

        let next = Cell.DEAD;
        if (cell === Cell.ALIVE) {
          if (alives === 2 || alives === 3) {
            next = Cell.ALIVE;
          }
        } else {
          if (alives === 3) {
            next = Cell.ALIVE;
          }
        }

        newCells[index] = next;
      }
    }

    this.cells = newCells;
  }
}

