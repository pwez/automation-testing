import {Page} from "./page";

export interface Browser {
    pages: Map<number, Page>;
    launch(): void;
    openPage(): Promise<Page>;
    close(): void;
}

