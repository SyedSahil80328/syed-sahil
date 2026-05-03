[
    ['languages', 'element'],
    ['development-tools', 'element'],
    ['focus-areas', 'element'],
    ['educations', 'element'],
    ['contacts', 'link']
].forEach(pair => {
    fetch(`../assets/set-containers/${pair[0]}.txt?noCache=${Date.now()}`)
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

['about-me', 'gen-digital', 'csrc', 'fall-guard', 'nav-aid', 'rail-net'].forEach(id => {
    fetch(`../assets/descriptions/${id}.txt?noCache=${Date.now()}`)
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const setContainerPlaceHolder = document.getElementById(id);
        
        var p = document.createElement('p');
        p.innerHTML = lines[0];
        setContainerPlaceHolder.appendChild(p);
        p = document.createElement('p');
        setContainerPlaceHolder.appendChild(p);

        for (j=1 ; j<lines.length ; j++) {
            p.innerHTML += lines[j];
        }

    })
    .catch(err => console.error('Error loading file:', err));
});