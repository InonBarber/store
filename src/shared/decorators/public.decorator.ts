import {createMethodDecorator} from "@nestjs/swagger/dist/decorators/helpers";
import {SetMetadata} from "@nestjs/common";

export const Public = () => SetMetadata('isPublic', true)