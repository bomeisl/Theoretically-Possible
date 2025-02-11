import React, {useRef, useEffect, useState} from "react";

const ConwayCanvas = (props) => {
    const canvasRef = useRef(null);
    const cols = 100;
    const rows = 100;
    const [context, setContext] = useState(null);

    const createBooleanArray = () => {
        let booleanArray = [];
        for (let i = 0; i < cols; i++) {
            let rowArray = Array(rows);
            booleanArray[i] = rowArray;
        }
        return booleanArray;
    }

    const initializeBooleanArray = () => {
        let booleanArray = createBooleanArray();
        for (let i = 0; i < cols - 1; i++) {
            for (let j = 0; j < rows - 1; j++) {
                // Lining the edges with 0s
                if (i === 0 || j === 0 || i === cols - 1 || j === rows - 1) booleanArray[i][j] = 0;
                // Filling the rest randomly
                else {
                    let seed = Math.random();
                    if (seed <= 0.95) {
                        booleanArray[i][j] = 0;
                    } else {
                        booleanArray[i][j] = 1;
                    }
                }
            }
        }
        return booleanArray;
    }

    const evolveBooleanArray = (booleanArray) => {
        for (let i = 0; i < rows - 1; i++) {
            for (let j = 0; j < cols; j++) {
                // tabulate number of alive neighboring cells
                let coord = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
                let aliveNeighbors = 0;
                for (let j = 0; j < 8; j++) {
                    let neighborRow = i + coord[j][0];
                    let neighborCol = j + coord[j][1];
                    if (neighborRow >= 0 && neighborCol >= 0 && neighborRow < rows && neighborCol < cols) {
                        if (booleanArray[neighborRow][neighborCol]) {
                            aliveNeighbors++;
                        }
                    }
                }
                // Set new grid
                if (booleanArray[i][j] === 1 && aliveNeighbors < 2) {
                    booleanArray[i][j] = 0;
                } else if (booleanArray[i][j] === 1 && aliveNeighbors > 3) {
                    booleanArray[i][j] = 0;
                } else if (booleanArray[i][j] === 0 && aliveNeighbors == 3) {
                    booleanArray[i][j] = 1;
                } else {
                }
            }
        }
        return booleanArray;
    }


    const drawCell = (context, x, y, alive) => {
        var a = 0
        if (alive) {
            a = 1
        }
        let r = 20;
        let g = 255 - .5 * y;
        let b = 255 - .5 * x;
        context.fillStyle = context.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        context.fillRect(x, y, context.canvas.width / rows, context.canvas.height / cols);
    }



    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.booleanArray = initializeBooleanArray();

        const draw = (booleanArray) => {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let x = i * (context.canvas.width / rows);
                    let y = j * (context.canvas.height / cols);
                    if (booleanArray[i][j] === 1) {
                        drawCell(context, x, y, true);
                    } else {
                        drawCell(context, x, y, false);
                    }
                }
            }
        }

        const animate = () => {
            //context.clearRect(0, 0, canvas.width, canvas.height);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.booleanArray = initializeBooleanArray();
            context.booleanArray = evolveBooleanArray(context.booleanArray);
            draw(context.booleanArray);
            context.booleanArray = [];
            window.requestAnimationFrame(animate);
        }
        window.requestAnimationFrame(animate);

    },[canvasRef, initializeBooleanArray])

        return (
            <div>
                <canvas ref={canvasRef} width={300} height={300} style={{
                    position: 'absolute',
                    top: '50px',
                    left: '500px',
                    border: '1px solid black',
                }}/>
            </div>
        );
}


export default ConwayCanvas;
