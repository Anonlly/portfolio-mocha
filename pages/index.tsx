import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box,
  Code,
  Flex,
  Heading,
  Image,
  Badge,
  Text,
  useDimensions,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Progress,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Spacer,
  AspectRatio,
  Icon,
  Hide,
  Button,
  Textarea,
  useToast
} from '@chakra-ui/react'

import { FaGithub, FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { ExternalLinkIcon, ArrowBackIcon, ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons"
async function sendMessage(message: string): Promise<string> {
  try {
    const response = await fetch('https://discord.com/api/webhooks/900574162219827331/eqG3eQ6HKAe3Sq1Q6pyqgu3LGUH_m45qi814l9KJuECVAaPs6CJy1VvQJUv7ORNbAqBz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: message })
    })
    return "success"
  }
  catch (e) {
    return "error"
  }
}
interface certificate {
  name: string,
  image: string,
  date: string,
  type: string
}
const certificates: Array<certificate> = [
  {
    name: "Data Query with Transact-SQL",
    image: "/1.webp",
    date: "9 June 2022",
    type: "Data Science"
  },
  {
    name: "Essential Math for Machine Learning",
    image: "/2.webp",
    date: "20 June 2022",
    type: "Data Science"
  },
  {
    name: "Introduction to Python Programming",
    image: "/3.webp",
    date: "17 May 2022",
    type: "Data Science"
  },
  {
    name: "Introduction to Data Science",
    image: "/4.webp",
    date: "8 June 2022",
    type: "Data Science"
  },
  {
    name: "Introduction to R for Data Science",
    image: "/5.webp",
    date: "20 June 2022",
    type: "Data Science"
  }
]

function handleClick(index: number): void {
  window.open(`http://${window.location.host}/${index}.pdf`)
}
function openSourceCode(): void {
  window.open("https://github.com/Anonlly/portfolio-mocha")
}
const Home: NextPage = () => {
  const [fill, setFill] = useState("#F38BA8")
  const [carousel, setCarousel] = useState(1)
  const toast = useToast()
  const [message, setMessage] = useState("")
  const [illustChoice, setIllustChoice] = useState("night-calls")
  function changeCarousel(type: 'next' | 'previous'): void {
    if (type === 'next') {
      setCarousel((prevState) => {
        if (prevState === 3) {
          return 1
        }
        return prevState + 1
      })
    } else {
      setCarousel((prevState) => {
        if (prevState === 1) {
          return 3
        }
        return prevState - 1
      })
    }
  }
  const eleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const dimensions = useDimensions(eleRef, true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setIllustChoice(["night-calls", "hacker"][Math.floor(Math.random() * 2)])
    setTimeout(() => { setLoading(false) }, 1000)
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Ashja Radithya Lesmana</title>
        <meta name="description" content="Front-end developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position={"absolute"} w={"93vw"} justifyContent="flex-end" mt="30px">
        <Icon as={FaGithub} w={"20px"} h={"20px"} color="mochaPink.200" cursor={"pointer"} onClick={openSourceCode} />
        <Text fontWeight={200} color="mochaPink.200" ml="5px" cursor={"pointer"} onClick={openSourceCode}>Source Code</Text>
      </Flex>
      <main className={styles.main}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Ashja Radithya <br />Lesmana
          </h1>
          <div className={styles.roles}>
            <div className={styles.role}>
              <img src="/web.svg" />
              <span>Front-end Developer</span>
            </div>
            <div className={styles.role}>
              <img src="/analytic.svg" />
              <span>Data Analyst</span>
            </div>
            <div className={styles.role}>
              <img src="/javascript.svg" />
              <span>Javascript Developer</span>
            </div>
          </div>
          <div className={styles.action}>
            <a className={styles.buttonWrapper} onMouseOver={() => { setFill("#181825") }} onMouseLeave={() => { setFill("#F38BA8") }} href="#contact">
              <div className={styles.filler}>
              </div>
              <button className={styles.buttonOutline}>
                {fill === "#181825" ? <img src="/mail-alt.svg" /> : <img src="/mail.svg" />}
                <div>Contact Me</div>
              </button>
            </a>
            <a href="#profile">
              <button className={styles.buttonFilled}>
                My Profile
              </button>
            </a>
          </div>

        </div>
        <div className={styles.illustSection}>
          <img src="/moonlight.svg" />
          <span>Aesthetic Illustration by <a rel="noopener noreferrer" href='https://undraw.co' target="_blank">Undraw</a></span>
        </div>
      </main>
      <Heading id="profile" fontWeight={200} textAlign={"center"} mt={30}>Profile</Heading>
      <Flex ref={eleRef} mr={5} ml={5} id="profile" w={"auto"} flexDir="row" flexWrap={"wrap"} justifyContent="center" alignItems={"center"}>
        <Flex bg="#313244" mr={5} ml={5} flexGrow={1} minW={300} minH={314} mt={30} borderRadius={10} flexWrap={"wrap"} flexDirection="row" alignItems="center" justifyContent={dimensions && dimensions?.borderBox.width < 768 ? "center" : ""}>
          <Image src={"/photo.webp"} maxW={210} maxH={260} m={"20px"} justifySelf={"flex-start"} />
          <Text
            m={dimensions && dimensions?.borderBox.width < 768 ? "20px" : "10px"}
            fontSize={dimensions && dimensions?.borderBox.width < 768 ? "sm" : "md"}
            maxW={500}>Hi, I&aposm Ashja, a <Code colorScheme={"pink"}>Front-End Web Developer</Code> <br />
            experienced in Javascript, more specifically React.JS. {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            Full-Stack Developer role is also viable for me, {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            utilizing serverless technology plus React.JS producing {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            high quality website with low-cost maintenance.<br />
            <br />
            Some other tech-proficiencies that i possess from hobby are {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            Data Analysis and Software Penetration Testing. However, {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            I recently attend data analyst course (held by Microsoft) {dimensions && dimensions?.borderBox.width < 768 ? <></> : <br />}
            and have gained certificates.</Text>
        </Flex>
        <Flex bg="#313244" mr={5} ml={5} flexGrow={3} minW={300} minH={300} mt={30} borderRadius={10} justifyContent="center">
          <Tabs colorScheme={"pink"}>
            <TabList>
              <Tab fontSize={dimensions && dimensions?.borderBox.width < 768 ? "sm" : "md"}>Front-End</Tab>
              <Tab fontSize={dimensions && dimensions?.borderBox.width < 768 ? "sm" : "md"}>Data Science</Tab>
              <Tab fontSize={dimensions && dimensions?.borderBox.width < 768 ? "sm" : "md"}>Back-End</Tab>
              <Tab fontSize={dimensions && dimensions?.borderBox.width < 768 ? "sm" : "md"}>Penetration Testing</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex>
                  <Flex flexDir="column" flexGrow={1}>
                    <Text>HTML</Text>
                    <Progress value={90} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>CSS</Text>
                    <Progress value={75} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>Javascript</Text>
                    <Progress value={95} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>React.JS</Text>
                    <Progress value={80} mb={5} mt={3} size='xs' colorScheme='pink' />
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex>
                  <Flex flexDir="column" flexGrow={1}>
                    <Text>SQL</Text>
                    <Progress value={60} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>Python</Text>
                    <Progress value={80} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>R Language</Text>
                    <Progress value={70} mb={5} mt={3} size='xs' colorScheme='pink' />
                    <Text>Math</Text>
                    <Progress value={65} mb={5} mt={3} size='xs' colorScheme='pink' />
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDir="column" flexGrow={1}>
                  <Text>Node.JS</Text>
                  <Progress value={87} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Express.JS</Text>
                  <Progress value={92} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Firebase</Text>
                  <Progress value={89} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Websocket</Text>
                  <Progress value={65} mb={5} mt={3} size='xs' colorScheme='pink' />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexDir="column" flexGrow={1}>
                  <Text>Web App Security</Text>
                  <Progress value={72} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Network Security</Text>
                  <Progress value={45} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Malicious Software Development</Text>
                  <Progress value={50} mb={5} mt={3} size='xs' colorScheme='pink' />
                  <Text>Reverse Engineering</Text>
                  <Progress value={65} mb={5} mt={3} size='xs' colorScheme='pink' />
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Flex w={"auto"} mr={5} ml={5} flexWrap="wrap" overflow='hidden'>
        <Flex flexDir={"column"} bg="#313244" w={"auto"} flexGrow={1} minH={300} mr={5} ml={5} borderRadius={10} alignItems='center' overflow='hidden' mt={30}>
          <Heading mt={5} textAlign={"center"} size="md" as={"h3"} fontWeight={200} w={"100%"}>Certificates</Heading>
          <Flex flexDir={"column"} justifyContent={"center"} overflow='hidden' w="100%" mt={5} pb={5}>
            {certificates.map((certificate, index) => (
              <Box key={index} borderWidth='1px' borderRadius='lg' overflow='hidden' w="auto" ml="2vw" mr="2vw" mt={3} cursor="pointer" onClick={() => { handleClick(index + 1) }}>
                <Box p='3'>
                  <Flex flexDir={"row"} alignItems="center">
                    <Box>
                      <Box
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                      >
                        {certificate.name}
                      </Box>
                      <Flex alignItems={"center"}>

                        <Badge borderRadius='full' px='2' colorScheme='pink'>
                          {certificate.type}
                        </Badge>
                        <Box as='span' ml='2' color='gray.400' fontSize='sm'>
                          Issued On {certificate.date}
                        </Box>
                      </Flex>
                    </Box>
                    <ExternalLinkIcon ml="auto" mr={3} w={6} h={6} />
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex flexDir={"column"} flexGrow={3} bg="#313244" w={"auto"} ml={5} mr={5} borderRadius={10} mt={30} p={dimensions && dimensions?.borderBox.width < 768 ? "none" : "20px"}>
          <Heading mt={5} textAlign={"center"} size="md" as={"h3"} fontWeight={200} w={"100%"}>Projects</Heading>
          <Flex alignItems={"center"} justifyContent="center">

            <IconButton
              colorScheme='pink'
              aria-label='back'
              variant="outline"
              onClick={() => { changeCarousel("previous") }}
              icon={<ArrowBackIcon />}
            />
            <Spacer />
            {carousel == 1 ?
              <AspectRatio mt={10} w="60vw" maxW="500px" alignSelf={"center"} ratio={16 / 9}>
                <Image w="60vw" src={`/projects/1.webp`} />
              </AspectRatio>
              :
              <Hide>
                <Image w="60vw" src={`/projects/1.webp`} />
              </Hide>
            }
            {carousel == 2 ?
              <AspectRatio mt={10} w="60vw" maxW="500px" alignSelf={"center"} ratio={16 / 9}>

                <Image w="60vw" src={`/projects/2.webp`} />
              </AspectRatio>
              :
              <Hide>
                <Image w="60vw" src={`/projects/2.webp`} />
              </Hide>
            }
            {carousel == 3 ?
              <AspectRatio mt={10} w="60vw" maxW="500px" alignSelf={"center"} ratio={16 / 9}>
                <Image w="60vw" src={`/projects/3.webp`} />
              </AspectRatio>
              :
              <Hide>
                <Image w="60vw" src={`/projects/3.webp`} />
              </Hide>
            }
            <Spacer />
            <IconButton
              colorScheme='pink'
              variant="outline"
              aria-label='back'
              onClick={() => { changeCarousel("next") }}
              icon={<ArrowForwardIcon />}
            />
          </Flex>
          <Slider mt={10} value={carousel} min={0} max={3} step={1}>
            <SliderTrack bg='gray.700'>
              <Box position='relative' right={10} />
              <SliderFilledTrack bg='pink.200' />
            </SliderTrack>
          </Slider>
        </Flex>
      </Flex>
      <Heading id="contact" fontWeight={200} textAlign={"center"} mt={75}>Get In Touch</Heading>
      <Flex justifyContent={"center"} alignItems="center" p={35} flexWrap="wrap">
        <Flex borderRadius={10} w={dimensions && dimensions?.borderBox.width < 768 ? "100%" : "auto"} flexDir={"column"} bg={"#313244"} flexGrow={1} alignItems="center" justifyContent={"center"} p={5}>
          <Heading id="profile" fontWeight={200} textAlign={"center"} size="lg" mt={15}>Contacts</Heading>
          <Button mt={15} onClick={() => { window.open("mailto:ashja234@gmail.com") }} variant={"outline"} colorScheme="mochaPink" leftIcon={<EmailIcon />}>Email <Code ml={2} fontWeight={200} colorScheme={"pink"} >ashja234@gmail.com</Code></Button>
          <Button mt={2} onClick={() => { window.open("https://discordapp.com/users/472019006409146370") }} variant={"outline"} colorScheme="blue" leftIcon={<Icon as={FaDiscord} />}>Discord Chat <Code ml={3} fontWeight={200} colorScheme={"blue"}>Valent#8893</Code></Button>
          <Button mt={2} onClick={() => { window.open("https://wa.me/6285710251303") }} variant={"outline"} colorScheme="whatsapp" leftIcon={<Icon as={FaWhatsapp} />}>PM Me <Code ml={1} fontWeight={200} colorScheme={"whatsapp"}>+62 857-1025-1303</Code></Button>
          <Text mt={3} color={"gray.300"}>Or</Text>
          <Textarea
            placeholder='Your Message...'
            size='xs'
            m={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            variant="filled"
            focusBorderColor="mochaPink.300"
            colorScheme="mochaPink"
            resize={"vertical"} />
          <Button
            alignSelf={"flex-start"}
            mt={1}
            variant={"solid"}
            colorScheme="mochaPink"
            leftIcon={<ArrowForwardIcon />}
            onClick={() => {
              sendMessage(message).then(status => {
                if (status === "success") {
                  toast({
                    title: "Message Sent",
                    position: "bottom-left",
                    variant: "left-accent",
                    status: "success",
                    isClosable: true
                  })
                }
              })
              setMessage("")
            }}
          >Send Message</Button>
          <Text color="gray.500" mt={3} alignSelf={"flex-start"} fontSize={"11px"}>Put your email or contact address so i can reply :)</Text>
        </Flex>
        <Flex flexGrow={5} alignItems="center" justifyContent={"center"}>
          <Hide below="md">
            <Image maxW="30vw" src={`/${illustChoice}.svg`} />
          </Hide>
        </Flex>
      </Flex>
      <Flex mt={5} pb={2} pt={2} justifyContent={"center"} alignItems="center" bg="#313244">
        <Text m={15} color="mochaPink.300">Mocha Portfolio, Made with Ambition not Love.</Text>
        <IconButton
          aria-label='Github'
          colorScheme={"mochaPink"}
          variant="outline"
          onClick={()=>{window.open("https://github.com/Anonlly")}}
          ml={5}
          icon={<Icon as={FaGithub} />} />
        <IconButton
          aria-label='Instagram'
          colorScheme={"mochaPink"}
          onClick={()=>{window.open("https://www.instagram.com/ashja.rl/")}}
          variant="outline"
          ml={2}
          icon={<Icon as={FaInstagram} />} />
        <IconButton
          aria-label='Whatsapp'
          colorScheme={"mochaPink"}
          onClick={()=>{window.open("https://wa.me/6285710251303")}}
          variant="outline"
          ml={2}
          icon={<Icon as={FaWhatsapp} />} />
      </Flex>
    </div>
  )
}

export default Home
