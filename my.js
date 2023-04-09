let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3; 

let renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x404040);
renderer.setSize(innerWidth, innerHeight);

renderer.domElement.setAttribute("id", "Church3DObj");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

let controls = new THREE.OrbitControls(camera, renderer.domElement);

const aLight = new THREE.DirectionalLight(0xffffff, 1.5);
aLight.position.setScalar(10);
scene.add(aLight, new THREE.AmbientLight(0xffffff, 0.5));

let loader = new THREE.GLTFLoader();
let obj = null;
let for1

loader.load('babylonBathroom.glb', function(gltf) {
  obj = gltf.scene;
    
  scene.add(obj);
        
});

renderer.setAnimationLoop(_ => {
  renderer.render(scene, camera);
})


// ** пишемо функцію конструктор(краще буде клас), де ми будемо мати метод, який буде міняти кольори, наприклад в стіні де є дзеркала (доступаємося до тієї стіни так: obj.children[0].children[23].children[2]) і буде приймати три параметри кольору
//*


function AddColor(col, col1, col2){
    this.showColor = function (el) {
        el.addEventListener('click', () => {
               console.log(obj);
           
            
            loader.load('babylonBathroom.glb', function(gltf) {
               obj = gltf.scene;
    
               scene.add(obj);
              
                console.log(col,col1,col2)
             
             const objWey =  obj.children[0].children[23].children[2].material.color       
                    
                    
             objWey.b = col
             objWey.r = col1
             objWey.g = col2
});
                
        })
            
    }
        
}

    
let color = new AddColor(1,0.2,0.5);
let color1 = new AddColor(0,1,1);
let color2 = new AddColor(0.2,1,0.7);
    
let chousColor = document.querySelector('#chous');
let chousColor1 = document.querySelector('#chous1');
let chousColor2 = document.querySelector('#chous2');
    
color.showColor(chousColor);
color1.showColor(chousColor1);
color2.showColor(chousColor2);

