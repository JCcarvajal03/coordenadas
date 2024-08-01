function polarToCartesian() {
    let r = parseFloat(document.getElementById('r').value);
    let theta = parseFloat(document.getElementById('theta').value);
    
    let thetaRad = theta * Math.PI / 180; // Convertir grados a radianes
    let x = r * Math.cos(thetaRad);
    let y = r * Math.sin(thetaRad);
    
    document.getElementById('cartesian-result').innerText = 
        `Coordenadas Cartesianas: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
}

function cartesianToPolar() {
    let x = parseFloat(document.getElementById('x').value);
    let y = parseFloat(document.getElementById('y').value);
    
    let r = Math.sqrt(x*x + y*y);
    let theta = Math.atan2(y, x) * 180 / Math.PI; // Convertir radianes a grados
    
    document.getElementById('polar-result').innerText = 
        `Coordenadas Polares: r = ${r.toFixed(2)}, θ = ${theta.toFixed(2)}°`;
}
