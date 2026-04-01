window.onload = function() {
    const track = document.getElementById('track');

    track.innerHTML += track.innerHTML;

    const originalWidth = track.scrollWidth / 2;

    let position = 0;
    function animate() {
        position -= 1;
        if (Math.abs(position) === originalWidth) {
            position = 31;
        }
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}