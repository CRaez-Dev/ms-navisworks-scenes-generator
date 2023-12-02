import { Query, Params } from '@types/express-serve-static-core'
import { Request } from 'express'
import { Session } from 'express-session'

export type CustomSession = Session

export type FileRequest<T>  = Record<string,T>

export interface RequestType<
	T extends Query = never,
	U = never,
	K extends Params = never,
	L extends CustomSession = CustomSession,
	M extends FileRequest = never
> extends Request {
	body: U,
	query: T,
	params: K,
	session: L,
	files: M
}