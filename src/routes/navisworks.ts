import { Router } from 'express'
import { FileRequest, RequestType } from '../types'
import { UploadedFile } from 'express-fileupload'
import xml2json from 'xml2json'
import xmlBufferToString from 'xml-buffer-tostring'
import readXlsxFile from 'read-excel-file/node'

const router = Router()

interface NavisFiles extends FileRequest<UploadedFile> {
	xmlFile: UploadedFile,
	settingFile: UploadedFile,
}

router.post('/', async (req: RequestType<never, never, never, never, NavisFiles>, res) => {
	try {
		const { xmlFile, settingFile } = req.files
		const { data: data1 } = xmlFile
		const { data: data2} = settingFile

		const json = JSON.parse(xml2json.toJson(xmlBufferToString(data1)))
		const jsonSetting = await readXlsxFile(data2)

		res.status(200).send({ success: true, msg: 'post response', data: { json, jsonSetting } })
	} catch (error) {
		res.status(500).send({ success: false, error: (error as Error).message })
	}

})


export default router
