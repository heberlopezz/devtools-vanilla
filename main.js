document.getElementById('info').addEventListener('click', () => console.log('Hello, Console!'));

document.getElementById('warning').addEventListener('click', () => console.warn('Abandon Hope All Ye Who Enter'));

document.getElementById('log-error').addEventListener('click', () => console.error(`I'm sorry, Dave. I'm afraid I can't do that.`));

document.getElementById('table').addEventListener('click', () => {
  console.table([
    {
      first: 'René',
      last: 'Magritte',
    },
    {
      first: 'Chaim',
      last: 'Soutine',
      birthday: '18930113',
    },
    {
      first: 'Henri',
      last: 'Matisse',
    }
  ]);
});

document.getElementById('group').addEventListener('click', () => {
  const label = 'Adolescent Irradiated Espionage Tortoises';
  console.group(label);
  console.info('Leo');
  console.info('Mike');
  console.info('Don');
  console.info('Raph');
  console.groupEnd(label);
});

document.getElementById('custom').addEventListener('click', () => {
  const spacing = '5px';
  const styles = 
        `padding: ${spacing}; background-color: #1a73e8; color: white; font-style: 
         italic; border: ${spacing} solid black; font-size: 2em;`;
  console.log('%cDevTools tus mejores amigos', styles);
});

document.getElementById('error').addEventListener('click', () => {
  document.getElementById('date').textContent = new Date();
});

document.getElementById('network').addEventListener('click', (e) => {
  fetch('/coffee');
});

console.log('estoy escribiendo')

localStorage.setItem('test','devtools')