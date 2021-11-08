const firebaseConfig = {
    apiKey: "AIzaSyA5RwczKsM0i8bq0Z_61K9O3HRMY6D0JkQ",
    authDomain: "quiz2-c1f7a.firebaseapp.com",
    databaseURL: "https://quiz2-c1f7a-default-rtdb.firebaseio.com",
    projectId: "quiz2-c1f7a",
    storageBucket: "quiz2-c1f7a.appspot.com",
    messagingSenderId: "735896260862",
    appId: "1:735896260862:web:eb3de7384cf076654e15af",
    measurementId: "G-CFW52BC7QM"
  };
export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
