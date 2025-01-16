import { For, HStack } from "@chakra-ui/react"
import { Button } from "../components/ui/button"
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog"
import Modal1 from "./Modal1"
import Modal2 from "./Modal2"
import Modal3 from "./Modal3"
// import Modal2 from "./Modal2"

const Demo = () => {
    return (
        <HStack wrap="wrap" gap="4">
            <For each={["center"]}>
                {(placement) => (
                    <DialogRoot
                        key={placement}
                        placement={placement}
                        motionPreset="slide-in-bottom"
                    >
                        <DialogTrigger asChild>
                            <Button variant="outline">ARMA TU COMBO</Button>
                        </DialogTrigger>
                        <DialogContent>


                            <DialogBody className="mt-[2rem] flex flex-col gap-[2rem] w-full">
                                <h3 className="text-[1.3rem] font-bold">Elegir Combo</h3>
                                <Modal1 />
                                <Modal2 />
                                <Modal3 />
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogActionTrigger>
                            </DialogFooter>
                            <DialogCloseTrigger />
                        </DialogContent>
                    </DialogRoot>
                )}
            </For>
        </HStack>
    )
}

export default Demo