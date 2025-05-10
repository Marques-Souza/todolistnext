
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA3IZ3TSl1RCNYmqPL3ysPgyAN0VxijWbM",
    authDomain: "tarefas-7d990.firebaseapp.com",
    projectId: "tarefas-7d990",
    storageBucket: "tarefas-7d990.firebasestorage.app",
    messagingSenderId: "346648899228",
    appId: "1:346648899228:web:66ca7546011e89a03cc759"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };