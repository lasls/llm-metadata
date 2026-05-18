import type { OverrideConfig, PolicyConfig, SourceData } from '../types/index.js';
/** 数据加载服务 */
export declare class DataLoader {
    private readonly dataDir;
    private readonly cacheDir;
    constructor(dataDir: string, cacheDir: string);
    /** 从网络或缓存加载源数据 */
    loadSourceData(sourceUrl: string): Promise<SourceData>;
    /** 安全读取 JSON 文件 */
    readJSONSafe<T>(filePath: string, defaultValue: T): T;
    /** 加载策略配置 */
    loadPolicy(): PolicyConfig;
    /** 加载覆写配置 */
    loadOverrides(): OverrideConfig;
    /** 从 ppio API 加载补充描述数据（中文） */
    loadPpioDescriptions(ppioUrl: string): Promise<Map<string, string>>;
}
//# sourceMappingURL=data-loader.d.ts.map