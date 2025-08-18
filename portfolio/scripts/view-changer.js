document.querySelectorAll('.concealer h3').forEach(function(header) {
    header.addEventListener('click', function() {
        const project = header.parentElement;
        project.classList.toggle('expanded');
        const toggleButton = header.querySelector('.toggle-button');
        if (project.classList.contains('expanded')) {
            toggleButton.textContent = 'see less';
        } else {
            toggleButton.textContent = 'see more';
        }
    });
});

const titles = ['a Software Engineer!', 'an Application Developer!', 'a Web Developer!', 'a Mobile Developer!', 'an AI enthusiast!'];
designationField = document.getElementById('designation');

let end = 0, i=0;
let highlighterInterval = setInterval(highLightDesignation, 30);
let changerInterval = null;
let isIncrementing = true;

function updateIValue() {
    i = !isIncrementing?(i+1)%5:i;
    isIncrementing = !isIncrementing;
    clearInterval(changerInterval);
    highlighterInterval = setInterval(highLightDesignation, 30);
}

function highLightDesignation() {
    designationField.textContent = titles[i].substring(0, isIncrementing?++end:--end);
    if (end == titles[i].length || end == 0) {
        clearInterval(highlighterInterval);
        changerInterval = setInterval(updateIValue, isIncrementing?2000:500);
    }
}