let x = 0,
    y = 0;


export function shortCuts(e) {

    if (e.key === "a" && e.altKey) {
        alert("haz lanzado alert");
    }

    if (e.key === "ñ" && e.ctrlKey) {
        prompt("escribe");
    }

}


export function moveBall(e, ball, stage) {
    const $ball = document.querySelector(".ball"),
        $stage = document.querySelector(".stage"),
        limitsBall = $ball.getBoundingClientRect(),
        limitStage = $stage.getBoundingClientRect();


    console.log(e.keyCode);


    switch (e.keyCode) {

        case 37:
            // move("left");
            e.preventDefault();
            if (limitsBall.left > limitStage.left) x--;
            break;
        case 38:
            // move("up");
            e.preventDefault();
            if (limitsBall.top > limitStage.top) y--;
            break;
        case 39:
            // move("right");
            e.preventDefault();
            if (limitsBall.right < limitStage.right) x++;
            break;
        case 40:
            //     move("down");
            e.preventDefault();
            if (limitsBall.bottom < limitStage.bottom) y++;
            break;

    }
    $ball.style.transform = `translate(${x * 9}px, ${y * 8}px)`;
}