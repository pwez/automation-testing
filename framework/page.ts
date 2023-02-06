export interface Page {
    goto(url?: string): void;
    takeScreenshot(): void;
    click(inputId: string): Promise<void>;
}
