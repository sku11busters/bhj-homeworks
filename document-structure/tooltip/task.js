const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(tooltip => {
    const title = tooltip.getAttribute('title');

    tooltip.addEventListener('click', e => {
        e.preventDefault();
        const tooltipElement = document.createElement('div');
        tooltipElement.innerText = title;
        tooltipElement.classList.add('tooltip');
        tooltipElement.style.top = tooltip.offsetTop + tooltip.offsetHeight + 'px';
        tooltipElement.style.left = tooltip.offsetLeft + 'px';

        document.body.appendChild(tooltipElement);
        tooltipElement.classList.add('tooltip_active');

        setTimeout(() => {
            tooltipElement.remove();
        }, 1500);
    });
});