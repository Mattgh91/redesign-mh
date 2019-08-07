/**
 * Enable focus states when tab is pressed
 * Disable focus states when mouse is used
 * "Borrowed" from https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
 *
 * @author  Matt Haynes <matthew.haynes@joipolloi.com>
 * @package Matt Haynes - Personal site
 */

const EnableTabbing = () => {
    const handleFirstTab = (e) => {
        if (e.keyCode === 9) {
            document.body.classList.add('tabbing');
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    };
    const handleMouseDownOnce = () => {
        document.body.classList.remove('tabbing');
        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    };
    window.addEventListener('keydown', handleFirstTab);
};

export default EnableTabbing;
