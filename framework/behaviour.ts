import {Page} from "./page";
import {Input} from "./test";

export enum InputType {
    RADIO,
    BUTTON,
    TEXT,
    CHECKBOX
}

export interface BehaviourProvider {
    behaviours: Map<InputType, Behaviour>;
}

export interface Behaviour {
    invoke(page: Page, input: Input);
}

export class ButtonBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
        await page?.click(input.inputId);
    }
}

export abstract class RadioBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

export abstract class CheckboxBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

export abstract class TextBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

