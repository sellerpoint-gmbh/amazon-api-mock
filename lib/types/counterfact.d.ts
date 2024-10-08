export interface CounterfactContext {
	query?: Record<string, string>
	path?: Record<string, string>
	header?: Record<string, string>
	body?: any
	response?: Record<number, any>
}
