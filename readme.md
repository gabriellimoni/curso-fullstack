# Curso fullstack completo

A ideia aqui é estruturar um curso implementando um sistema de gestão e acesso de uma plataforma de streaming de cursos.

O plataforma vai conter Cursos com vários Módulos, cada módulo contendo várias Aulas.

Vai haver dois papéis de usuário: Admin e Convencional. O Admin vai poder realizar o CRUD completo dos cursos. O Convencional vai poder acessar apenas alguns cursos a depender da Assinatura que ele possuir.

## Ferramentas que vamos usar

1. Monorepo para centralizar as entidades
1. Node + Mongo (Atlas) para construir a API
1. React com Next + React Admin para construir o frontend
1. Next-Auth + Auth0 para trabalhar autenticação
1. (Bônus) Bunny.net para fazer o stream dos vídeos
1. (Bônus) Pagar.me para fazer integração de pagamentos
