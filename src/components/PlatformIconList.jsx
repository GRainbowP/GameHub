import { HStack, Icon } from "@chakra-ui/react"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'; 
import { MdPhoneIphone } from 'react-icons/md'; 
import { SiNintendo } from 'react-icons/si'; 
import { BsGlobe } from 'react-icons/bs'; 

const icons = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
}

function PlatformIconList({platforms}) {

    return (
        <HStack marginY={1} color="gray.500">
            {platforms.map(({platform}) => (
                <Icon key={platform.id} as={icons[platform.slug]} />
            ))}
        </HStack>
    )
}

export default PlatformIconList