import axios from 'axios'

const USUARIOS_URL = 'http://localhost:8080/usuarios';

class UsuarioService {

    getUsuarios(){
      return axios.get(USUARIOS_URL);
    }
}

export default new UsuarioService();