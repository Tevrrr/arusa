/** @format */

import { UploadedFile } from 'express-fileupload';
import { unlink } from 'node:fs';
import path from 'path';
import uniqid from 'uniqid';

const FILE_DIRECTORY = '/productServerPNG';
const PATH_SAVE_FILE = 'public';

class FileService {
	async saveFile(
		file: UploadedFile[] | UploadedFile,
		title: string
	): Promise<string[] | null> {
		try {
			if (Array.isArray(file)) {
				return file.map((item) => {
					const fileName = (uniqid(title) + '.png').replaceAll(
						' ',
						''
					);
					const filePath = path.resolve(PATH_SAVE_FILE + FILE_DIRECTORY, fileName);
					item.mv(filePath);
					return  `${FILE_DIRECTORY}/${fileName}`;
				});
			}
			const fileName = (uniqid(title) + '.png').replaceAll(' ', '');
			const filePath = path.resolve(
				PATH_SAVE_FILE + FILE_DIRECTORY,
				fileName
			);
			file.mv(filePath);
			return [`${FILE_DIRECTORY}/${fileName}`];
		} catch (error) {
			console.log(error);
			return null;
		}
	}
	async removeFile(fileName: string): Promise<boolean> {
		try {
			await unlink(`${PATH_SAVE_FILE}/${fileName}`, (err) => {
				if (err) throw err;
			});
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
export default new FileService();
