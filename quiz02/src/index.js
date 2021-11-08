import {
    initializeApp
} from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    onValue,
    push
} from 'firebase/database';

import {
    getFirebaseConfig
} from './firebase-config';
import {
    userCard
} from './user-card';

// Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

function registrarUsuario(user) {
    // Obtener la base datos
    const db = getDatabase();
    const newUserRef = push(ref(db, 'users'));
    console.log(newUserRef);

    // injectar el id
    user["id"] = newUserRef.key
    // escribir un nuevo usuario
    set(newUserRef, user);
}

function getUsuarios() {
   
    const db = getDatabase();
    const dbRef = ref(db, 'users');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
       // console.log("lista", data);
        actualizarLista(data);
    });
    
}

function actualizarLista(info) {
    if (info) {
        userList.innerHTML = "";
        userList2.innerHTML = "";
        userList3.innerHTML = "";
        Object.keys(info).forEach((k, index) => {
          
            console.log("Objeto", info[k])
            const card = new userCard(info[k])
if(info[k].numero<5){
    userList.appendChild(card.render());
}
if(info[k].numero<10&&info[k].numero>=5){
    userList2.appendChild(card.render());
}        
if(info[k].numero>=10){
    userList3.appendChild(card.render());
}     
        });

    } else {
        userList.innerHTML = "No hay usuarios registrados";
        userList2.innerHTML = "No hay usuarios registrados";
        userList3.innerHTML = "No hay usuarios registrados";
    }
}

const nombre = document.getElementById("nom");
const codigo = document.getElementById("cod");
const curso = document.getElementById("cur");
const registraBtn = document.getElementById("registrar_btn");
const userList = document.getElementById("userslist");
const userList2 = document.getElementById("userslist2");
const userList3 = document.getElementById("userslist3");
const num = 0;

const registroEvento = (e, event) => {
    //console.log("ejecutó evento")
    const user = {
        nombre: nom.value,
        codigo: cod.value,
        curso: cur.value,
        numero: num
    }
    registrarUsuario(user)
}

registraBtn.addEventListener("click", registroEvento);
getUsuarios();