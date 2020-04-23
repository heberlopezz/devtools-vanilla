const generateRandom = () => Math.floor((Math.random() * 10) + 1);

const executeFetch = () => {
  performance.mark('start');
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      performance.mark('end');
      performance.measure('test', 'start', 'end');
      const measures = performance.getEntriesByType('measure');
      console.log(json, measures);
    })
}
//executeFetch();

const exampleMemory = () => {
  let list = [];
  list.push(new Array(1000000).join('prueba'));
}
exampleMemory();