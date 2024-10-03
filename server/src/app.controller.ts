import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags("Misc")
export class AppController{
    constructor(){
    }

    @Get("version")
    getVersion(){
        return process.env.npm_package_version;
    }
}
