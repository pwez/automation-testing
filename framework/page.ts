export interface Page {
    /**
     *
     * @param url
     */
    goto(url?: string): void;
    takeScreenshot(): void;

    /**
     * Page method for clicking buttons
     * @param inputId
     */
    click(inputId: string): Promise<void>;

    /**
     * Page method for toggling radio buttons
     * @param inputId
     */
    toggle(inputId: string): Promise<void>;

    /**
     * Page method for checking checkboxes
     * @param inputId
     */
    check(inputId: string): Promise<void>;

    /**
     * Page method for typing into text fields
     * @param inputId
     * @param inputValue
     */
    type(inputId: string, inputValue: string): Promise<void>;
}
