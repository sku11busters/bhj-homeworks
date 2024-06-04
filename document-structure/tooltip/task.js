const tooltips = document.querySelectorAll('.has-tooltip');
let activeTooltip = null;

tooltips.forEach(tooltip => {
    const title = tooltip.getAttribute('title');

    tooltip.addEventListener('click', e => {
        e.preventDefault();

        if (activeTooltip && activeTooltip.innerText === title) {
            activeTooltip.classList.toggle('tooltip_active');
            return;
        }

        if (activeTooltip) {
            activeTooltip.remove();
        }

        const tooltipElement = document.createElement('div');
        tooltipElement.innerText = title;
        tooltipElement.classList.add('tooltip');
        tooltipElement.style.top = tooltip.offsetTop + tooltip.offsetHeight + 'px';
        tooltipElement.style.left = tooltip.offsetLeft + 'px';

        document.body.appendChild(tooltipElement);
        tooltipElement.classList.add('tooltip_active');

        activeTooltip = tooltipElement;

    });
});

