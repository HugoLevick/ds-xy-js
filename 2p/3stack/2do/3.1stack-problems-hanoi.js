/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Using a array-based stack implementation
 * solve the hanoi towers problem
 * for 3 pegs
 *
 *
 * Integrantes:
 * Hugo Levick Alvarez Luna
 * Juan Diego Salazar Gutierrez
 *
 * 2B
 */

class Tower {
  //Clase Torre, parametros: array de elementos (opcional)
  constructor(items = []) {
    this.items = items;
  }
  push(element) {
    //Agrega el elemento si es menor al ultimo
    if (element < (this.peek() ?? element + 1)) this.items.push(element);
    else console.log("No se puedo agregar el elemento", element);
  }
  pop() {
    //Elimina el ultimo elemento y regresa su valor
    return this.items.pop();
  }
  peek() {
    //Muestra el ultimo elemento sin eliminarlo
    return this.items[this.items.length - 1];
  }
  toString() {
    //Convierte los elementos a una cadena y los regresa
    return this.items.toString();
  }
}

class Base {
  //Clase Base, parametros: numero de ruedas
  constructor(height = 3) {
    this.towers = [new Tower(), new Tower(), new Tower()];
    for (let i = height; i > 0; i--) this.towers[0].push(i);
    this.height = height;
  }

  move(startTower, endTower) {
    //Mueve los anillos de una torre a otra si es posible
    //Si la ultima posicion de la primera torre es menor a la ultima de la torre destino
    if (
      this.towers[startTower - 1].peek() <
      (this.towers[endTower - 1].peek() ??
        this.towers[startTower - 1].peek() + 1)
    ) {
      this.towers[endTower - 1].push(this.towers[startTower - 1].pop());
      return true;
    }
    return false;
  }
  toString(mensaje = "TORRES") {
    //Convierte los valores de las torres en string
    let cadena = `------${mensaje}------\n\n`;
    for (let i = this.height - 1; i >= 0; i--) {
      for (let j = 0; j < this.towers.length; j++)
        cadena += (this.towers[j].items[i] ?? "|") + "\t";
      cadena += "\n";
    }
    cadena += "-\t-\t-\nT1\tT2\tT3\n";
    return cadena;
  }
  solve(n = this.height, ori = 1, des = 3, aux = 2) {
    if (n == 1) {
      base.move(ori, des);
      console.log(base.toString(`Se movio de T${ori} a T${des}`));
    } else {
      this.solve(n - 1, ori, aux, des);
      this.move(ori, des);
      console.log(base.toString(`Se movio de T${ori} a T${des}`));
      this.solve(n - 1, aux, des, ori);
    }
  }
  towerHeight() {
    return this.height;
  }
}

// CREAR BASE
const base = new Base(3);

console.log(base.toString());

// ALGORITMO //
base.solve();
const movimientos = Math.pow(2, base.height) - 1;
console.log("Total de movimientos: " + movimientos);
