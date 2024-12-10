import { For, HStack } from "@chakra-ui/react"
import { Button } from "../components/ui/button"
import { IoIosArrowForward } from "react-icons/io";
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

const Modal2 = () => {
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

                            <div className="w-full cursor-pointer flex items-center justify-between gap-[1.5rem] p-[.5rem]">
                                <div className="flex items-center justify-center gap-[1rem]">
                                    <div>
                                        <img className="w-[60px]" src="/img/burgersTypes/triple.png" alt="" />
                                    </div>
                                    <div>
                                        <h3>Triple Bacon Mediano</h3>
                                        <p>$11000</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center text-[1.3rem]">
                                    <IoIosArrowForward />
                                </div>
                            </div>

                        </DialogTrigger>
                        <DialogContent>
                            <DialogBody className="mt-[2rem]">

                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button variant="outline">Volver</Button>
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

export default Modal2