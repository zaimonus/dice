(() => {
    const die = document.querySelector('.die');
    const SPIN_RANGE = 20;
    const FULL_ROTATION = 360;
    let previous_rotation_x = 0;
    let previous_rotation_y = 0;

    die.addEventListener("click", (event) => {
        const number = Math.floor(Math.random() * 6) + 1;
        
        let end_position_x, end_position_y;
        let final_rotation_x, final_rotation_y;
        
        switch (number) {
            case 1:
                end_position_x = 0;
                end_position_y = 0;
                break;
            case 2:
                end_position_x = 0;
                end_position_y = 90;
                break;
            case 3:
                end_position_x = 90;
                end_position_y = 0;
                break;
            case 4:
                end_position_x = -90;
                end_position_y = 0;
                break;
            case 5:
                end_position_x = 0;
                end_position_y = -90;
                break;
            case 6:
                end_position_x = 0;
                end_position_y = 180;
                break;
            default:
                break;
        }
        
        do {
            // get some extra rotations
            const extra_rotation_x = Math.floor(Math.random() * SPIN_RANGE);
            const extra_degrees_x = extra_rotation_x * FULL_ROTATION;
            final_rotation_x = end_position_x + extra_degrees_x;
            // ensure final rotation is different than the previous rotation
        } while (final_rotation_x == previous_rotation_x);
        
        do {
            // get some extra rotations
            const extra_rotation_y = Math.floor(Math.random() * SPIN_RANGE);
            const extra_degrees_y = extra_rotation_y * FULL_ROTATION;
            final_rotation_y = end_position_y + extra_degrees_y;
            // ensure final rotation is different than the previous rotation
        } while (final_rotation_y == previous_rotation_y);

        die.style.transform = `rotateX(${final_rotation_x}deg) rotateY(${final_rotation_y}deg)`;

        // set previous rotation for the next click
        previous_rotation_x = final_rotation_x;
        previous_rotation_y = final_rotation_y;
    });
})();
