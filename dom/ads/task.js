const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let active = 0;

    function change() {
        cases[active].classList.remove('rotator__case_active');
        active === 5 ? active = 0 : active++;
        cases[active].classList.add('rotator__case_active');
    }

    setInterval(change, 1000);
});