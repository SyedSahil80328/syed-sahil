[
    ['table-of-contents', 'element'],
    ['raspberry-pi-hardware', 'element'],
    ['software-development-tools', 'element'],
    ['soft-skills', 'element'],
    ['languages', 'element'],
    ['hardware-and-os', 'element'],
    ['development-practices', 'element'],
    ['bachelor-engineering-cs', 'element'],
    ['higher-secondary-education', 'element'],
    ['secondary-education', 'element'],
    ['contacts', 'link']
].forEach(pair => {
    fetch(`../assets/set-containers/${pair[0]}.txt`)
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const setContainerPlaceHolder = document.getElementById(pair[0]);
        lines.forEach(line => {
            const div = document.createElement('div');
            div.innerHTML = line;
            div.className = pair[1];
            setContainerPlaceHolder.appendChild(div);
        });
    })
    .catch(err => console.error('Error loading file:', err));
});

['about-me', 'gen-digital', 'csrc', 'cac', 'fall-guard', 'gait-sense', 'nav-aid', 'rail-net', 'scale-serve'].forEach(id => {
    fetch(`../assets/descriptions/${id}.txt`)
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const setContainerPlaceHolder = document.getElementById(id);
        lines.forEach(line => {
            const p = document.createElement('p');
            p.innerHTML = line;
            setContainerPlaceHolder.appendChild(p);
        });
    })
    .catch(err => console.error('Error loading file:', err));
});