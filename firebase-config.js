// Importa as funções do SDK que precisas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHL60wWZmnkTnML0fQfB8nzQ8v1Lg2o3s",
  authDomain: "vendasmart-81e36.firebaseapp.com",
  projectId: "vendasmart-81e36",
  storageBucket: "vendasmart-81e36.appspot.com",
  messagingSenderId: "10406121081",
  appId: "1:10406121081:web:44efb3ee41599e93b1d638",
  measurementId: "G-LRCSSRXL2R"
};

// Inicializa a app Firebase
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação para usar nos outros ficheiros
export const auth = getAuth(app);
// Código exemplo
