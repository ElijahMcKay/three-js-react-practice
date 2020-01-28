import React, { useState } from 'react';
import * as THREE from 'three'; 

// styling imports 
import "./SpinningCube.scss"; 

const SpinningCube = (props) => {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( props.width, props.height );
    // this wasn't working because this code was running before the component rendered, hence nothing to select from the DOM
    setTimeout(() => {
        const cubeComponent = document.querySelector('.testing'); 
        console.log(cubeComponent)
        cubeComponent.appendChild( renderer.domElement );
    }, 1000)



    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xdddddd } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 2;

    const animate = () => {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render( scene, camera );
    }
    animate(); 

    console.log(props); 
    return ( 
        <div className="sc-wrapper">
            <p className="testing">
            </p>
        </div> );
}
 
export default SpinningCube;
