declare namespace Projeto {
    type Usuario = {
        id?: number;
        nome: string;
        login: string;
        email: string;
        senha: string;
    };

    type Recurso = {
        id?: number;
        nome: string;
        chave: string;
    };

    type Perfil = {
        id?: number;
        descricao: string;
    };

    type PerfilUsuario = {
        id?: number;
        usuario: Usuario;
        perfil: Perfil;
    };

    type PermissaoPerfilRecurso = {
        id?: number;
        perfil: Perfil;
        recurso: Recurso;
    };
}
