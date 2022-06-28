import {createParamDecorator, ExecutionContext, NotFoundException} from "@nestjs/common";

export const User = createParamDecorator(
    async (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
)

export const ReqHeader = createParamDecorator(
    async (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.headers[data] || false;
    }
)