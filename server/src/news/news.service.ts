import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { all } from "sequelize/types/lib/operators"
import { CreateNewsDto } from "./dto/create-news.dto"
import { News } from "./news.model"

@Injectable()
export class NewsService {
	constructor(@InjectModel(News) private newsModel: typeof News) {}
	async create(dto: CreateNewsDto | any, images: string[]): Promise<News> {
		try {
			console.log(`images`, images)
			const news = await this.newsModel.create({ ...dto, images })
			return news
		} catch (error) {
			throw new HttpException(
				"Ошибка при создании новости!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async update(
		id: number | string,
		dto: CreateNewsDto | any,
		images: string[],
	): Promise<News> {
		try {
			const newsID = await this.newsModel.findByPk(Number(id))
			if (images.length > 0) {
				const arr: string[] = newsID.images.length > 0 ? newsID.images : []
				images.forEach((item) => arr.push(item))
				await newsID.update({ ...dto, images: arr })
			} else {
				await newsID.update(dto)
			}
			await newsID.save()
			return newsID
		} catch (error) {
			throw new HttpException(
				"Ошибка при обновлении новости!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async showAll(): Promise<News[]> {
		try {
			const news = await this.newsModel.findAll({ include: { all: true } })
			return news
		} catch (error) {
			throw new HttpException(
				"Ошибка при показе новостей!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async showOne(link: string): Promise<News[]> {
		try {
			const news = await this.newsModel.findOne({
				where: { link },
				include: { all: true },
			})
			const arr: News[] = []
			arr.push(news)
			return arr
		} catch (error) {
			throw new HttpException(
				"Ошибка при показе новости!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
	async delete(id: number): Promise<News> {
		try {
			const news = await this.newsModel.findByPk(id)
			await news.destroy()
			return news
		} catch (error) {
			throw new HttpException(
				"Ошибка при удалении новости!",
				HttpStatus.BAD_REQUEST,
			)
		}
	}
}
