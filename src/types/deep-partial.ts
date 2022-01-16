type DeepPartial<T extends {}> = {
	[K in keyof T]?: DeepPartial<T[K]>;
};

export default DeepPartial;
