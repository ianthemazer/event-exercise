document.addEventListener('DOMContentLoaded', function() {
    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input'); 
    let boxColor = '';
    let boxIdCounter = 1;
    colorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        boxColor = colorInput.value;
        const boxes = document.getElementsByClassName('box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = boxColor;
        }
        colorInput.value = '';
    });
    const addNewBox = function() {
        const newBox = document.createElement('div');
        newBox.className = 'box';
        newBox.id = 'box-' + boxIdCounter;
        newBox.addEventListener('mouseover', function() {
            newBox.textContent = newBox.id;
        });
        newBox.addEventListener('mouseout', function() {
            newBox.textContent = '';
        });
        newBox.style.backgroundColor = boxColor;
        boxIdCounter++;
        boxContainer.appendChild(newBox);
    };
    newBoxButton.addEventListener('click', addNewBox);
    document.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('box')) {
            event.target.remove();
        }
    });
    document.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('box')) {
            event.target.textContent = event.target.id;
        }
    });
    document.addEventListener('mouseout', function(event) {
        if (event.target.classList.contains('box')) {
            event.target.textContent = '';
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'N' || event.key === 'n') {
            if (event.target !== colorInput) {
                addNewBox();
            }
        }
    });
});
