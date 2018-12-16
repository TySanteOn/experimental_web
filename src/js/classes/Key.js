import EntityLight from "./EntityLight.js";

class Key {
    constructor(getal, scene, keys, keyPositions) {
        const loader = new THREE.ObjectLoader();
        loader.load('assets/data/key.dae.json', object => {
            const key = object;
            key.name = getal;
            key.scale.set(.1, .1, .1);
            key.position.y = 180;
            key.receiveShadow = true;
            key.castShadow = true;

            //links/rechts
            key.position.x = keyPositions[getal].x;
            key.position.z = keyPositions[getal].z;
            key.rotation.y = keyPositions[getal].direction;

            const pointLightKey = new EntityLight(key.position.x, key.position.y, key.position.z, 0xffffff);
            pointLightKey.light.castShadow = true;

            keys.push(key);
            keys.forEach(key => {
                scene.add(key, pointLightKey.light);
            });
        });
    }
};

export default Key;