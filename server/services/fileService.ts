/** @format */

import { UploadedFile } from 'express-fileupload';
import { unlink } from 'node:fs';
import path from 'path';
import uniqid from 'uniqid';

const FILE_DIRECTORY = '/productServerPNG';
const PATH_SAVE_FILE = 'public';

interface IFileResult {
	filePaths?: string[];
	errorMessage?: string;
}

class FileService {
	async saveFile(
		file: UploadedFile[] | UploadedFile,
		title: string
	): Promise<IFileResult> {
		try {
            if (Array.isArray(file)) {
                const filePaths = file.map((item) => {
					const fileName = (uniqid(title) + '.png').replaceAll(
						' ',
						''
					);
					const filePath = path.resolve(
						PATH_SAVE_FILE + FILE_DIRECTORY,
						fileName
					);
					item.mv(filePath);
					return `${FILE_DIRECTORY}/${fileName}`;
				});
				return { filePaths };
			}
			const fileName = (uniqid(title) + '.png').replaceAll(' ', '');
			const filePath = path.resolve(
				PATH_SAVE_FILE + FILE_DIRECTORY,
				fileName
			);
			file.mv(filePath);
			return {filePaths:[`${FILE_DIRECTORY}/${fileName}`]};
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Save file error' };
		}
	}
	async removeFile(fileName: string): Promise<IFileResult> {
		try {
			await unlink(`${PATH_SAVE_FILE}/${fileName}`, (err) => {
				if (err) throw err;
			});
			return {};
		} catch (error) {
			console.log(error);
			return { errorMessage: 'Remove file error' };
		}
	}
}
export default new FileService();
