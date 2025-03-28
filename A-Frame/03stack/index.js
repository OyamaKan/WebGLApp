// forked from cx20's "[WebVR] A-Frame で WebVR を試してみるテスト（その３）（調整中）" http://jsdo.it/cx20/0ZUL
// forked from cx20's "[WebVR] A-Frame で WebVR を試してみるテスト（その２）（調整中）" http://jsdo.it/cx20/yzbu
// forked from cx20's "[WebVR] A-Frame で WebVR を試してみるテスト（調整中）" http://jsdo.it/cx20/6X3S
// forked from cx20's "[WebGL] A-Frame を試してみるテスト（その４）" http://jsdo.it/cx20/k7B2
// forked from cx20's "[WebGL] A-Frame を試してみるテスト（その３）" http://jsdo.it/cx20/qgOl
// forked from cx20's "[WebGL] A-Frame を試してみるテスト（その２）" http://jsdo.it/cx20/OclK
// forked from cx20's "[WebGL] A-Frame を試してみるテスト" http://jsdo.it/cx20/AOwl
// forked from cx20's "[簡易版] 30行で WebGL を試してみるテスト" http://jsdo.it/cx20/oaQC

let scene = document.querySelector("a-scene");
let meshes = [];
const max = 200;

for (let i = 0; i < max; i++) {
    let x = -50 / 100 + Math.random();
    let y = 200 / 100 + Math.random();
    let z = -50 / 100 + Math.random() - 2;

    let mesh = document.createElement("a-box");
    let scale = Math.min(1, Math.random() + 0.3) * 0.3;

    mesh.setAttribute("position", `${x} ${y} ${z}`);
    mesh.setAttribute("dynamic-body", "");
    mesh.setAttribute("scale", `${scale} ${scale} ${scale}`);
    mesh.setAttribute("color", `${getRandomHSLColor()};`);
    mesh.setAttribute("mass", Math.random());

    meshes.push(mesh);
    scene.appendChild(mesh);
}

function getRandomHSLColor() {
    const h = Math.floor(Math.random() * 360); // 色相: 0〜359
    const s = Math.floor(Math.random() * 101); // 彩度: 0〜100%
    const l = Math.floor(Math.random() * 101); // 明度: 0〜100%
    return `hsl(${h}, ${s}%, ${l}%)`;
}


function render() {
    requestAnimationFrame(render);

    for (let i = 0; i < max; i++) {
        let mesh = meshes[i];
        let position = mesh.getAttribute("position");

        if (position.y < -1) {
            let x = -50 / 100 + Math.random();
            let y = 200 / 100 + Math.random();
            let z = -50 / 100 + Math.random() - 2;
            mesh.body.position.set(x, y, z);
            mesh.body.velocity.set(0, 0, 0);
        }
    }
}

render();

