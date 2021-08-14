import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Res,
	UploadedFiles,
	UseGuards,
	UseInterceptors,
} from "@nestjs/common"
import { FilesInterceptor } from "@nestjs/platform-express"
import { diskStorage } from "multer"
import * as path from "path"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard"
import { CreateNewsDto } from "./dto/create-news.dto"
import { NewsService } from "./news.service"

@Controller("news")
export class NewsController {
	constructor(private newsSrvc: NewsService) {}
	@UseGuards(JwtAuthGuard)
	@Post()
	@UseInterceptors(
		FilesInterceptor("image", 10, {
			storage: diskStorage({
				destination: "./imgnews",
				filename: (req, file, cb) => {
					const filename: string = `files_${Date.now().toString()}`
					const ext: string = path.parse(file.originalname).ext
					cb(null, `${filename}${ext}`)
				},
			}),
		}),
	)
	create(
		@Body() dto: CreateNewsDto,
		@UploadedFiles() files: Array<Express.Multer.File>,
	) {
		const arr: string[] = []
		files &&
			files.length > 0 &&
			files.forEach((item) => arr.push(item.filename))
		return this.newsSrvc.create(dto, arr)
	}

	@UseGuards(JwtAuthGuard)
	@Put("/:id")
	@UseInterceptors(
		FilesInterceptor("image", 10, {
			storage: diskStorage({
				destination: "./imgnews",
				filename: (req, file, cb) => {
					const filename: string = `files_${Date.now().toString()}`
					/* const filename: string =
						path.parse(file.originalname).name.replace(/\s/g, "") +
						`files_${Date.now().toString()}` */
					const ext: string = path.parse(file.originalname).ext
					cb(null, `${filename}${ext}`)
				},
			}),
		}),
	)
	update(
		@Param("id") id: number | string,
		@Body() dto: CreateNewsDto,
		@UploadedFiles() files: Array<Express.Multer.File>,
	) {
		const arr: string[] = []
		files.forEach((item) => arr.push(item.filename))
		return this.newsSrvc.update(id, dto, arr)
	}

	@Get()
	show() {
		return this.newsSrvc.showAll()
	}

	@Get("/:link")
	showOne(@Param("link") link: string) {
		return this.newsSrvc.showOne(link)
	}

	@UseGuards(JwtAuthGuard)
	@Delete("/:id")
	delete(@Param("id") id: number) {
		return this.newsSrvc.delete(id)
	}

	@Get("/news-photo/:photoID")
	newsPhoto(@Param("photoID") photoID, @Res() res) {
		return res.sendFile(photoID, { root: "imgnews" })
	}
}
