import {Behaviour, BehaviourProvider, InputType} from "../../framework";

export default class PlaywrightBehaviourProvider implements BehaviourProvider {
    behaviours: Map<InputType, Behaviour>;

}