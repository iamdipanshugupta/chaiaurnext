import { NextRequest, NextResponse } from "next/server";

import { prisma } from "../../../../lib/db"

interface RouteContext {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, ctx: RouteContext) {
    try {
        const { id } = await ctx.params;

        const todo = await prisma.todo.findUnique({
            where:{
                id:id
            }        });

        if (!todo) {
            return NextResponse.json(
                { error: "todo not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { success: true, data: todo },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "failed to fetch todos" },
            { status: 500 }
        )
    }
}