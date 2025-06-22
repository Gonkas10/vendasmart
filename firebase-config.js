// Importa as funções do SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHL60wWZmnkTnML0fQfB8nzQ8v1Lg2o3s",
  authDomain: "vendasmart-81e36.firebaseapp.com",
  projectId: "vendasmart-81e36",
  storageBucket: "vendasmart-81e36.appspot.com",
  messagingSenderId: "10406121081",
  appId: "1:10406121081:web:3ee2a445483dabbfb1d638",
  measurementId: "G-J1KRTFN8YG"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação
export const auth = getAuth(app);
