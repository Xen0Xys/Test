import {Controller, Get, HttpStatus, UseInterceptors} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {VersionEntity} from "./common/models/entities/version.entity";
import {CacheInterceptor} from "@nestjs/cache-manager";

@Controller()
@ApiTags("Misc")
export class AppController{
    constructor(){
    }

    @Get("version")
    @UseInterceptors(CacheInterceptor)
    @ApiResponse({status: HttpStatus.OK, description: "Returns the version of the application", type: VersionEntity})
    getVersion(){
        return {version: process.env.npm_package_version};
    }
}
