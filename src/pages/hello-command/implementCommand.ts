import {
    Light,
    LightOnCommand,
    LightOffCommand,
    RedLight,
    RedLightOn,
    RedLightOff,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    RemoteController,
    Command
} from "../../patterns/command/LightCommand";
let redOn: boolean = false

export function commandOnReciever(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? commandOnReciever(new RedLightOn(new RedLight())) : commandOnReciever(new LightOnCommand(new Light()))
            break;

        case "off":
            redOn=false
            result = redOn ? commandOnReciever(new RedLightOff(new RedLight())) : commandOnReciever(new LightOffCommand(new Light()))
            break

        case "increase":
            result=redOn?commandOnReciever(new RedLightIncreaseLuminosity(new RedLight())):commandOnReciever(new LightOnCommand(new Light()))

            break

        case "decrease":
            console.log("decrease")
            result =redOn?commandOnReciever(new RedLightDecreaseLuminosity(new RedLight())) : commandOnReciever(new LightOnCommand(new Light()))
            break

        case "red":
            redOn = true
            result=redOn?commandOnReciever(new RedLightOn(new RedLight())):commandOnReciever(new LightOnCommand(new Light()))
            break
        default:

    }
    // @ts-ignore
    return result;

}