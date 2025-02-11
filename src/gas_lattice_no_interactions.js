import React, {useEffect, useRef, useState} from "react";

const GasLatticeCanvasNoInteractions = (props) => {
    const canvasRef = useRef(null);
    const cols = 150;
    const rows = 150;
    const [context, setContext] = useState(null);
    let velocities = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0],
        [1,1],
        [-1,-1],
        [1,-1],
        [-1,1]
    ]

    const createBooleanArray = () => {
        let booleanArray = [];
        for (let i = 0; i < cols; i++) {
            booleanArray[i] = Array(rows);
        }
        return booleanArray;
    }

    const initializeBooleanArray = () => {
        let booleanArray = createBooleanArray();
        for (let i = 0; i < cols - 1; i++) {
            for (let j = 0; j < rows - 1; j++) {
                let v_seed = getRandomInt(0, 7);
                // Lining the edges with 0s
                if (i === 0 || j === 0 || i === cols - 1 || j === rows - 1) booleanArray[i][j] = [0,v_seed];
                // Filling the rest randomly
                else {
                    let seed = Math.random();
                    if (seed <= 0.8) {
                        booleanArray[i][j] = [0,v_seed];
                    } else {
                        booleanArray[i][j] = [1,v_seed];
                    }
                }
            }
        }
        return booleanArray;
    }

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const drawCell = (context, x, y, alive) => {
        var a = 0
        if (alive) {
            a = 1
        }
        let r = 20;
        let g = 255 - 0.1*y;
        let b = 255 - 0.1*x;
        context.fillStyle = context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        context.fillRect(x, y, context.canvas.width / rows, context.canvas.height / cols);
    }

    const hop = (booleanArray) => {
        for (let i = 0; i < rows-2; i++) {
            for (let j = 0; j < cols-2; j++) {
                if (booleanArray[i][j][0] === 1) {
                    let particle_velocity = booleanArray[i][j][1];
                    let new_x = i + velocities[particle_velocity][0];
                    let new_y = j + velocities[particle_velocity][1];
                    booleanArray[i][j] = booleanArray[new_x][new_y];
                }
                // if (booleanArray[i][j][1] === 2 &&  booleanArray[i+1][j][1] === 3) {
                //     booleanArray[i][j][1] = 3;
                //     booleanArray[i+1][j][1] = 2;
                // }
                // if (booleanArray[i][j][1] === 0 &&  booleanArray[i][j+1][1] === 1) {
                //     booleanArray[i][j][1] = 1;
                //     booleanArray[i][j+1][1] = 0;
                // }
                // if (booleanArray[i][j][1] === 4 &&  booleanArray[i+1][j+1][1] === 5) {
                //     booleanArray[i][j][1] = 5;
                //     booleanArray[i+1][j+1][1] = 4;
                // }
                // if (i === 0) {
                //     if (booleanArray[i][j][1] === 3) {
                //         booleanArray[i][j][1] = 2;
                //     }
                //     if (booleanArray[i][j][1] === 5) {
                //         booleanArray[i][j][1] = 4;
                //     }
                //     if (booleanArray[i][j][1] === 5) {
                //         booleanArray[i][j][1] = 6;
                //     }
                // }
                // if (j === 0) {
                //     if (booleanArray[i][j][1] === 1) {
                //         booleanArray[i][j][1] = 0;
                //     }
                //     if (booleanArray[i][j][1] === 6) {
                //         booleanArray[i][j][1] = 5;
                //     }
                //     if (booleanArray[i][j][1] === 6) {
                //         booleanArray[i][j][1] = 7;
                //     }
                // }
            }
        }
        return booleanArray;
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.booleanArray = initializeBooleanArray();

        const draw = (booleanArray) => {
            for (let i = 0; i < rows-1; i++) {
                for (let j = 0; j < cols-1; j++) {
                    let x = i * (context.canvas.width / rows);
                    let y = j * (context.canvas.height / cols);
                    if (booleanArray[i][j][0] === 1) {
                        drawCell(context, x, y, true);
                    } else {
                        drawCell(context, x, y, false);
                    }
                }
            }
        }

        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.booleanArray = initializeBooleanArray();
            context.booleanArray = hop(context.booleanArray);
            draw(context.booleanArray);
            //context.booleanArray = [];
            window.requestAnimationFrame(animate);
        }
        window.requestAnimationFrame(animate);

    },[canvasRef, hop, initializeBooleanArray])

    return (
        <div>
            <canvas ref={canvasRef} width={400} height={400} style={{
                position: 'relative',
                top: '50px',
                left: '100px',
                border: '1px solid black',
            }}/>
        </div>
    );
}

export default GasLatticeCanvasNoInteractions;

