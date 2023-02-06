import {Page} from "./page";
import {Input} from "./test";

export interface Behaviour {
    invoke(page: Page, input: Input);
}

export class BehaviourProvider {
    behaviours: Map<BehaviourType, Behaviour>;
    constructor() {
        this.behaviours = new Map<BehaviourType, Behaviour>();
        this.behaviours.set(BehaviourType.BUTTON, new ButtonBehaviour());
        this.behaviours.set(BehaviourType.TEXT, new TextBehaviour());
        this.behaviours.set(BehaviourType.CHECKBOX, new CheckboxBehaviour());
        this.behaviours.set(BehaviourType.RADIO, new RadioBehaviour());
    }
}

export class ButtonBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
        await page?.click(input.inputId);
    }
}

export class RadioBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

export class CheckboxBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

export class TextBehaviour implements Behaviour {
    async invoke(page: Page, input: Input) {
    }
}

export enum BehaviourType {
    RADIO,
    BUTTON,
    TEXT,
    CHECKBOX
}
