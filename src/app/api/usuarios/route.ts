import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

    try {
        const dados = await req.json();

        const {
            nome,
            sobrenome,
            cpf,
            email,
            telefone,
            senha,
            confirmarSenha,
        } = dados;
        /* ===============================
           1. Validações obrigatórias
        =============================== */

        if (
            !nome ||
            !sobrenome ||
            !cpf ||
            !email ||
            !telefone ||
            !senha ||
            !confirmarSenha

        ) {
            return NextResponse.json(
                { status: 400, sucesso: false, mensagem: "Campos obrigatórios ausentes." },
                // { status: 400 }
            );
        }

        if (senha !== confirmarSenha) {
            return NextResponse.json(
                { status: 400, sucesso: false, mensagem: "As senhas não conferem." },
                // { status: 400 }
            );
        }

        /* ===============================
           2. Verificar duplicidade
        =============================== */

        const usuarioExistente = await prisma.user.findFirst({
            where: {
                OR: [{ cpf }, { email }],
            },
        });

        if (usuarioExistente) {
            return NextResponse.json(
                { status: 409, sucesso: false, mensagem: "Usuário já cadastrado." },
                // { status: 409 }
            );
        }
        /* ===============================
                 3. Hash da senha
              =============================== */

        const senhaHash = await bcrypt.hash(senha, 10);

        /* ===============================
           4. Persistência no banco
        =============================== */

        await prisma.user.create({
            data: {
                nome,
                sobrenome,
                cpf,
                email,
                telefone,
                senha: senhaHash,
            },
        });

        return NextResponse.json(
            { status: 201, sucesso: true, mensagem: "Usuário criado com sucesso." },
            // { status: 201 }
        );


    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { status: 500, sucesso: false, mensagem: "Erro interno no servidor." },
            { status: 500 }
        );
    }
}
