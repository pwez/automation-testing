import {Behaviour, BehaviourProvider, BehaviourType} from "../../framework";

export default class PlaywrightBehaviourProvider implements BehaviourProvider {
    behaviours: Map<BehaviourType, Behaviour>;

}