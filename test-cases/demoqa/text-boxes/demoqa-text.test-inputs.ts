import {BehaviourType, Input} from "../../../framework";

const DemoqaTextTestInputs: Input[] = [
    {
        inputId: 'item-0',
        behaviourType: BehaviourType.BUTTON,
    }, {
        inputId: 'userName',
        behaviourType: BehaviourType.TEXT,
        inputValue: 'username'
    }, {
        inputId: 'userEmail',
        behaviourType: BehaviourType.TEXT,
        inputValue: 'name@email.com'
    }, {
        inputId: 'currentAddress',
        behaviourType: BehaviourType.TEXT,
        inputValue: '123 Blue St. Henderson, NV 12345'
    }, {
        inputId: 'permanentAddress',
        behaviourType: BehaviourType.TEXT,
        inputValue: '456 Red St. Las Vegas, NV 12345'
    }, {
        inputId: 'submit',
        behaviourType: BehaviourType.BUTTON
    }
];

export default DemoqaTextTestInputs;