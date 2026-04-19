(() => {
    const die = document.querySelector('.die');
    let previous_rotation_x = 0;
    let previous_rotation_y = 0;

    die.addEventListener("click", (event) => {
        const number = Math.floor(Math.random() * 6) + 1;
        let end_position_x, end_position_y;
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
            const extra_rotation_x = (Math.random() * 3600);
            const rotation_overflow_x = extra_rotation_x % 360;
            const trimmed_rotations_x = extra_rotation_x - rotation_overflow_x;
            const final_rotation_x = end_position_x + trimmed_rotations_x;
        } while (final_rotation_x == previous_rotation_x);
        
        do {
            const extra_rotation_y = (Math.random() * 3600);
            const rotation_overflow_y = extra_rotation_y % 360;
            const trimmed_rotations_y = extra_rotation_y - rotation_overflow_y;
            const final_rotation_y = end_position_y + trimmed_rotations_y;
        } while (final_rotation_y == previous_rotation_y);

        previous_rotation_x = final_rotation_x;
        previous_rotation_y = final_rotation_y;
    
        // console.log(`number: ${number}`);
        // console.log(`end: ${end_position_x}, ${end_position_y}`);
        // console.log(`extra: ${extra_rotation_x}, ${extra_rotation_y}`);
        // console.log(`overflow: ${rotation_overflow_x}, ${rotation_overflow_y}`);
        // console.log(`trimmed: ${trimmed_rotations_x}, ${trimmed_rotations_y}`);
        // console.log(`final: ${final_rotation_x}, ${final_rotation_y}`);

        die.style.transform = `rotateX(${final_rotation_x}deg) rotateY(${final_rotation_y}deg)`;
    });
})();
