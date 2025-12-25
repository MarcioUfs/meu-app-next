import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    const { cpf, senha } = await req.json();
 
    const cpfLimpo = cpf.replace(/\D/g, "");
    if (!cpfLimpo || !senha) {
        return NextResponse.json(
            { sucesso: false, mensagem: "Dados inválidos" },
            { status: 400 }
        );
    }

    const usuario = await prisma.user.findUnique({
        where: { cpf: cpfLimpo },
    });

    if (!usuario) {
        return NextResponse.json(
            { sucesso: false, mensagem: "Usuario não encontrado" },
            { status: 401 }
        );
    }
    
    const senhaOk = await bcrypt.compare(senha, usuario.senha);
    if (!senhaOk) {
        return NextResponse.json(
            { sucesso: false, mensagem: "Senha inválida" },
            { status: 402 }
        );
    }

    return NextResponse.json({
        sucesso: true,
        usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
        },
    });
}
