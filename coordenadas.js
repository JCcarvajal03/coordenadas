// Función para convertir de polares a cartesianas
function convertirPolarACartesiana(r, theta) {
    let thetaRad = theta * Math.PI / 180; // Convertir grados a radianes
    let x = r * Math.cos(thetaRad);
    let y = r * Math.sin(thetaRad);
    return { x, y };
}

// Función para convertir de cartesianas a polares
function convertirCartesianaAPolar(x, y) {
    let r = Math.sqrt(x * x + y * y);
    let theta = Math.atan2(y, x) * 180 / Math.PI; // Convertir radianes a grados
    return { r, theta };
}

// Función para manejar la conversión de polares a cartesianas e interactuar con el DOM
function polarToCartesian() {
    let r = parseFloat(document.getElementById('r').value);
    let theta = parseFloat(document.getElementById('theta').value);
    
    let resultado = convertirPolarACartesiana(r, theta);
    
    document.getElementById('cartesian-result').innerText = 
        `Coordenadas Cartesianas: x = ${resultado.x.toFixed(2)}, y = ${resultado.y.toFixed(2)}`;
}

// Función para manejar la conversión de cartesianas a polares e interactuar con el DOM
function cartesianToPolar() {
    let x = parseFloat(document.getElementById('x').value);
    let y = parseFloat(document.getElementById('y').value);
    
    let resultado = convertirCartesianaAPolar(x, y);
    
    document.getElementById('polar-result').innerText = 
        `Coordenadas Polares: r = ${resultado.r.toFixed(2)}, θ = ${resultado.theta.toFixed(2)}°`;
}
