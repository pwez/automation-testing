export interface Page {
    goto(url?: string): void;
    takeScreenshot(): void;
    click(inputId: string): Promise<void>;
    toggle(inputId: string): Promise<void>;
    check(inputId: string): Promise<void>;
    type(inputId: string, inputValue: string): Promise<void>;
}
