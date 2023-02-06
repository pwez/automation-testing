import {Behaviour, BehaviourProvider, ButtonBehaviour, InputType} from "../../framework";

import {
    PuppeteerButtonBehaviour,
    PuppeteerCheckboxBehaviour,
    PuppeteerRadioBehaviour,
    PuppeteerTextBehaviour
} from './behaviour';

class PuppeteerBehaviourProvider implements BehaviourProvider {
    behaviours: Map<InputType, Behaviour>;

    constructor() {
        this.behaviours = new Map<InputType, Behaviour>();
        this.behaviours.set(InputType.BUTTON, new ButtonBehaviour());
        // this.behaviours.set(InputType.BUTTON, new PuppeteerButtonBehaviour());
        this.behaviours.set(InputType.TEXT, new PuppeteerTextBehaviour());
        this.behaviours.set(InputType.CHECKBOX, new PuppeteerCheckboxBehaviour());
        this.behaviours.set(InputType.RADIO, new PuppeteerRadioBehaviour());
    }
}

export default PuppeteerBehaviourProvider;