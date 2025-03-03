function inititaliseCopyContent() {

    function createCopyButton() {
        let button = document.createElement('a');
        button.classList.add('copy-content_button');
      	switch (copyContentOptions.buttonStyle) {
            case 'primary':
                button.classList.add('sqs-button-element--primary');
                break;
            case 'secondary':
                button.classList.add('sqs-button-element--secondary');
                break;
            case 'tertiary':
                button.classList.add('sqs-button-element--tertiary');
                break;
        }
        button.innerHTML = `${copyContentOptions.buttonInitialText}`;
        button.addEventListener('click', function() {
            let copyContent = this.parentElement;
            if (copyContent) {
                navigator.clipboard.writeText(copyContent.childNodes[0].textContent).then(() => {
                    let originalText = button.innerHTML;
                    button.innerHTML = `${copyContentOptions.buttonSuccessText}`;
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 3000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        });
        return button;
    }

    let copyBlocks = document.querySelectorAll('.source-code');
    copyBlocks.forEach((block) => {
      	block.classList.add('copy-content');
        let button = createCopyButton();
        block.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', inititaliseCopyContent);